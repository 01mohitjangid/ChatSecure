import { Target, Eye, ArrowRight } from "lucide-react"

export const AboutMission = () => {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      <div className="absolute -top-40 -right-40 size-80 bg-purple-100 dark:bg-purple-950/30 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 size-80 bg-indigo-100 dark:bg-indigo-950/30 rounded-full blur-3xl opacity-50"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-16 lg:gap-20 lg:grid-cols-2 items-start">
          {/* Mission */}
          <div className="space-y-6 group">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 dark:bg-purple-950 px-4 py-2 text-sm text-purple-600 dark:text-purple-400 font-medium hover-lift cursor-default">
                <Target className="size-4" />
                Our Mission
                <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-300 dark:to-white bg-clip-text text-transparent">
                Making AI Accessible & Secure
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At ChatSecure, we believe that everyone deserves access to powerful AI technology 
                without compromising their privacy or security. Our mission is to democratize 
                AI-powered conversations while maintaining the highest standards of data protection.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We&apos;re committed to building AI solutions that respect user privacy, promote 
                transparency, and deliver exceptional value to individuals and organizations alike.
              </p>
            </div>
            {/* Mission metrics */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900 hover-lift">
                <div className="text-3xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-muted-foreground">Privacy Focused</div>
              </div>
              <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900 hover-lift">
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-muted-foreground">Always Available</div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="space-y-6 group lg:pt-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 dark:bg-indigo-950 px-4 py-2 text-sm text-indigo-600 dark:text-indigo-400 font-medium hover-lift cursor-default">
                <Eye className="size-4" />
                Our Vision
                <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 dark:from-white dark:via-indigo-300 dark:to-white bg-clip-text text-transparent">
                A Future of Trusted AI
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a world where AI assistants are trusted partners in every aspect of 
                life—from personal productivity to business innovation—without the fear of data 
                exploitation or privacy breaches.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By pioneering privacy-first AI technology, we aim to set new industry standards 
                and inspire a generation of ethical AI development.
              </p>
            </div>
            {/* Vision card */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 border border-indigo-100 dark:border-indigo-900 hover-lift overflow-hidden">
              <div className="absolute top-0 right-0 size-32 bg-indigo-200/50 dark:bg-indigo-800/30 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-lg font-semibold mb-2">Our Promise</div>
                <p className="text-sm text-muted-foreground">
                  Your data stays yours. Always encrypted, never sold, completely private.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
