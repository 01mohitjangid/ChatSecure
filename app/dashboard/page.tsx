import { HeroSection } from "@/app/dashboard/_components/hero-section"
import { FeaturesGrid } from "@/app/dashboard/_components/features-grid"
import { StatsSection } from "@/app/dashboard/_components/stats-section"
import { TechStack } from "@/app/dashboard/_components/tech-stack"
import { Footer } from "@/app/dashboard/_components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, Zap, Shield } from "lucide-react"

export const metadata = {
  title: 'Dashboard - ChatSecure',
  description: 'Experience the future of secure, intelligent conversations.',
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      <HeroSection />

      <StatsSection />

      <FeaturesGrid />

      <TechStack />

      {/* Contact Section - Kept largely same but with dark theme adjustments */}
      <section id="contact" className="w-full py-20 bg-black relative border-t border-white/10">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-purple-900/30 px-3 py-1 text-sm text-purple-400 border border-purple-800">
                Get in Touch
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Contact Us
              </h2>
              <p className="text-gray-400 md:text-xl/relaxed">
                Need an API key or have questions? We&apos;re here to help. Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6 pt-4">
                <ContactItem
                  icon={Mail}
                  title="Email Support"
                  description="support@chatsecure.com"
                />
                <ContactItem
                  icon={Zap}
                  title="API Access"
                  description="Request your API key through the form"
                />
                <ContactItem
                  icon={Shield}
                  title="Enterprise Solutions"
                  description="Custom plans for large organizations"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ContactItem({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="rounded-lg bg-purple-900/20 p-3 border border-purple-500/20">
        <Icon className="size-5 text-purple-400" />
      </div>
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  )
}

