"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "sonner"
import { updatePassword, updateProfilePhoto, removeProfilePhoto, updateUserDetails } from "./actions"
import { Loader2, Mail, Key, Calendar, Camera, Upload, X, Shield, User, CheckCircle2, Phone, FileText, Clock } from "lucide-react"
import { validateImageFile, createImagePreview, compressImage } from "@/lib/image-utils"
import { motion } from "framer-motion"
import { Textarea } from "@/components/ui/textarea"
import { format } from "date-fns"

interface ProfileFormProps {
  user: {
    id: string
    email: string
    password: string
    salt: string
    profilePhoto?: string
    bio?: string
    phoneNumber?: string
    lastLogin?: string
  } | null
  userEmail: string
}

export function ProfileForm({ user, userEmail }: ProfileFormProps) {
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  // Details state
  const [bio, setBio] = useState(user?.bio || "")
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "")

  // Photo upload state
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState<string | null>(user?.profilePhoto || null)
  const [removing, setRemoving] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  if (!user) {
    return <div className="text-red-500">User not found</div>
  }

  const userInitial = userEmail?.[0]?.toUpperCase() || 'U'

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  const handleAutoSave = async () => {
    // Basic check to see if values actually changed could be added here
    // Fixed: Removing strict equality check to allow saving if user prop is stale
    // if (bio === user?.bio && phoneNumber === user?.phoneNumber) return

    try {
      const result = await updateUserDetails(userEmail, { bio, phoneNumber })
      if (result.type === 'success') {
        toast.success("Saved")
      } else {
        toast.error("Failed to save")
      }
    } catch (error) {
      toast.error("Save failed")
    }
  }

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

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Allow only numbers and typical phone characters, max 15 chars
    if (value.length <= 10) {
      setPhoneNumber(value)
    }
  }

  return (
    <motion.div
      className="max-w-4xl mx-auto space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Main Profile Card */}
      <motion.div
        variants={itemVariants}
        className="rounded-xl border border-white/10 bg-zinc-900/50 p-5"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Avatar Area */}
          <div className="relative group flex-none">
            <div className="relative">
              <Avatar className="size-20 border border-white/10 shadow-sm">
                <AvatarImage src={preview || undefined} alt="Profile photo" className="object-cover bg-zinc-800" />
                <AvatarFallback className="bg-zinc-800 text-white text-2xl font-medium">
                  {userInitial}
                </AvatarFallback>
              </Avatar>
              <button
                onClick={triggerFileInput}
                disabled={uploading || removing}
                className="absolute -bottom-1 -right-1 size-7 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed border-2 border-black"
                title="Change photo"
              >
                {uploading ? (
                  <Loader2 className="size-3 animate-spin" />
                ) : (
                  <Camera className="size-3" />
                )}
              </button>
            </div>
          </div>

          {/* Info Area */}
          <div className="flex-1 w-full text-center sm:text-left space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-white">My Profile</h2>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-zinc-500 mt-1">
                  <span className="text-xs font-mono bg-zinc-800/50 px-2 py-0.5 rounded border border-white/5 truncate max-w-[200px] sm:max-w-none">
                    {user.id}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 justify-center sm:justify-end">
                {preview && (
                  <Button
                    onClick={handleRemovePhoto}
                    disabled={uploading || removing}
                    variant="ghost"
                    size="sm"
                    className="h-8 text-xs text-red-400 hover:bg-red-950/20 hover:text-red-300"
                  >
                    Remove Photo
                  </Button>
                )}
              </div>
            </div>

            <Separator className="bg-white/5" />

            <div className="flex flex-col gap-4">
              {/* Email (Read-only) */}
              <div className="p-3 rounded-lg bg-black/20 border border-white/5 space-y-1.5 hover:bg-black/40 transition-colors">
                <div className="flex items-center gap-2 text-zinc-500">
                  <Mail className="size-3.5" />
                  <Label className="text-[10px] font-medium uppercase tracking-wider">Email Address</Label>
                </div>
                <div className="pl-5.5 text-sm text-zinc-200 font-medium truncate">
                  {user.email}
                </div>
              </div>

              {/* Phone (Editable) */}
              <div className="p-3 rounded-lg bg-black/20 border border-white/5 space-y-1.5 hover:bg-black/40 transition-colors focus-within:bg-black/40 focus-within:border-white/10">
                <div className="flex items-center gap-2 text-zinc-500">
                  <Phone className="size-3.5" />
                  <Label htmlFor="phone-input" className="text-[10px] font-medium uppercase tracking-wider">Phone Number</Label>
                </div>
                <div className="pl-5.5">
                  <Input
                    id="phone-input"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    onBlur={handleAutoSave}
                    placeholder="+1 (555) 000-0000"
                    className="h-auto p-0 border-0 bg-transparent text-sm text-zinc-200 placeholder:text-zinc-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              {/* Last Login (Read-only) */}
              <div className="p-3 rounded-lg bg-black/20 border border-white/5 space-y-1.5 hover:bg-black/40 transition-colors">
                <div className="flex items-center gap-2 text-zinc-500">
                  <Clock className="size-3.5" />
                  <Label className="text-[10px] font-medium uppercase tracking-wider">Last Login</Label>
                </div>
                <div className="pl-5.5 text-sm text-zinc-200 font-medium">
                  {user.lastLogin ? format(new Date(user.lastLogin), 'MMM d, yyyy HH:mm') : 'First login'}
                </div>
              </div>

              {/* Plan (Read-only) */}
              <div className="p-3 rounded-lg bg-black/20 border border-white/5 space-y-1.5 hover:bg-black/40 transition-colors">
                <div className="flex items-center gap-2 text-zinc-500">
                  <User className="size-3.5" />
                  <Label className="text-[10px] font-medium uppercase tracking-wider">Plan</Label>
                </div>
                <div className="pl-5.5 text-sm text-zinc-200 font-medium">
                  Standard Account
                </div>
              </div>

              {/* Bio (Editable) */}
              <div className="p-4 rounded-lg bg-black/20 border border-white/5 space-y-2 hover:bg-black/40 transition-colors focus-within:bg-black/40 focus-within:border-white/10">
                <div className="flex items-center gap-2 text-zinc-500 mb-1">
                  <FileText className="size-3.5" />
                  <Label htmlFor="bio-input" className="text-[10px] font-medium uppercase tracking-wider">Bio</Label>
                </div>
                <Textarea
                  id="bio-input"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  onBlur={handleAutoSave}
                  placeholder="Tell us a bit about yourself"
                  className="min-h-[80px] p-0 border-0 bg-transparent text-sm text-zinc-300 placeholder:text-zinc-600 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Security Section */}
      <motion.div
        variants={itemVariants}
        className="rounded-xl border border-white/10 bg-zinc-900/50 p-5"
      >
        <div className="flex items-center gap-3 mb-5">
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Security</h3>
        </div>

        <div className="space-y-4">
          {!isChangingPassword ? (
            <div className="flex items-center justify-between p-3.5 rounded-lg bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-md bg-zinc-800 text-zinc-400">
                  <Key className="size-4" />
                </div>
                <div className="text-sm">
                  <span className="text-zinc-200">Password</span>
                  <span className="text-zinc-600 mx-2">•</span>
                  <span className="text-zinc-500">Last changed recently</span>
                </div>
              </div>
              <Button
                onClick={() => setIsChangingPassword(true)}
                variant="ghost"
                size="sm"
                className="text-xs text-zinc-400 hover:text-white"
              >
                Change
              </Button>
            </div>
          ) : (
            <motion.form
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              onSubmit={handlePasswordChange}
              className="space-y-4 p-4 rounded-lg bg-zinc-900/80 border border-white/5"
            >
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="current-password" className="text-xs text-zinc-400">Current</Label>
                  <Input
                    id="current-password"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                    className="h-9 bg-zinc-950/50 border-white/10 text-sm"
                    placeholder="••••••"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="new-password" className="text-xs text-zinc-400">New</Label>
                  <Input
                    id="new-password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    minLength={6}
                    className="h-9 bg-zinc-950/50 border-white/10 text-sm"
                    placeholder="••••••"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="confirm-password" className="text-xs text-zinc-400">Confirm</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength={6}
                    className="h-9 bg-zinc-950/50 border-white/10 text-sm"
                    placeholder="••••••"
                  />
                </div>
              </div>

              <div className="flex gap-2 justify-end">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setIsChangingPassword(false)
                    setCurrentPassword("")
                    setNewPassword("")
                    setConfirmPassword("")
                  }}
                  disabled={loading}
                  className="h-8 text-xs text-zinc-400 hover:text-white"
                >
                  Cancel
                </Button>
                <Button type="submit" size="sm" disabled={loading} className="h-8 text-xs bg-white text-black hover:bg-zinc-200">
                  {loading && <Loader2 className="mr-2 size-3 animate-spin" />}
                  Update Password
                </Button>
              </div>
            </motion.form>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
