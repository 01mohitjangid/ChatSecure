"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, LucideIcon } from "lucide-react"

interface ProfileSectionProps {
    id: string
    title: string
    icon: LucideIcon
    isExpanded: boolean
    onToggle: (id: string) => void
    children: React.ReactNode
}

export function ProfileSection({
    id,
    title,
    icon: Icon,
    isExpanded,
    onToggle,
    children
}: ProfileSectionProps) {
    return (
        <motion.div
            layout
            className="bg-card border border-border rounded-lg overflow-hidden"
        >
            <button
                onClick={() => onToggle(id)}
                className="w-full"
            >
                <div className="px-6 py-5 flex items-center justify-between hover:bg-secondary/10 transition-all duration-200">
                    <div className="flex items-center gap-3">
                        <motion.div
                            animate={{ rotate: isExpanded ? 360 : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Icon className="w-5 h-5 text-muted-foreground" />
                        </motion.div>
                        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                    </div>
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                </div>
            </button>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-border"
                    >
                        <div className="px-6 py-5">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
