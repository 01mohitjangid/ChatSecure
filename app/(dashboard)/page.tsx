import { HeroSection } from "@/app/(dashboard)/_components/hero-section"
import { FeaturesGrid } from "@/app/(dashboard)/_components/features-grid"
import { StatsSection } from "@/app/(dashboard)/_components/stats-section"
import { TechStack } from "@/app/(dashboard)/_components/tech-stack"
import { Footer } from "@/app/(dashboard)/_components/footer"

export const metadata = {
  title: 'Home - ChatSecure',
  description: 'Experience the future of secure, intelligent conversations.',
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturesGrid />
      <TechStack />

      <Footer />
    </div>
  )
}
