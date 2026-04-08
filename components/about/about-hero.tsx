import { Shield } from "lucide-react"

export const AboutHero = () => {
  return (
    <section className="relative w-full bg-zinc-100 text-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(147,51,234,0.15),transparent_45%),radial-gradient(circle_at_85%_30%,rgba(99,102,241,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[image:linear-gradient(to_right,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.045)_1px,transparent_1px)] bg-[length:72px_72px] opacity-15" />

      <div className="absolute -top-20 -left-20 size-80 bg-white/70 rounded-full blur-[1px]" />
      <div className="absolute -bottom-24 -right-24 size-96 bg-purple-500/10 rounded-full blur-[2px]" />

      <div className="relative container px-4 md:px-6 pt-10 pb-16">
        {/* Top labels */}
        <div className="flex items-start justify-between gap-10">
          <div className="text-[11px] font-semibold tracking-[0.22em] text-black/65 uppercase">
            <div>COLLECTIONS</div>
            <div className="mt-2">ABOUT</div>
          </div>

          <div className="hidden lg:block text-right">
            <div className="text-[11px] font-semibold tracking-[0.18em] text-black/60 uppercase">
              SECURE AI, CLEAN DESIGN
            </div>
            <div className="mt-2 text-[12px] text-black/70 max-w-[300px] leading-relaxed">
              Privacy-first conversations with transparent behavior and clear controls.
            </div>
          </div>
        </div>

        {/* Big title */}
        <div className="mt-12 max-w-[1200px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-[0_18px_35px_rgba(147,51,234,0.25)]">
              <Shield className="size-4" />
            </div>
            <div className="text-[11px] tracking-[0.22em] font-semibold uppercase text-black/70">
              ABOUT CHATSECURE
            </div>
          </div>

          <h1 className="text-[clamp(64px,9vw,150px)] font-black leading-none tracking-[-0.06em] drop-shadow-[0_18px_25px_rgba(0,0,0,0.10)]">
            OUR VISION
          </h1>

          <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-end">
            <p className="lg:col-span-8 text-black/70 text-base md:text-lg leading-relaxed">
              We build secure AI that’s simple to use and hard to misuse: encryption, minimal data
              collection, and a transparent experience that users can understand and control.
            </p>

            <div className="lg:col-span-4 flex items-center gap-4 justify-start lg:justify-end">
              <div className="h-px w-12 bg-black/10" />
              <div className="text-[11px] tracking-[0.22em] uppercase text-black/60 font-semibold">
                COLLECTIONS / ABOUT
              </div>
            </div>
          </div>
        </div>

        {/* Bottom underline */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-black/10 via-black/5 to-purple-600/25" />
      </div>
    </section>
  )
}
