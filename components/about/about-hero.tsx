import { Shield } from "lucide-react"

export const AboutHero = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-6 text-center">
          {/* Icon */}
          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm border border-white/20">
            <Shield className="size-10 text-white" />
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              About <span className="text-purple-200">ChatSecure</span>
            </h1>
            <p className="mx-auto max-w-[600px] text-purple-100 md:text-xl">
              Secure AI conversations for everyone. Built with privacy at the core.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
