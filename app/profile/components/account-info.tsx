"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { format } from "date-fns"
import { toast } from "sonner"
import {
    Mail, CheckCircle2, Zap, Settings, Shield, Clock, Copy
} from "lucide-react"

interface AccountInfoProps {
    user: {
        email: string
        id: string
        lastLogin?: string
    }
}

export function AccountInfo({ user }: AccountInfoProps) {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        toast.success("Copied to clipboard")
    }

    return (
        <div className="space-y-3">
            {/* Email */}
            <motion.div
                className="bg-secondary/20 rounded-md p-3 flex items-center justify-between hover:bg-secondary/30 transition-all cursor-pointer"
                whileHover={{ scale: 1.01 }}
                onHoverStart={() => setHoveredItem('email')}
                onHoverEnd={() => setHoveredItem(null)}
            >
                <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Email</p>
                        <p className="text-sm text-foreground font-medium mt-1">{user.email}</p>
                    </div>
                </div>
                <motion.button
                    onClick={() => copyToClipboard(user.email)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 hover:bg-secondary/30 rounded-md transition-all text-muted-foreground hover:text-foreground flex-shrink-0"
                >
                    <Copy className="w-4 h-4" />
                </motion.button>
            </motion.div>

            {/* Status Badges */}
            <div className="flex gap-2 flex-wrap mb-2">
                <motion.div
                    className="px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full flex items-center gap-1"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                </motion.div>
                <motion.div
                    className="px-3 py-1 bg-secondary/40 text-foreground text-xs font-medium rounded-full flex items-center gap-1"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <Zap className="w-3 h-3" />
                    Active
                </motion.div>
                <motion.div
                    className="px-3 py-1 bg-muted/40 text-muted-foreground text-xs font-medium rounded-full"
                    whileHover={{ scale: 1.1 }}
                >
                    Premium
                </motion.div>
            </div>

            {/* User ID */}
            <motion.div
                className="bg-secondary/20 rounded-md p-3 flex items-center justify-between hover:bg-secondary/30 transition-all cursor-pointer"
                whileHover={{ scale: 1.01 }}
                onHoverStart={() => setHoveredItem('userid')}
                onHoverEnd={() => setHoveredItem(null)}
            >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                    <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                        <Settings className="w-4 h-4 text-accent flex-shrink-0" />
                    </motion.div>
                    <div className="min-w-0">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">User ID</p>
                        <p className="text-xs text-foreground font-mono mt-1 truncate">{user.id}</p>
                    </div>
                </div>
                <motion.button
                    onClick={() => copyToClipboard(user.id)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 hover:bg-secondary/30 rounded-md transition-all text-muted-foreground hover:text-foreground flex-shrink-0"
                >
                    <Copy className="w-4 h-4" />
                </motion.button>
            </motion.div>


            {/* Last Login */}
            <motion.div
                className="bg-secondary/20 rounded-md p-3 hover:bg-secondary/30 transition-all"
                whileHover={{ scale: 1.01 }}
            >
                <div className="flex items-start gap-3">
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Clock className="w-4 h-4 text-muted-foreground mt-0.5" />
                    </motion.div>
                    <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Last Login</p>
                        <p className="text-sm text-foreground font-medium mt-1">
                            {user.lastLogin ? format(new Date(user.lastLogin), 'MMM d, yyyy HH:mm') : 'First login'}
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Account Status */}
            <motion.div
                className="bg-secondary/20 rounded-md p-3 hover:bg-secondary/30 transition-all"
                whileHover={{ scale: 1.01 }}
            >
                <div className="flex items-start gap-3">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Shield className="w-4 h-4 text-muted-foreground mt-0.5" />
                    </motion.div>
                    <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Plan</p>
                        <p className="text-sm text-foreground font-medium mt-1">Standard Account</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
