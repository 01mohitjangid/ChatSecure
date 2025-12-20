import { Shield, Sparkles, Heart } from "lucide-react"

export const AboutHero = () => {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 size-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 size-80 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-[10%] animate-float">
          <Shield className="size-8 text-white" />
        </div>
        <div className="absolute top-40 right-[15%] animate-float-delayed">
          <Sparkles className="size-6 text-white" />
        </div>
        <div className="absolute bottom-32 left-[20%] animate-float-slow">
          <Heart className="size-7 text-white" />
        </div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Icon Badge */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl"></div>
            <div className="relative rounded-2xl bg-white/10 p-4 backdrop-blur-md border border-white/20">
              <Heart className="size-12 text-white" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm">
              Our Story
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
              About <span className="text-purple-200">ChatSecure</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We&apos;re on a mission to make AI conversations secure, private, and accessible to everyone. 
              Built by a team passionate about technology and privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
