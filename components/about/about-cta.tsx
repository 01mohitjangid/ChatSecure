import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, FileCode, Lock, MessageSquare, Shield, Zap } from "lucide-react"
import type { ElementType } from "react"

const IconCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: ElementType
  title: string
  description: string
}) => {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur-sm p-6 shadow-[0_20px_60px_rgba(0,0,0,0.03)]">
      <div className="w-fit rounded-xl bg-purple-600/10 border border-purple-600/20 p-3">
        <Icon className="size-5 text-purple-700" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-black">{title}</h3>
      <p className="mt-2 text-sm text-black/65 leading-relaxed">{description}</p>
    </div>
  )
}

export const AboutCTA = () => {
  return (
    <>
      <section className="w-full bg-zinc-100 text-black py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="text-[11px] tracking-[0.22em] uppercase font-semibold text-black/60">
                SECURITY, MADE CLEAR
              </div>
              <h2 className="mt-5 text-4xl sm:text-5xl font-black tracking-[-0.04em]">
                Built to protect what matters.
              </h2>
              <p className="mt-5 text-base sm:text-lg text-black/70 leading-relaxed max-w-[520px]">
                ChatSecure is designed for privacy-first conversations with encryption, minimal
                collection, and a calm experience that doesn’t hide the important details.
              </p>
            </div>

            <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
              <IconCard
                icon={Shield}
                title="Encryption-first"
                description="Secure-by-default communications so your messages stay protected."
              />
              <IconCard
                icon={Lock}
                title="Control and clarity"
                description="Clear data handling, transparent behavior, and user control."
              />
              <IconCard
                icon={MessageSquare}
                title="Conversation context"
                description="Smart replies that understand the flow of what you’re saying."
              />
              <IconCard
                icon={FileCode}
                title="Developer-friendly"
                description="Syntax-aware responses designed for real work."
              />
              <IconCard
                icon={Zap}
                title="Fast responses"
                description="Optimized performance for smooth, real-time chat."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-black text-white py-16 md:py-24 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(147,51,234,0.28),transparent_40%),radial-gradient(circle_at_80%_40%,rgba(99,102,241,0.18),transparent_35%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="text-[11px] tracking-[0.22em] uppercase font-semibold text-purple-200/90">
                OUR PRINCIPLES
              </div>
              <h3 className="mt-4 text-3xl sm:text-4xl font-black tracking-[-0.04em]">
                Privacy isn’t a setting. It’s the default.
              </h3>
              <p className="mt-5 text-white/70 leading-relaxed max-w-[520px]">
                We believe secure AI should feel straightforward: protect data, reduce surprises,
                and keep the experience readable for everyone.
              </p>
            </div>

            <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-purple-300 font-semibold">Minimal collection</div>
                <div className="mt-2 text-sm text-white/70 leading-relaxed">
                  We only focus on what’s necessary so you don’t have to worry.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-purple-300 font-semibold">Secure by design</div>
                <div className="mt-2 text-sm text-white/70 leading-relaxed">
                  Encrypted communication patterns built into the experience.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-purple-300 font-semibold">Transparent behavior</div>
                <div className="mt-2 text-sm text-white/70 leading-relaxed">
                  Clear explanations of what’s happening and why.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-purple-300 font-semibold">User control</div>
                <div className="mt-2 text-sm text-white/70 leading-relaxed">
                  Decisions that keep your data in your hands.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="text-white/70 leading-relaxed max-w-[520px]">
              Ready to try secure AI for real conversations? Start chatting in seconds.
            </div>

            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/20"
              >
                <Link href="/">
                  Start Chatting
                  <ChevronRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="!bg-transparent !border-white/20 !text-white !hover:bg-white/5 !hover:text-white"
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
