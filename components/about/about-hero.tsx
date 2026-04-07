import { Shield } from "lucide-react"

export const AboutHero = () => {
  return (
    <section className="relative w-full bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 overflow-hidden transition-colors duration-500">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(147,51,234,0.15),transparent_45%),radial-gradient(circle_at_85%_30%,rgba(99,102,241,0.12),transparent_40%)] dark:bg-[radial-gradient(circle_at_15%_10%,rgba(147,51,234,0.2),transparent_45%),radial-gradient(circle_at_85%_30%,rgba(99,102,241,0.15),transparent_40%)]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.045)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-100" />

      {/* Decorative Blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/70 dark:bg-purple-900/10 rounded-full blur-3xl opacity-60" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl opacity-60" />

      <div className="relative container px-4 md:px-6 pt-10 pb-16">
        {/* Top labels */}
        <div className="flex items-start justify-between gap-10">
          <div className="text-[11px] font-semibold tracking-[0.22em] text-zinc-900/65 dark:text-zinc-400 uppercase">
            <div>COLLECTIONS</div>
            <div className="mt-2">ABOUT</div>
          </div>

          <div className="hidden lg:block text-right">
            <div className="text-[11px] font-semibold tracking-[0.18em] text-zinc-900/60 dark:text-zinc-400 uppercase">
              SECURE AI, CLEAN DESIGN
            </div>
            <div className="mt-2 text-[12px] text-zinc-900/70 dark:text-zinc-400 max-w-[300px] leading-relaxed">
              Privacy-first conversations with transparent behavior and clear controls.
            </div>
          </div>
        </div>

        {/* Big title */}
        <div className="mt-12 max-w-[1200px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-[0_18px_35px_rgba(147,51,234,0.25)] dark:shadow-[0_10px_25px_rgba(147,51,234,0.4)] transition-all">
              <Shield className="size-4" />
            </div>
            <div className="text-[11px] tracking-[0.22em] font-semibold uppercase text-zinc-900/70 dark:text-zinc-400">
              ABOUT CHATSECURE
            </div>
          </div>

          <h1 className="text-[clamp(64px,9vw,150px)] font-black leading-none tracking-[-0.06em] drop-shadow-[0_18px_25px_rgba(0,0,0,0.10)] dark:drop-shadow-[0_18px_25px_rgba(0,0,0,0.45)] dark:text-white">
            OUR VISION
          </h1>

          <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-end">
            <p className="lg:col-span-8 text-zinc-900/70 dark:text-zinc-300 text-base md:text-lg leading-relaxed">
              We build secure AI that’s simple to use and hard to misuse: encryption, minimal data
              collection, and a transparent experience that users can understand and control.
            </p>

            <div className="lg:col-span-4 flex items-center gap-4 justify-start lg:justify-end">
              <div className="h-px w-12 bg-zinc-900/10 dark:bg-zinc-800" />
              <div className="text-[11px] tracking-[0.22em] uppercase text-zinc-900/60 dark:text-zinc-400 font-semibold">
                COLLECTIONS / ABOUT
              </div>
            </div>
          </div>
        </div>

        {/* Bottom underline */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-zinc-900/10 via-zinc-900/5 to-purple-600/25 dark:from-zinc-800 dark:via-zinc-700/50 dark:to-purple-500/20" />
      </div>
    </section>
  )
}
