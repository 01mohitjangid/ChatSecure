"use client"

import { Rocket, Shield, Users, Zap, Globe, Award } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const milestones = [
  {
    year: "2021",
    title: "The Beginning",
    description: "ChatSecure was founded with a vision to create secure AI communication for everyone.",
    icon: <Rocket className="size-5 text-white" />,
    color: "from-purple-500 to-indigo-500"
  },
  {
    year: "2022",
    title: "First Launch",
    description: "Released our first version to early adopters and gathered valuable feedback.",
    icon: <Shield className="size-5 text-white" />,
    color: "from-indigo-500 to-purple-500"
  },
  {
    year: "2023",
    title: "Rapid Growth",
    description: "Reached 100,000 users and expanded our team to meet growing demand.",
    icon: <Users className="size-5 text-white" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    year: "2024",
    title: "Enterprise Edition",
    description: "Launched enterprise features with advanced security and compliance tools.",
    icon: <Zap className="size-5 text-white" />,
    color: "from-pink-500 to-purple-500"
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded to 150+ countries with multi-language support and local data centers.",
    icon: <Globe className="size-5 text-white" />,
    color: "from-purple-500 to-indigo-500"
  },
  {
    year: "2025",
    title: "Industry Recognition",
    description: "Recognized as a leader in secure AI communication by industry experts worldwide.",
    icon: <Award className="size-5 text-white" />,
    color: "from-indigo-500 to-purple-500"
  }
]

export const AboutTimeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleItems((prev) => prev.includes(index) ? prev : [...prev, index])
          }
        })
      },
      { threshold: 0.3 }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-gray-900/20 bg-[size:30px_30px]"></div>
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 dark:bg-purple-950 px-4 py-2 text-sm text-purple-600 dark:text-purple-400 font-medium">
              Our Journey
            </div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              The ChatSecure <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Story</span>
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              From a small idea to a global platform trusted by millions
            </p>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-200 via-purple-400 to-indigo-400 dark:from-purple-900 dark:via-purple-700 dark:to-indigo-700 rounded-full hidden md:block" />
          
          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                ref={(el) => { itemRefs.current[index] = el }}
                data-index={index}
                className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 py-8 transition-all duration-700 ${
                  visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className={`group inline-block rounded-2xl border bg-card p-6 md:p-8 shadow-sm hover-lift transition-all duration-500 max-w-md ${
                    index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                  }`}>
                    {/* Year badge */}
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${milestone.color} text-white mb-3`}>
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold mt-2 group-hover:text-purple-600 transition-colors">{milestone.title}</h3>
                    <p className="text-muted-foreground mt-3 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10 order-first md:order-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} rounded-full blur-lg opacity-50 scale-150`}></div>
                  <div className={`relative flex items-center justify-center size-14 rounded-full bg-gradient-to-br ${milestone.color} shadow-xl ring-4 ring-background`}>
                    {milestone.icon}
                  </div>
                </div>

                {/* Empty space for opposite side */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
