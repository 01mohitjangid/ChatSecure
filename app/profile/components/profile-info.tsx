"use client"

import { useState, useRef } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "sonner"
import {
    Camera, Loader2, Award, Trash2, FileText, Phone, User
} from "lucide-react"
import { motion } from "framer-motion"
import { validateImageFile, createImagePreview, compressImage } from "@/lib/image-utils"
import { updateProfilePhoto, removeProfilePhoto, updateUserDetails } from "../actions"

interface ProfileInfoProps {
    user: {
        bio?: string
        phoneNumber?: string
        profilePhoto?: string
    }
    userEmail: string
    userInitial: string
}

export function ProfileInfo({ user, userEmail, userInitial }: ProfileInfoProps) {
    const [bio, setBio] = useState(user?.bio || "")
    const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "")
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)

    // Photo State
    const [uploading, setUploading] = useState(false)
    const [preview, setPreview] = useState<string | null>(user?.profilePhoto || null)
    const [removing, setRemoving] = useState(false)

    const fileInputRef = useRef<HTMLInputElement>(null)

    const triggerFileInput = () => {
        fileInputRef.current?.click()
    }

    const handleAutoSave = async () => {
        try {
            const result = await updateUserDetails(userEmail, { bio, phoneNumber })
            if (result.type === 'success') {
                toast.success("Profile updated")
            } else {
                toast.error("Failed to update profile")
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
                toast.success('Profile photo updated')
                setPreview(data.imageUrl)
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

    return (
        <div className="space-y-6">
            <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                onChange={handleFileSelect}
                className="hidden"
            />

            {/* Header with Avatar */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                    >
                        <Avatar className="h-16 w-16 border-2 border-border hover:border-accent transition-colors shadow-lg">
                            <AvatarImage src={preview || undefined} alt="Profile" className="object-cover" />
                            <AvatarFallback className="bg-secondary text-foreground font-bold text-lg">
                                {userInitial}
                            </AvatarFallback>
                        </Avatar>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 rounded-full border-2 border-accent/30"
                        />
                    </motion.div>
                    <div className="text-left flex-1">
                        <div className="flex items-center gap-2">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <User className="w-5 h-5 text-accent" />
                            </motion.div>
                            <h2 className="text-lg font-semibold text-foreground">My Profile</h2>
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Award className="w-4 h-4 text-accent/60" />
                            </motion.div>
                        </div>
                        <p className="text-sm text-muted-foreground truncate max-w-xs">{userEmail}</p>
                    </div>
                </div>
            </div>

            {/* Action Cards Grid */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 mb-4">
                <motion.button
                    onClick={triggerFileInput}
                    disabled={uploading || removing}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-gradient-to-br from-secondary/30 to-secondary/10 hover:from-secondary/50 hover:to-secondary/20 text-foreground rounded-md transition-all flex flex-col items-center gap-2 disabled:opacity-50 group"
                >
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        {uploading ? (
                            <Loader2 className="w-5 h-5 text-accent animate-spin" />
                        ) : (
                            <Camera className="w-5 h-5 text-accent group-hover:text-accent/80" />
                        )}
                    </motion.div>
                    <span className="text-xs font-medium">{uploading ? 'Uploading' : 'Photo'}</span>
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-gradient-to-br from-accent/20 to-accent/10 hover:from-accent/30 hover:to-accent/20 text-foreground rounded-md transition-all flex flex-col items-center gap-2 group"
                >
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Award className="w-5 h-5 text-accent" />
                    </motion.div>
                    <span className="text-xs font-medium">Badge</span>
                </motion.button>

                {preview && (
                    <motion.button
                        onClick={handleRemovePhoto}
                        disabled={uploading || removing}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-4 bg-gradient-to-br from-destructive/20 to-destructive/10 hover:from-destructive/30 hover:to-destructive/20 text-destructive rounded-md transition-all flex flex-col items-center gap-2"
                    >
                        {removing ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <Trash2 className="w-5 h-5" />
                        )}
                        <span className="text-xs font-medium">{removing ? 'Removing' : 'Delete'}</span>
                    </motion.button>
                )}
            </div>

            {/* Photo Upload Hint */}
            <div
                onClick={triggerFileInput}
                className="space-y-3 bg-secondary/10 rounded-md p-4 border border-border/50 cursor-pointer hover:bg-secondary/20 transition-colors"
            >
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide flex items-center gap-2 cursor-pointer">
                    <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                        <Camera className="w-4 h-4" />
                    </motion.div>
                    Profile Photo
                </Label>
                <p className="text-xs text-muted-foreground">Drag and drop or click to upload your profile picture</p>
            </div>

            {/* Bio Section */}
            <motion.div
                className="space-y-2"
                onHoverStart={() => setHoveredItem('bio')}
                onHoverEnd={() => setHoveredItem(null)}
            >
                <Label htmlFor="bio" className="text-xs font-medium text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Bio
                </Label>
                <motion.div
                    animate={{ borderColor: hoveredItem === 'bio' ? 'var(--border)' : 'var(--border)' }}
                >
                    <Textarea
                        id="bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        onBlur={handleAutoSave}
                        placeholder="Tell us about yourself..."
                        className="bg-secondary/30 border-border text-foreground placeholder:text-muted-foreground resize-none min-h-[80px] focus:ring-2 focus:ring-offset-0 transition-all"
                    />
                </motion.div>
            </motion.div>

            {/* Phone Section */}
            <motion.div
                className="space-y-2"
                onHoverStart={() => setHoveredItem('phone')}
                onHoverEnd={() => setHoveredItem(null)}
            >
                <Label htmlFor="phone" className="text-xs font-medium text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                </Label>
                <Input
                    id="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    onBlur={handleAutoSave}
                    placeholder="+1 (555) 000-0000"
                    className="bg-secondary/30 border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-offset-0 transition-all"
                />
            </motion.div>
        </div>
    )
}
