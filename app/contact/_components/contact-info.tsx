"use client"

import { motion } from "framer-motion"
import { Mail, Zap, Shield } from "lucide-react"

export function ContactInfoList() {
    return (
        <div className="space-y-4">
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
            className="flex items-start gap-5 bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.07] transition-all group"
        >
            <div className="p-3.5 rounded-xl bg-[#1e1e2e] border border-white/10 text-purple-400 group-hover:text-purple-300 group-hover:bg-purple-500/20 transition-colors">
                <Icon className="size-6" />
            </div>
            <div>
                <h3 className="font-semibold text-white text-lg mb-1">{title}</h3>
                <p className="text-sm text-zinc-400">{description}</p>
            </div>
        </motion.div>
    )
}
