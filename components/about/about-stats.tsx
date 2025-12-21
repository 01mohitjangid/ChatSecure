"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { number: 1000000, suffix: "+", label: "Users Worldwide", prefix: "" },
  { number: 50, suffix: "M+", label: "Conversations Secured", prefix: "" },
  { number: 99.9, suffix: "%", label: "Uptime Guarantee", prefix: "" },
  { number: 150, suffix: "+", label: "Countries Served", prefix: "" }
]

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!start) return
    
    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [end, duration, start])
  
  return count
}

const StatCard = ({ stat, index, isVisible }: { stat: typeof stats[0], index: number, isVisible: boolean }) => {
  const count = useCountUp(stat.number, 2000, isVisible)
  
  const formatNumber = (num: number) => {
    if (stat.number >= 1000000) {
      return (num / 1000000).toFixed(num >= 1000000 ? 0 : 1)
    }
    if (stat.number === 99.9) {
      return (num / 10 * 10).toFixed(1)
    }
    return num.toString()
  }

  return (
    <div 
      className="group flex flex-col items-center space-y-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-10 text-center hover-lift transition-all duration-500"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative">
        <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tabular-nums">
          {stat.prefix}{stat.number >= 1000000 ? `${formatNumber(count)}M` : stat.number === 99.9 ? count.toFixed(1) : count}{stat.suffix}
        </div>
        <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="text-purple-100 text-lg font-medium">{stat.label}</div>
    </div>
  )
}

export const AboutStats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 size-96 bg-purple-400/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 size-96 bg-indigo-400/20 rounded-full blur-3xl animate-blob animation-delay-200"></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:40px_40px]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm border border-white/20">
            Our Impact
          </div>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
            Trusted by <span className="text-purple-200">Millions</span>
          </h2>
          <p className="max-w-[700px] text-purple-100 text-lg">
            Growing every day, making a difference around the world
          </p>
        </div>
        
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
