import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Mail, Sparkles, ArrowRight } from "lucide-react"

export const AboutCTA = () => {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-purple-100 dark:bg-purple-950/30 rounded-full blur-3xl opacity-50"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 dark:bg-purple-950 px-4 py-2 text-sm text-purple-600 dark:text-purple-400 font-medium mb-8">
            <Sparkles className="size-4" />
            Start Your Journey
          </div>

          {/* Main content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Ready to Experience
              <span className="block bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2">
                Secure AI?
              </span>
            </h2>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
              Join millions of users who trust ChatSecure for their AI-powered conversations. 
              Start your journey today and experience the future of secure communication.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-full group shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/">
                Start Chatting
                <ChevronRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg rounded-full group border-2 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all duration-300">
              <Link href="/dashboard#contact">
                <Mail className="mr-2 size-5" />
                Contact Us
                <ArrowRight className="ml-2 size-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500"></div>
              <span>Free tier available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500"></div>
              <span>Enterprise-grade security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
