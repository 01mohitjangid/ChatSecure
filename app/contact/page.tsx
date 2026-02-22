"use client"

import { ContactForm } from "@/components/contact-form"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { ContactInfoList } from "./_components/contact-info"

export default function ContactPage() {
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, 150])

    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-sans relative overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />

            {/* Large Background Text */}
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-x-0 top-0 h-[500px] flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
            >
                <h1 className="text-[13vw] md:text-[15vw] font-black tracking-tighter text-white/[0.03] whitespace-nowrap">
                    CHATSECURE
                </h1>
            </motion.div>

            <div className="fixed top-0 left-1/4 size-96 bg-purple-900/20 rounded-full blur-[128px] pointer-events-none opacity-50" />
            <div className="fixed bottom-0 right-1/4 size-96 bg-indigo-900/20 rounded-full blur-[128px] pointer-events-none opacity-50" />

            <div className="container relative mx-auto px-4 md:px-6 py-12 lg:py-24 max-w-7xl z-10">
                {/* Back Link */}
                <div className="mb-12">
                    <Link
                        href="/dashboard"
                        className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="mr-2 size-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Dashboard
                    </Link>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-10"
                    >
                        <div className="space-y-6">
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-xs font-medium text-purple-300">
                                Get in Touch
                            </span>
                            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
                                Contact Us
                            </h1>
                            <p className="text-lg text-zinc-400 leading-relaxed max-w-md">
                                Need an API key or have questions? We&apos;re here to help. Fill out the
                                form and our team will get back to you within 24 hours.
                            </p>
                        </div>

                        <ContactInfoList />
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl border border-white/10 bg-[#121212] p-6 md:p-8 lg:p-10 shadow-2xl">
                            <ContactForm />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
