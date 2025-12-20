import { Shield, Lock, Zap, Users, Heart, Sparkles } from "lucide-react"

const values = [
  {
    icon: <Shield className="size-8 text-purple-600" />,
    title: "Security First",
    description: "Every feature we build starts with security at its core. We never compromise on protecting your data."
  },
  {
    icon: <Lock className="size-8 text-purple-600" />,
    title: "Privacy by Design",
    description: "Your conversations are yours alone. We implement privacy-preserving technologies at every layer."
  },
  {
    icon: <Zap className="size-8 text-purple-600" />,
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible with AI while staying true to our values."
  },
  {
    icon: <Users className="size-8 text-purple-600" />,
    title: "User-Centric",
    description: "Everything we do is guided by our users' needs. Your feedback shapes our roadmap."
  },
  {
    icon: <Heart className="size-8 text-purple-600" />,
    title: "Integrity",
    description: "We are transparent about how we operate and honest about our capabilities and limitations."
  },
  {
    icon: <Sparkles className="size-8 text-purple-600" />,
    title: "Excellence",
    description: "We strive for excellence in every interaction, delivering quality that exceeds expectations."
  }
]

export const AboutValues = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-950 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
              What We Stand For
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Core Values
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              These principles guide every decision we make and every feature we build
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg border bg-card p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col space-y-3">
                <div className="rounded-lg bg-purple-100 dark:bg-purple-950 w-fit p-3 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
