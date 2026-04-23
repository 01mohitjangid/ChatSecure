"use client"

import { motion } from "framer-motion"

const technologies = [
    "Next.js 14",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "OpenAI GPT-4",
    "Vercel AI SDK",
]

export function TechStack() {
    return (
        <section className="w-full py-20 bg-black overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black pointer-events-none" />

            <div className="container px-4 md:px-6 mb-10 relative z-10 text-center">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-white mb-4">
                    Powered by Modern Tech
                </h2>
                <p className="text-gray-400">Built on the most reliable foundations</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <motion.div
                    className="flex space-x-12 animate-marquee whitespace-nowrap py-4"
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                        <div
                            key={index}
                            className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-white/10 bg-white/5 text-lg font-medium text-gray-300 backdrop-blur-sm"
                        >
                            {tech}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
