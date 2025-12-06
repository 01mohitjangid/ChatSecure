"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera, Loader2, Upload, X } from "lucide-react"
import { toast } from "sonner"
import { validateImageFile, createImagePreview, compressImage } from "@/lib/image-utils"
import { updateProfilePhoto, removeProfilePhoto } from "./actions"

interface ProfilePhotoUploadProps {
  currentPhoto?: string | null
  userEmail: string
  userInitial: string
}

export function ProfilePhotoUpload({ currentPhoto, userEmail, userInitial }: ProfilePhotoUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState<string | null>(currentPhoto || null)
  const [removing, setRemoving] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file
    const validation = validateImageFile(file)
    if (!validation.valid) {
      toast.error(validation.error)
      return
    }

    try {
      setUploading(true)

      // Create preview
      const previewUrl = await createImagePreview(file)
      setPreview(previewUrl)

      // Compress image
      const compressedFile = await compressImage(file, 500, 500, 0.9)

      // Upload to server
      const formData = new FormData()
      formData.append('file', compressedFile)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Upload failed')
      }

      const data = await response.json()

      // Update user profile with new photo URL
      const result = await updateProfilePhoto(userEmail, data.imageUrl)

      if (result.type === 'success') {
        toast.success('Profile photo updated successfully')
        setPreview(data.imageUrl)
        // Refresh the page to update avatar in header
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      } else {
        throw new Error(result.message || 'Failed to update profile')
      }
    } catch (error) {
      console.error('Upload error:', error)
      toast.error(error instanceof Error ? error.message : 'Failed to upload photo')
      setPreview(currentPhoto || null)
    } finally {
      setUploading(false)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  const handleRemovePhoto = async () => {
    if (!currentPhoto) return

    try {
      setRemoving(true)
      const result = await removeProfilePhoto(userEmail)

      if (result.type === 'success') {
        toast.success('Profile photo removed')
        setPreview(null)
        // Refresh the page to update avatar in header
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      } else {
        throw new Error(result.message || 'Failed to remove photo')
      }
    } catch (error) {
      console.error('Remove error:', error)
      toast.error('Failed to remove profile photo')
    } finally {
      setRemoving(false)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative group">
        <Avatar className="size-32 border-4 border-purple-600 shadow-lg">
          <AvatarImage src={preview || undefined} alt="Profile photo" />
          <AvatarFallback className="bg-purple-600 text-white text-4xl">
            {userInitial}
          </AvatarFallback>
        </Avatar>
        
        <button
          onClick={triggerFileInput}
          disabled={uploading || removing}
          className="absolute bottom-0 right-0 size-10 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center shadow-lg transition-all group-hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {uploading ? (
            <Loader2 className="size-5 animate-spin" />
          ) : (
            <Camera className="size-5" />
          )}
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
        onChange={handleFileSelect}
        className="hidden"
      />

      <div className="flex gap-2">
        <Button
          onClick={triggerFileInput}
          disabled={uploading || removing}
          variant="outline"
          size="sm"
          className=" text-black hover:text-white bg-white"
        >
          {uploading ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <Upload className="mr-2 size-4" />
              Upload Photo
            </>
          )}
        </Button>

        {preview && (
          <Button
            onClick={handleRemovePhoto}
            disabled={uploading || removing}
            variant="outline"
            size="sm"
          >
            {removing ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Removing...
              </>
            ) : (
              <>
                <X className="mr-2 size-4" />
                Remove
              </>
            )}
          </Button>
        )}
      </div>

      <p className="text-xs text-muted-foreground text-center max-w-xs">
        JPG, PNG, GIF or WebP. Max size 5MB. Image will be resized to 500x500px.
      </p>
    </div>
  )
}

