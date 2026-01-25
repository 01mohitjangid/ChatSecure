"use client"

import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactInfoList } from "./_components/contact-info"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            {/* Background Effects */}
            <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />
            <div className="fixed top-0 left-1/4 size-96 bg-purple-900/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="fixed bottom-0 right-1/4 size-96 bg-indigo-900/20 rounded-full blur-[128px] pointer-events-none" />

            <main className="container relative mx-auto px-4 md:px-6 py-20 min-h-screen flex items-center">
                {/* Back Button */}
                <div className="absolute top-8 left-4 md:left-8">
                    <Link href="/dashboard">
                        <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/10 group">
                            <ArrowLeft className="mr-2 size-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Dashboard
                        </Button>
                    </Link>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 w-full max-w-6xl mx-auto pt-10">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm font-medium text-purple-300 backdrop-blur-sm">
                                Get in Touch
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
                                Contact Us
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
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
                        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
                            <ContactForm />
                        </div>

                        {/* Decorative elements around form */}
                        <div className="absolute -top-10 -right-10 size-24 bg-purple-500/20 rounded-full blur-2xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 size-32 bg-indigo-500/20 rounded-full blur-2xl -z-10" />
                    </motion.div>
                </div>
            </main>
        </div>
    )
}
