"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
    { value: "99.9", suffix: "%", label: "Uptime Guarantee" },
    { value: "<100", suffix: "ms", label: "Response Time" },
    { value: "256", suffix: "-bit", label: "Encryption" },
    { value: "24/7", suffix: "", label: "Support Available" },
]

export function StatsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <section className="w-full py-16 bg-black border-y border-white/10">
            <div className="container px-4 md:px-6">
                <div
                    ref={ref}
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center space-y-2 text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-400">
                                {stat.value}
                                <span className="text-2xl md:text-3xl text-purple-400/80">{stat.suffix}</span>
                            </div>
                            <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
