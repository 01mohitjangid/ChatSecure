import { Rocket, Shield, Users, Zap, Globe, Award } from "lucide-react"

const milestones = [
  {
    year: "2021",
    title: "The Beginning",
    description: "ChatSecure was founded with a vision to create secure AI communication.",
    icon: <Rocket className="size-5 text-white" />
  },
  {
    year: "2022",
    title: "First Launch",
    description: "Released our first version to early adopters and gathered valuable feedback.",
    icon: <Shield className="size-5 text-white" />
  },
  {
    year: "2023",
    title: "Rapid Growth",
    description: "Reached 100,000 users and expanded our team to meet growing demand.",
    icon: <Users className="size-5 text-white" />
  },
  {
    year: "2024",
    title: "Enterprise Edition",
    description: "Launched enterprise features with advanced security and compliance tools.",
    icon: <Zap className="size-5 text-white" />
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded to 150+ countries with multi-language support.",
    icon: <Globe className="size-5 text-white" />
  },
  {
    year: "2025",
    title: "Industry Recognition",
    description: "Recognized as a leader in secure AI communication by industry experts.",
    icon: <Award className="size-5 text-white" />
  }
]

export const AboutTimeline = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-950 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
              Our Journey
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The ChatSecure Story
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From a small idea to a global platform trusted by millions
            </p>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-200 dark:bg-purple-900 hidden md:block" />
          
          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`inline-block rounded-lg border bg-card p-6 shadow-sm hover:shadow-lg transition-shadow ${
                    index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                  }`}>
                    <span className="text-sm font-bold text-purple-600">{milestone.year}</span>
                    <h3 className="text-lg font-bold mt-1">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{milestone.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center size-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-800 shadow-lg">
                  {milestone.icon}
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
