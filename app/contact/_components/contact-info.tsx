"use client"

import { motion } from "framer-motion"
import { Mail, Zap, Shield } from "lucide-react"

export function ContactInfoList() {
    return (
        <div className="space-y-6 pt-4">
            <ContactInfoItem
                icon={Mail}
                title="Email Support"
                description="support@chatsecure.com"
                delay={0.1}
            />
            <ContactInfoItem
                icon={Zap}
                title="API Access"
                description="Request your API key through the form"
                delay={0.2}
            />
            <ContactInfoItem
                icon={Shield}
                title="Enterprise Solutions"
                description="Custom plans for large organizations"
                delay={0.3}
            />
        </div>
    )
}

function ContactInfoItem({
    icon: Icon,
    title,
    description,
    delay,
}: {
    icon: any
    title: string
    description: string
    delay: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="flex items-start space-x-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors"
        >
            <div className="p-3 rounded-lg bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border border-purple-500/20 text-purple-400">
                <Icon className="size-6" />
            </div>
            <div>
                <h3 className="font-semibold text-white/90">{title}</h3>
                <p className="text-sm text-gray-400 mt-1">{description}</p>
            </div>
        </motion.div>
    )
}
