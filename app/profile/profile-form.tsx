"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "sonner"
import { updatePassword, updateProfilePhoto, removeProfilePhoto } from "./actions"
import { Loader2, Mail, Key, Calendar, Camera, Upload, X } from "lucide-react"
import { validateImageFile, createImagePreview, compressImage } from "@/lib/image-utils"

interface ProfileFormProps {
  user: {
    id: string
    email: string
    password: string
    salt: string
    profilePhoto?: string
  } | null
  userEmail: string
}

export function ProfileForm({ user, userEmail }: ProfileFormProps) {
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  
  // Photo upload state
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState<string | null>(user?.profilePhoto || null)
  const [removing, setRemoving] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  if (!user) {
    return <div>User not found</div>
  }

  const userInitial = userEmail?.[0]?.toUpperCase() || 'U'

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const validation = validateImageFile(file)
    if (!validation.valid) {
      toast.error(validation.error)
      return
    }

    try {
      setUploading(true)
      const previewUrl = await createImagePreview(file)
      setPreview(previewUrl)

      const compressedFile = await compressImage(file, 500, 500, 0.9)
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
      const result = await updateProfilePhoto(userEmail, data.imageUrl)

      if (result.type === 'success') {
        toast.success('Profile photo updated successfully')
        setPreview(data.imageUrl)
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      } else {
        throw new Error(result.message || 'Failed to update profile')
      }
    } catch (error) {
      console.error('Upload error:', error)
      toast.error(error instanceof Error ? error.message : 'Failed to upload photo')
      setPreview(user?.profilePhoto || null)
    } finally {
      setUploading(false)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  const handleRemovePhoto = async () => {
    if (!preview) return

    try {
      setRemoving(true)
      const result = await removeProfilePhoto(userEmail)

      if (result.type === 'success') {
        toast.success('Profile photo removed')
        setPreview(null)
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

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match")
      return
    }

    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters")
      return
    }

    setLoading(true)

    try {
      const formData = new FormData()
      formData.append("email", user.email)
      formData.append("currentPassword", currentPassword)
      formData.append("newPassword", newPassword)

      const result = await updatePassword(formData)

      if (result.type === "success") {
        toast.success("Password updated successfully")
        setCurrentPassword("")
        setNewPassword("")
        setConfirmPassword("")
        setIsChangingPassword(false)
      } else {
        toast.error(result.message || "Failed to update password")
      }
    } catch (error) {
      toast.error("An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Profile Information */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Mail className="size-4 text-muted-foreground" />
          <h4 className="text-sm font-medium">Account Information</h4>
        </div>
        
        {/* User ID with Profile Photo */}
        <div className="space-y-2">
          <Label htmlFor="user-id" className="text-sm text-muted-foreground">
            User ID
          </Label>
          <div className="flex items-center gap-4">
            {/* Profile Photo Avatar */}
            <div className="relative group shrink-0">
              <Avatar className="size-14 border-2 border-purple-600 shadow-md">
                <AvatarImage src={preview || undefined} alt="Profile photo" />
                <AvatarFallback className="bg-purple-600 text-white text-lg">
                  {userInitial}
                </AvatarFallback>
              </Avatar>
              <button
                onClick={triggerFileInput}
                disabled={uploading || removing}
                className="absolute -bottom-1 -right-1 size-6 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center shadow-md transition-all group-hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {uploading ? (
                  <Loader2 className="size-3 animate-spin" />
                ) : (
                  <Camera className="size-3" />
                )}
              </button>
            </div>
            
            {/* User ID Input and Photo Actions */}
            <div className="flex-1 space-y-2">
              <Input
                id="user-id"
                value={user.id}
                disabled
                className="bg-muted"
              />
              <div className="flex items-center gap-2">
                <Button
                  onClick={triggerFileInput}
                  disabled={uploading || removing}
                  variant="outline"
                  size="sm"
                  className="h-7 text-xs"
                >
                  {uploading ? (
                    <>
                      <Loader2 className="mr-1 size-3 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-1 size-3" />
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
                    className="h-7 text-xs"
                  >
                    {removing ? (
                      <>
                        <Loader2 className="mr-1 size-3 animate-spin" />
                        Removing...
                      </>
                    ) : (
                      <>
                        <X className="mr-1 size-3" />
                        Remove
                      </>
                    )}
                  </Button>
                )}
                <span className="text-xs text-muted-foreground">
                  JPG, PNG, GIF, WebP (max 5MB)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm text-muted-foreground">
            Email Address
          </Label>
          <Input
            id="email"
            value={user.email}
            disabled
            className="bg-muted"
          />
        </div>
      </div>

      <Separator />

      {/* Password Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Key className="size-4 text-muted-foreground" />
            <h4 className="text-sm font-medium">Password</h4>
          </div>
          {!isChangingPassword && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsChangingPassword(true)}
            >
              Change Password
            </Button>
          )}
        </div>

        {isChangingPassword ? (
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input
                id="current-password"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                disabled={loading}
                autoComplete="current-password"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={6}
                disabled={loading}
                autoComplete="new-password"
              />
              <p className="text-xs text-muted-foreground">
                Must be at least 6 characters long
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                disabled={loading}
                autoComplete="new-password"
              />
            </div>

            <div className="flex gap-2">
              <Button type="submit" disabled={loading}>
                {loading && <Loader2 className="mr-2 size-4 animate-spin" />}
                Update Password
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsChangingPassword(false)
                  setCurrentPassword("")
                  setNewPassword("")
                  setConfirmPassword("")
                }}
                disabled={loading}
              >
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Password</Label>
            <Input
              type="password"
              value="••••••••••"
              disabled
              className="bg-muted"
            />
          </div>
        )}
      </div>

      <Separator />

      {/* Account Stats */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Calendar className="size-4 text-muted-foreground" />
          <h4 className="text-sm font-medium">Account Status</h4>
        </div>
        <div className="rounded-lg bg-muted p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Status</span>
            <span className="inline-flex items-center rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-500">
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

