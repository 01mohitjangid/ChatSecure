'use client'

import * as React from 'react'
import Textarea from 'react-textarea-autosize'

import { useActions, useUIState } from 'ai/rsc'

import { UserMessage } from './stocks/message'
import { type AI } from '@/lib/chat/actions'
import { Button } from '@/components/ui/button'
import { IconArrowElbow, IconPlus, IconImage, IconX, IconSpinner } from '@/components/ui/icons'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { useEnterSubmit } from '@/lib/hooks/use-enter-submit'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/navigation'
import { validateImageFile, compressImage, createImagePreview } from '@/lib/image-utils'
import { toast } from 'sonner'
import type { ImageAttachment } from '@/lib/types'
import Image from 'next/image'

export function PromptForm({
  input,
  setInput
}: {
  input: string
  setInput: (value: string) => void
}) {
  const router = useRouter()
  const { formRef, onKeyDown } = useEnterSubmit()
  const inputRef = React.useRef<HTMLTextAreaElement>(null)
  const fileInputRef = React.useRef<HTMLInputElement>(null)
  const { submitUserMessage } = useActions()
  const [_, setMessages] = useUIState<typeof AI>()
  const [imagePreview, setImagePreview] = React.useState<string | null>(null)
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
  const [isUploading, setIsUploading] = React.useState(false)

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  // Handle image file selection
  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file
    const validation = validateImageFile(file)
    if (!validation.valid) {
      toast.error(validation.error)
      return
    }

    try {
      // Compress image if needed
      const compressedFile = await compressImage(file)
      setSelectedFile(compressedFile)

      // Create preview
      const preview = await createImagePreview(compressedFile)
      setImagePreview(preview)
    } catch (error) {
      console.error('Error processing image:', error)
      toast.error('Failed to process image')
    }
  }

  // Handle image removal
  const handleRemoveImage = () => {
    setImagePreview(null)
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  // Upload image to server
  const uploadImage = async (): Promise<ImageAttachment | null> => {
    if (!selectedFile) return null

    setIsUploading(true)
    try {
      const formData = new FormData()
      formData.append('file', selectedFile)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Upload failed')
      }

      const data = await response.json()
      return {
        url: data.imageUrl,
        fileName: data.fileName,
        size: data.size,
        type: data.type
      }
    } catch (error) {
      console.error('Upload error:', error)
      toast.error('Failed to upload image')
      return null
    } finally {
      setIsUploading(false)
    }
  }

  // Format file size for display
  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  return (
    <form
      ref={formRef}
      onSubmit={async (e: any) => {
        e.preventDefault()

        // Blur focus on mobile
        if (window.innerWidth < 600) {
          e.target['message']?.blur()
        }

        const value = input.trim()
        
        // Require either text or image
        if (!value && !selectedFile) return

        // Upload image if present
        let imageAttachment: ImageAttachment | null = null
        if (selectedFile) {
          imageAttachment = await uploadImage()
          if (!imageAttachment) {
            return // Upload failed, don't send message
          }
        }

        // Clear inputs
        setInput('')
        handleRemoveImage()

        // Optimistically add user message UI
        setMessages(currentMessages => [
          ...currentMessages,
          {
            id: nanoid(),
            display: <UserMessage imageUrl={imageAttachment?.url}>{value || 'Sent an image'}</UserMessage>
          }
        ])

        // Submit and get response message with image attachment
        const messageContent = imageAttachment 
          ? `${value}\n[User sent an image: ${imageAttachment.url}]`
          : value
        
        const responseMessage = await submitUserMessage(messageContent)
        setMessages(currentMessages => [...currentMessages, responseMessage])
      }}
    >
      <div className="relative flex w-full grow flex-col overflow-visible bg-background sm:rounded-md sm:border">
        
        {/* Compact image preview - similar to v0.app */}
        {imagePreview && selectedFile && (
          <div className="pt-3 pb-1 pl-4">
            <div className="inline-flex items-center gap-2 bg-muted/50 border border-border rounded-lg px-3 py-2 max-w-[280px] group hover:bg-muted/70 transition-colors">
              {/* Small thumbnail */}
              <div className="relative shrink-0">
                <Image
                  src={imagePreview}
                  alt="Preview"
                  className="size-10 rounded object-cover border border-border/50"
                />
                {isUploading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded backdrop-blur-[1px]">
                    <IconSpinner className="text-white size-3" />
                  </div>
                )}
              </div>
              
              {/* File info */}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-foreground truncate">
                  {selectedFile.name}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  {formatFileSize(selectedFile.size)}
                </p>
              </div>
              
              {/* Remove button */}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-6 shrink-0 hover:bg-destructive/10 hover:text-destructive rounded-full"
                onClick={handleRemoveImage}
                disabled={isUploading}
              >
                <IconX className="size-3" />
                <span className="sr-only">Remove image</span>
              </Button>
            </div>
          </div>
        )}

        {/* Input area wrapper with relative positioning for buttons */}
        <div className="relative">
          <Textarea
            ref={inputRef}
            tabIndex={0}
            onKeyDown={onKeyDown}
            placeholder={imagePreview ? "Add a message " : "Send a message."}
            className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
            autoFocus
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            name="message"
            rows={1}
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          
          <div className="absolute right-4 top-[13px] flex items-center gap-1">
          {/* Image upload button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="size-8 hover:bg-accent"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading || !!imagePreview}
              >
                {isUploading ? <IconSpinner className="size-4" /> : <IconImage className="size-4" />}
                <span className="sr-only">Upload image</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Upload image</TooltipContent>
          </Tooltip>
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
            className="hidden"
            onChange={handleImageSelect}
          />

          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                type="submit" 
                size="icon"
                className="size-8"
                disabled={(input === '' && !selectedFile) || isUploading}
              >
                <IconArrowElbow className="size-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Send message</TooltipContent>
          </Tooltip>
          </div>
        </div>
      </div>
    </form>
  )
}
