import { Shield, Sparkles, Heart, Lock, Zap, Globe } from "lucide-react"

export const AboutHero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:30px_30px]" />
      
      {/* Animated Blob Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 size-[500px] bg-purple-400/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 size-[400px] bg-indigo-400/30 rounded-full blur-3xl animate-blob animation-delay-200"></div>
        <div className="absolute top-1/3 left-1/4 size-[300px] bg-pink-400/20 rounded-full blur-3xl animate-blob animation-delay-400"></div>
        <div className="absolute bottom-1/4 right-1/4 size-[350px] bg-purple-300/20 rounded-full blur-3xl animate-blob animation-delay-600"></div>
      </div>

      {/* Floating Icons with more animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] left-[8%] animate-float opacity-30">
          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <Shield className="size-8 text-white" />
          </div>
        </div>
        <div className="absolute top-[25%] right-[12%] animate-float-delayed opacity-30">
          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="size-7 text-white" />
          </div>
        </div>
        <div className="absolute bottom-[30%] left-[15%] animate-float-slow opacity-30">
          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <Heart className="size-6 text-white" />
          </div>
        </div>
        <div className="absolute top-[45%] right-[8%] animate-float opacity-25">
          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <Lock className="size-7 text-white" />
          </div>
        </div>
        <div className="absolute bottom-[20%] right-[18%] animate-float-delayed opacity-25">
          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <Zap className="size-6 text-white" />
          </div>
        </div>
        <div className="absolute top-[60%] left-[5%] animate-float-slow opacity-20">
          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <Globe className="size-8 text-white" />
          </div>
        </div>
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Icon Badge with glow effect */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-white/30 rounded-2xl blur-2xl animate-pulse"></div>
            <div className="relative rounded-2xl bg-white/10 p-5 backdrop-blur-md border border-white/30 animate-border-glow">
              <Heart className="size-14 text-white" />
            </div>
          </div>

          {/* Title with staggered animation */}
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-sm border border-white/20 animate-fade-in">
              <span className="flex items-center gap-2">
                <Sparkles className="size-4" />
                Our Story
                <Sparkles className="size-4" />
              </span>
            </div>
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-white animate-fade-in animation-delay-100">
              About <span className="bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent animate-shimmer">ChatSecure</span>
            </h1>
            <p className="mx-auto max-w-[800px] text-purple-100 text-lg md:text-xl lg:text-2xl leading-relaxed animate-fade-in animation-delay-200">
              We&apos;re on a mission to make AI conversations secure, private, and accessible to everyone. 
              Built by a team passionate about technology and privacy.
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
