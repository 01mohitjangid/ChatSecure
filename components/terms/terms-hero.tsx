import { Scale } from "lucide-react"

export const TermsHero = () => {
  return (
    <section className="relative w-full py-12 md:py-20 lg:py-28 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 size-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 left-20 size-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 size-16 border border-white/20 rounded-full"></div>
      </div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
            <Scale className="size-8 text-white" />
          </div>
          <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm">
            Legal Agreement
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
            Terms of <span className="text-purple-200">Service</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-purple-100 md:text-xl/relaxed">
            Please read these terms carefully before using ChatSecure. By using our service, you agree to be bound by these terms.
          </p>
          <p className="text-purple-200 text-sm">
            Last updated: December 12, 2024
          </p>
        </div>
      </div>
    </section>
  )
}

