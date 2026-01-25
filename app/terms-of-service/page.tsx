import { Scale, Shield, CheckCircle2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  AcceptanceSection,
  DescriptionSection,
  IntellectualPropertySection,
  PrivacySection,
  TerminationSection,
  DisclaimersSection,
} from "@/components/terms"

export const metadata = {
  title: 'Terms of Service - ChatSecure',
  description: 'Read the Terms of Service for using ChatSecure AI chat platform'
}

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Fabulous Gradient */}
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
            <CheckCircle2 className="size-7 text-white" />
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-8 text-center">
            {/* Icon Badge */}
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl"></div>
              <div className="relative rounded-2xl bg-white/10 p-4 backdrop-blur-md border border-white/20">
                <Scale className="size-12 text-white" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm border border-white/20">
                Legal Agreement
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                Terms of <span className="bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">Service</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-purple-100 text-lg md:text-xl/relaxed">
                Please read these terms carefully before using ChatSecure. By using our service, you agree to be bound by these terms.
              </p>
              <p className="text-purple-200 text-sm font-medium">
                Last updated: December 12, 2024
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all">
                <Link href="#content">
                  Read Terms
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="w-full py-12 md:py-16 bg-background border-b">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <HighlightCard
              icon={<Shield className="size-6 text-purple-600" />}
              title="Your Privacy"
              description="We never sell your data to third parties"
            />
            <HighlightCard
              icon={<CheckCircle2 className="size-6 text-purple-600" />}
              title="Fair Terms"
              description="Clear, straightforward legal language"
            />
            <HighlightCard
              icon={<Sparkles className="size-6 text-purple-600" />}
              title="Always Updated"
              description="We notify you of any changes"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="content" className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Content Card */}
            <div className="rounded-3xl border bg-card shadow-2xl overflow-hidden">
              <div className="p-8 md:p-12 space-y-12">
                <AcceptanceSection />
                <Divider />
                <DescriptionSection />
                <Divider />
                <IntellectualPropertySection />
                <Divider />
                <PrivacySection />
                <Divider />
                <TerminationSection />
                <Divider />
                <DisclaimersSection />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const HighlightCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode
  title: string
  description: string
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 group">
      <div className="rounded-xl bg-purple-100 dark:bg-purple-950 p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

const Divider = () => {
  return (
    <div className="relative py-4">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-purple-200 dark:border-purple-900"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="bg-card px-4">
          <div className="size-2 rounded-full bg-purple-400"></div>
        </div>
      </div>
    </div>
  )
}
