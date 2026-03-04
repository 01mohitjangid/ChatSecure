"use client"

import { motion } from "framer-motion"
import { Check, X, Shield, Zap, Globe } from "lucide-react"
import Link from "next/link"

const tiers = [
    {
        name: "Free",
        id: "tier-free",
        href: "/dashboard",
        priceMonthly: "$0",
        description: "Perfect for exploring basic AI capabilities and secure messaging.",
        features: [
            "Basic AI Chat features",
            "End-to-End Encryption",
            "Community Support",
            "1GB Storage",
            "Standard Speed",
        ],
        notIncluded: [
            "Advanced AI Models",
            "Priority Support",
            "Custom Integrations",
            "SLA Guarantee",
        ],
        featured: false,
        icon: Shield,
    },
    {
        name: "Pro",
        id: "tier-pro",
        href: "/dashboard",
        priceMonthly: "$29",
        description: "Advanced AI models and priority features for power users.",
        features: [
            "Advanced AI Models (GPT-4, Claude 3)",
            "Priority Processing Speed",
            "24/7 Priority Support",
            "100GB Secure Storage",
            "Unlimited Messaging",
            "API Access (10k requests/mo)",
        ],
        notIncluded: [
            "Custom Dedicated Servers",
            "SLA Guarantee",
        ],
        featured: true,
        icon: Zap,
    },
    {
        name: "Enterprise",
        id: "tier-enterprise",
        href: "/contact",
        priceMonthly: "Custom",
        description: "Dedicated resources and complete control for large organizations.",
        features: [
            "Everything in Pro",
            "Custom Dedicated Servers",
            "Custom AI Model Fine-tuning",
            "SLA Guarantee (99.99% Uptime)",
            "Dedicated Account Manager",
            "SSO Integration",
            "Unlimited Storage & API Calls",
        ],
        notIncluded: [],
        featured: false,
        icon: Globe,
    },
]

export function PricingCards() {
    return (
        <div className="relative isolate bg-black py-24 sm:py-32">
            {/* Background Decorative Gradients */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div
                className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-15"
                    style={{
                        clipPath:
                            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-base font-semibold leading-7 text-indigo-400">Pricing</h2>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Secure pricing for secure conversations
                        </p>
                    </motion.div>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-400">
                    Choose the plan that fits your security and AI needs. From basic explorations to enterprise-grade bespoke solutions.
                </p>

                <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
                    {tiers.map((tier, tierIdx) => (
                        <motion.div
                            key={tier.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: tierIdx * 0.1 }}
                            className={`rounded-3xl p-8 xl:p-10 transition-all duration-300 hover:-translate-y-2 ${tier.featured
                                ? 'bg-white/5 border border-indigo-500/50 shadow-2xl shadow-indigo-500/10'
                                : 'border border-white/10'
                                }`}
                        >
                            <div className="flex items-center justify-between gap-x-4">
                                <h3
                                    id={tier.id}
                                    className={`text-lg font-semibold leading-8 flex items-center gap-2 ${tier.featured ? 'text-indigo-400' : 'text-white'
                                        }`}
                                >
                                    <tier.icon className="h-5 w-5" />
                                    {tier.name}
                                </h3>
                                {tier.featured ? (
                                    <p className="rounded-full bg-indigo-500/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-400">
                                        Most popular
                                    </p>
                                ) : null}
                            </div>
                            <p className="mt-4 text-sm leading-6 text-gray-400">{tier.description}</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-white">{tier.priceMonthly}</span>
                                {tier.priceMonthly !== 'Custom' && <span className="text-sm font-semibold leading-6 text-gray-400">/month</span>}
                            </p>
                            <Link
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={`mt-6 block rounded-md py-2.5 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${tier.featured
                                    ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                                    : 'bg-white/10  text-white hover:bg-white/20'
                                    }`}
                            >
                                {tier.priceMonthly === 'Custom' ? 'Contact sales' : 'Get started'}
                            </Link>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <Check className="h-6 w-5 flex-none text-indigo-400" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                                {tier.notIncluded.map((feature) => (
                                    <li key={feature} className="flex gap-x-3 text-gray-500">
                                        <X className="h-6 w-5 flex-none text-gray-600" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
