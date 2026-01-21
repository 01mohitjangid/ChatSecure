"use client"

import { motion } from "framer-motion"
import { Twitter, Github, Linkedin, Shield, Mail, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative w-full bg-black pt-20 pb-10 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[128px]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[128px]" />

            <div className="container relative z-10 px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="md:col-span-4 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-2"
                        >
                            <div className="rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 p-2.5">
                                <Shield className="size-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">ChatSecure</span>
                        </motion.div>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Empowering the next generation of secure communications with enterprise-grade encryption and AI-driven intelligence.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <SocialLink href="#" icon={Twitter} />
                            <SocialLink href="#" icon={Github} />
                            <SocialLink href="#" icon={Linkedin} />
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <FooterColumn
                            title="Product"
                            links={["Features", "Pricing", "API Docs", "Changelog"]}
                            delay={0.1}
                        />
                        <FooterColumn
                            title="Company"
                            links={["About Us", "Careers", "Blog", "Contact"]}
                            delay={0.2}
                        />
                        <FooterColumn
                            title="Legal"
                            links={["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"]}
                            delay={0.3}
                        />
                    </div>
                </div>

                {/* Massive Text Effect */}
                <div
                    className="w-full flex justify-center py-12 border-t border-white/10"
                >
                    <h1 className="text-[12vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/30 to-white/5 select-none pointer-events-none">
                        CHATSECURE
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-sm text-gray-500">
                    <p>© {currentYear} ChatSecure Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-purple-400 transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-purple-400 transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-purple-400 transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function FooterColumn({ title, links, delay }: { title: string; links: string[], delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="space-y-6"
        >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">{title}</h3>
            <ul className="space-y-4">
                {links.map((link) => (
                    <li key={link}>
                        <Link
                            href="#"
                            className="group flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                        >
                            <span>{link}</span>
                            <ArrowUpRight className="size-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
    return (
        <motion.a
            href={href}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-white/5 text-gray-400 hover:bg-purple-600 hover:text-white transition-colors"
        >
            <Icon className="size-5" />
        </motion.a>
    )
}
