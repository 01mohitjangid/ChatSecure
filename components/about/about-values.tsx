import { Shield, Lock, Zap, Users, Heart, Sparkles } from "lucide-react"

const values = [
  {
    icon: <Shield className="size-8 text-purple-600" />,
    title: "Security First",
    description: "Every feature we build starts with security at its core. We never compromise on protecting your data.",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: <Lock className="size-8 text-purple-600" />,
    title: "Privacy by Design",
    description: "Your conversations are yours alone. We implement privacy-preserving technologies at every layer.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: <Zap className="size-8 text-purple-600" />,
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible with AI while staying true to our values.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <Users className="size-8 text-purple-600" />,
    title: "User-Centric",
    description: "Everything we do is guided by our users' needs. Your feedback shapes our roadmap.",
    gradient: "from-pink-500 to-purple-500"
  },
  {
    icon: <Heart className="size-8 text-purple-600" />,
    title: "Integrity",
    description: "We are transparent about how we operate and honest about our capabilities and limitations.",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: <Sparkles className="size-8 text-purple-600" />,
    title: "Excellence",
    description: "We strive for excellence in every interaction, delivering quality that exceeds expectations.",
    gradient: "from-indigo-500 to-purple-500"
  }
]

export const AboutValues = () => {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-gray-900/20 bg-[size:30px_30px]"></div>
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 dark:bg-purple-950 px-4 py-2 text-sm text-purple-600 dark:text-purple-400 font-medium">
              <Sparkles className="size-4" />
              What We Stand For
            </div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Our Core <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              These principles guide every decision we make and every feature we build
            </p>
          </div>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl border bg-card p-8 hover-lift transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Top gradient line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              
              <div className="relative flex flex-col space-y-4">
                <div className="rounded-xl bg-purple-100 dark:bg-purple-950 w-fit p-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors duration-300">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>

              {/* Corner decoration */}
              <div className="absolute -bottom-8 -right-8 size-24 bg-purple-100/50 dark:bg-purple-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
