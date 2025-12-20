import { Target, Eye } from "lucide-react"

export const AboutMission = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Mission */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-lg bg-purple-100 dark:bg-purple-950 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
              <Target className="size-4" />
              Our Mission
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Making AI Accessible & Secure
            </h2>
            
            <p className="text-muted-foreground md:text-xl/relaxed">
              At ChatSecure, we believe that everyone deserves access to powerful AI technology 
              without compromising their privacy or security. Our mission is to democratize 
              AI-powered conversations while maintaining the highest standards of data protection.
            </p>
            <p className="text-muted-foreground">
              We&apos;re committed to building AI solutions that respect user privacy, promote 
              transparency, and deliver exceptional value to individuals and organizations alike.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-lg bg-purple-100 dark:bg-purple-950 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
              <Eye className="size-4" />
              Our Vision
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              A Future of Trusted AI
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              We envision a world where AI assistants are trusted partners in every aspect of 
              life—from personal productivity to business innovation—without the fear of data 
              exploitation or privacy breaches.
            </p>
            <p className="text-muted-foreground">
              By pioneering privacy-first AI technology, we aim to set new industry standards 
              and inspire a generation of ethical AI development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
