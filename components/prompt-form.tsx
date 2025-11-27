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
      <div className="relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-[14px] size-8 rounded-full bg-background p-0 sm:left-4"
              onClick={() => {
                router.push('/new')
              }}
            >
              <IconPlus />
              <span className="sr-only">New Chat</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>New Chat</TooltipContent>
        </Tooltip>

        {/* Image preview */}
        {imagePreview && (
          <div className="relative mb-2 mt-2 inline-block max-w-xs">
            <img
              src={imagePreview}
              alt="Preview"
              className="rounded-lg border border-border max-h-32 object-cover"
            />
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute -right-2 -top-2 size-6 rounded-full"
              onClick={handleRemoveImage}
              disabled={isUploading}
            >
              <IconX className="size-3" />
              <span className="sr-only">Remove image</span>
            </Button>
            {isUploading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                <IconSpinner className="text-white" />
              </div>
            )}
          </div>
        )}

        <Textarea
          ref={inputRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          placeholder="Send a message."
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
        
        <div className="absolute right-0 top-[13px] sm:right-4 flex items-center gap-2">
          {/* Image upload button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="size-8"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
              >
                {isUploading ? <IconSpinner /> : <IconImage />}
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
                disabled={(input === '' && !selectedFile) || isUploading}
              >
                <IconArrowElbow />
                <span className="sr-only">Send message</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Send message</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </form>
  )
}
