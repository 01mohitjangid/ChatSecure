import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    bio: "Former AI researcher at Stanford with 10+ years in machine learning and natural language processing.",
    avatar: "AC",
    color: "from-purple-500 to-indigo-600"
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    bio: "Previously led engineering teams at major tech companies. Expert in distributed systems and security.",
    avatar: "SJ",
    color: "from-indigo-500 to-purple-600"
  },
  {
    name: "Michael Park",
    role: "Head of Security",
    bio: "Cybersecurity veteran with experience at top security firms. Passionate about privacy-first design.",
    avatar: "MP",
    color: "from-purple-600 to-pink-500"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product",
    bio: "Product leader focused on user experience. Previously built consumer products used by millions.",
    avatar: "ER",
    color: "from-pink-500 to-purple-600"
  }
]

export const AboutTeam = () => {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      <div className="absolute -top-40 left-1/4 size-80 bg-purple-100 dark:bg-purple-950/30 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 right-1/4 size-80 bg-indigo-100 dark:bg-indigo-950/30 rounded-full blur-3xl opacity-30"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 dark:bg-purple-950 px-4 py-2 text-sm text-purple-600 dark:text-purple-400 font-medium">
              The People Behind ChatSecure
            </div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Meet Our <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              A passionate group of engineers, researchers, and designers dedicated to building 
              the future of secure AI communication
            </p>
          </div>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center text-center space-y-5 p-8 rounded-2xl border bg-card hover-lift transition-all duration-500 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Avatar */}
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 scale-110`}></div>
                <div className={`relative size-28 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-3xl font-bold group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  {member.avatar}
                </div>
              </div>
              
              {/* Info */}
              <div className="space-y-2 relative">
                <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors">{member.name}</h3>
                <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold">{member.role}</p>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              
              {/* Social links */}
              <div className="flex space-x-3 pt-2">
                <Link 
                  href="/coming-soon"
                  className="rounded-full border p-2.5 hover:bg-purple-600 hover:border-purple-600 hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <Twitter className="size-4" />
                </Link>
                <Link 
                  href="/coming-soon"
                  className="rounded-full border p-2.5 hover:bg-purple-600 hover:border-purple-600 hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="size-4" />
                </Link>
                <Link 
                  href="/coming-soon"
                  className="rounded-full border p-2.5 hover:bg-purple-600 hover:border-purple-600 hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <Github className="size-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
