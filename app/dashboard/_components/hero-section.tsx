"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
    return (
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black" />
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            </div>

            {/* Floating Orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]"
                animate={{
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"
                animate={{
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />

            <div className="container relative z-10 px-4 md:px-6">
                <div className="flex flex-col items-center space-y-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300 backdrop-blur-md"
                    >
                        Next-Generation AI Platform
                    </motion.div>

                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 1 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    delay: 0.5,
                                    staggerChildren: 0.05,
                                },
                            },
                        }}
                        className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white max-w-4xl"
                    >
                        {"Experience the Future of ".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            {"Intelligent Chat".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    >
                        Unlock the power of secure, enterprise-grade AI conversations. Built for
                        performance, privacy, and seamless collaboration.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 min-w-[200px]"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/20"
                        >
                            <Link href="/">
                                Get Started
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:text-white"
                        >
                            <Link href="#features">Explore Features</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
