"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Key, Edit2, Lock, Eye, EyeOff, CheckCircle2, X, Save, Zap, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { updatePassword } from "../actions"

interface SecuritySettingsProps {
    userEmail: string
}

export function SecuritySettings({ userEmail }: SecuritySettingsProps) {
    const [isEditingPassword, setIsEditingPassword] = useState(false)
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const handlePasswordChange = async () => {
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
            formData.append("email", userEmail)
            formData.append("currentPassword", currentPassword)
            formData.append("newPassword", newPassword)

            const result = await updatePassword(formData)

            if (result.type === "success") {
                toast.success("Password updated successfully")
                setCurrentPassword("")
                setNewPassword("")
                setConfirmPassword("")
                setIsEditingPassword(false)
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
        <div className="space-y-4">
            {!isEditingPassword ? (
                <motion.button
                    onClick={() => setIsEditingPassword(true)}
                    className="w-full bg-secondary/30 hover:bg-secondary/50 rounded-md p-3 flex items-center justify-between text-left transition-all"
                    whileHover={{ scale: 1.01, backgroundColor: 'var(--secondary)' }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="flex items-center gap-3">
                        <motion.div
                            animate={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                        >
                            <Key className="w-4 h-4 text-muted-foreground" />
                        </motion.div>
                        <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Password</p>
                            <p className="text-sm text-foreground font-medium mt-1">••••••••</p>
                        </div>
                    </div>
                    <motion.div
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                    >
                        <Edit2 className="w-4 h-4 text-muted-foreground" />
                    </motion.div>
                </motion.button>
            ) : (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 bg-secondary/20 rounded-md p-4"
                >
                    <div className="space-y-2">
                        <Label htmlFor="current" className="text-xs font-medium text-muted-foreground uppercase flex items-center gap-2">
                            <Lock className="w-4 h-4" />
                            Current Password
                        </Label>
                        <div className="relative">
                            <Input
                                id="current"
                                type={showCurrentPassword ? "text" : "password"}
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                placeholder="Enter current password"
                                className="bg-secondary/30 border-border text-foreground pr-10"
                            />
                            <motion.button
                                type="button"
                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </motion.button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="new" className="text-xs font-medium text-muted-foreground uppercase flex items-center gap-2">
                            <Zap className="w-4 h-4" />
                            New Password
                        </Label>
                        <div className="relative">
                            <Input
                                id="new"
                                type={showPassword ? "text" : "password"}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Enter new password"
                                className="bg-secondary/30 border-border text-foreground pr-10"
                            />
                            <motion.button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </motion.button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirm" className="text-xs font-medium text-muted-foreground uppercase flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" />
                            Confirm Password
                        </Label>
                        <div className="relative">
                            <Input
                                id="confirm"
                                type={showConfirmPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm new password"
                                className="bg-secondary/30 border-border text-foreground pr-10"
                            />
                            <motion.button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </motion.button>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-end pt-2">
                        <motion.button
                            onClick={() => {
                                setIsEditingPassword(false)
                                setCurrentPassword("")
                                setNewPassword("")
                                setConfirmPassword("")
                            }}
                            disabled={loading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-secondary/30 transition-all flex items-center gap-2"
                        >
                            <X className="w-4 h-4" />
                            Cancel
                        </motion.button>
                        <motion.button
                            onClick={handlePasswordChange}
                            disabled={loading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-4 py-2 bg-foreground text-background rounded-md text-sm font-medium hover:opacity-90 transition-all flex items-center gap-2"
                        >
                            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                            <Save className="w-4 h-4" />
                            Save Password
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </div>
    )
}
