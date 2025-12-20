import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    bio: "Former AI researcher at Stanford with 10+ years in machine learning and natural language processing.",
    avatar: "AC",
    social: {
      twitter: "/coming-soon",
      linkedin: "/coming-soon",
      github: "/coming-soon"
    }
  },
  
  {
    name: "Sarah Johnson",
    role: "CTO",
    bio: "Previously led engineering teams at major tech companies. Expert in distributed systems and security.",
    avatar: "SJ",
    social: {
      twitter: "/coming-soon",
      linkedin: "/coming-soon",
      github: "/coming-soon"
    }
  },
  {
    name: "Michael Park",
    role: "Head of Security",
    bio: "Cybersecurity veteran with experience at top security firms. Passionate about privacy-first design.",
    avatar: "MP",
    social: {
      twitter: "/coming-soon",
      linkedin: "/coming-soon",
      github: "/coming-soon"
    }
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product",
    bio: "Product leader focused on user experience. Previously built consumer products used by millions.",
    avatar: "ER",
    social: {
      twitter: "/coming-soon",
      linkedin: "/coming-soon",
      github: "/coming-soon"
    }
  }
]

export const AboutTeam = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-950 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
              The People Behind ChatSecure
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet Our Team
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A passionate group of engineers, researchers, and designers dedicated to building 
              the future of secure AI communication
            </p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center text-center space-y-4 p-6 rounded-lg border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="relative">
                <div className="size-24 rounded-full bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">{member.role}</p>
              </div>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
              <div className="flex space-x-3">
                <Link 
                  href={member.social.twitter}
                  className="rounded-full border p-2 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-colors"
                >
                  <Twitter className="size-4" />
                </Link>
                <Link 
                  href={member.social.linkedin}
                  className="rounded-full border p-2 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-colors"
                >
                  <Linkedin className="size-4" />
                </Link>
                <Link 
                  href={member.social.github}
                  className="rounded-full border p-2 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-colors"
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
