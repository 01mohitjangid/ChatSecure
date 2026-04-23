"use client"

import { motion } from "framer-motion"
import { Shield, Lock, MessageSquare, Zap, Users, FileCode } from "lucide-react"

const features = [
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-level encryption and security protocols to keep your conversations private and protected.",
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Real-time responses powered by state-of-the-art AI models with optimized performance.",
    },
    {
        icon: MessageSquare,
        title: "Smart Conversations",
        description: "Context-aware AI that understands nuance and maintains conversation history.",
    },
    {
        icon: Lock,
        title: "Privacy First",
        description: "Your data stays yours. No tracking, no selling, no compromises on privacy.",
    },
    {
        icon: Users,
        title: "Multi-User Support",
        description: "Collaborate with team members while maintaining individual privacy and preferences.",
    },
    {
        icon: FileCode,
        title: "Code Understanding",
        description: "Advanced code comprehension for developers with syntax highlighting and explanations.",
    },
]

export function FeaturesGrid() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <section id="features" className="w-full py-20 bg-black relative">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />

            <div className="container relative z-10 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
                            Powerful Features
                        </h2>
                        <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                            Everything you need to build next-generation AI applications
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="flex flex-col space-y-4">
                                <div className="rounded-xl bg-purple-500/20 w-fit p-3 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="size-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute -inset-px bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
