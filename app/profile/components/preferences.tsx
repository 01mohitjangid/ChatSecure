"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bell, Moon, Zap, Shield } from "lucide-react"

export function Preferences() {
    const [emailNotifications, setEmailNotifications] = useState(true)

    return (
        <div className="space-y-3">
            <motion.div
                className="bg-secondary/20 rounded-md p-3 hover:bg-secondary/30 transition-all"
                whileHover={{ scale: 1.01 }}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Bell className="w-5 h-5 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium text-foreground">Email Notifications</p>
                            <p className="text-xs text-muted-foreground mt-1">Receive updates about your account</p>
                        </div>
                    </div>
                    <motion.button
                        onClick={() => setEmailNotifications(!emailNotifications)}
                        className={`w-12 h-7 rounded-full flex items-center transition-all ${emailNotifications ? 'bg-accent' : 'bg-secondary'
                            }`}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            animate={{ x: emailNotifications ? 20 : 2 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="w-5 h-5 bg-foreground rounded-full"
                        />
                    </motion.button>
                </div>
            </motion.div>
            <motion.div
                className="bg-secondary/20 rounded-md p-3 hover:bg-secondary/30 transition-all"
                whileHover={{ scale: 1.01 }}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            <Moon className="w-5 h-5 text-accent" />
                        </motion.div>
                        <div>
                            <p className="text-sm font-medium text-foreground">Dark Mode</p>
                            <p className="text-xs text-muted-foreground mt-1">Always enabled</p>
                        </div>
                    </div>
                    <motion.div
                        className="w-12 h-7 bg-foreground rounded-full flex items-center pr-1"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-5 h-5 bg-background rounded-full"
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/* Additional Preference Items */}
            <motion.div
                className="bg-secondary/20 rounded-md p-3 hover:bg-secondary/30 transition-all"
                whileHover={{ scale: 1.01 }}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <motion.div
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <Zap className="w-5 h-5 text-accent" />
                        </motion.div>
                        <div>
                            <p className="text-sm font-medium text-foreground">Performance Mode</p>
                            <p className="text-xs text-muted-foreground mt-1">Optimized experience</p>
                        </div>
                    </div>
                    <motion.button
                        className="w-12 h-7 bg-accent rounded-full flex items-center pl-1 transition-all"
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            animate={{ x: 20 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="w-5 h-5 bg-foreground rounded-full"
                        />
                    </motion.button>
                </div>
            </motion.div>

            <motion.div
                className="bg-secondary/20 rounded-md p-3 hover:bg-secondary/30 transition-all"
                whileHover={{ scale: 1.01 }}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Shield className="w-5 h-5 text-accent" />
                        </motion.div>
                        <div>
                            <p className="text-sm font-medium text-foreground">Enhanced Security</p>
                            <p className="text-xs text-muted-foreground mt-1">Two-factor authentication</p>
                        </div>
                    </div>
                    <motion.button
                        className="w-12 h-7 bg-secondary rounded-full flex items-center pr-1 transition-all"
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            className="w-5 h-5 bg-foreground rounded-full"
                        />
                    </motion.button>
                </div>
            </motion.div>
        </div>
    )
}
