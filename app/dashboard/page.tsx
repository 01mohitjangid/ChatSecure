import { Shield, Lock, MessageSquare, Zap, Users, FileCode, Globe, ChevronRight, CheckCircle2, Github, Twitter, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: 'Dashboard - ChatSecure',
  description: 'Explore ChatSecure features and capabilities'
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm mb-4">
                Next-Generation AI Chat Platform
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Welcome to <span className="text-purple-200">ChatSecure</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experience the future of secure, intelligent conversations. Built with cutting-edge AI technology
                and enterprise-grade security.
              </p>
            </div>
            <div className="space-x-4 mt-6">
              <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
                <Link href="/">
                  Start Chatting
                  <ChevronRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-purple-700 hover:bg-purple-50">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful Features
              </h2>
             
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <FeatureCard
              icon={<Shield className="size-10 text-purple-600" />}
              title="Enterprise Security"
              description="Bank-level encryption and security protocols to keep your conversations private and protected."
            />
            <FeatureCard
              icon={<Zap className="size-10 text-purple-600" />}
              title="Lightning Fast"
              description="Real-time responses powered by state-of-the-art AI models with optimized performance."
            />
            <FeatureCard
              icon={<MessageSquare className="size-10 text-purple-600" />}
              title="Smart Conversations"
              description="Context-aware AI that understands nuance and maintains conversation history."
            />
            <FeatureCard
              icon={<Lock className="size-10 text-purple-600" />}
              title="Privacy First"
              description="Your data stays yours. No tracking, no selling, no compromises on privacy."
            />
            <FeatureCard
              icon={<Users className="size-10 text-purple-600" />}
              title="Multi-User Support"
              description="Collaborate with team members while maintaining individual privacy and preferences."
            />
            <FeatureCard
              icon={<FileCode className="size-10 text-purple-600" />}
              title="Code Understanding"
              description="Advanced code comprehension for developers with syntax highlighting and explanations."
            />
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Built with Modern Technology
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Powered by the latest and most reliable technologies
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <TechCard title="Next.js 14" description="React framework for production" />
            <TechCard title="TypeScript" description="Type-safe development" />
            <TechCard title="Tailwind CSS" description="Utility-first styling" />
            <TechCard title="OpenAI GPT" description="Advanced AI models" />
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What ChatSecure Can Do
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                From casual conversations to complex problem-solving, ChatSecure adapts to your needs.
              </p>
              <ul className="space-y-3 mt-6">
                <CapabilityItem text="Answer questions on any topic with accurate, up-to-date information" />
                <CapabilityItem text="Write, debug, and explain code in multiple programming languages" />
                <CapabilityItem text="Generate creative content, from stories to marketing copy" />
                <CapabilityItem text="Analyze data and provide insights for better decision-making" />
                <CapabilityItem text="Translate languages and explain cultural nuances" />
                <CapabilityItem text="Help with research, learning, and educational support" />
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-xl border bg-card p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="size-8 rounded-full bg-purple-600 flex items-center justify-center shrink-0">
                      <span className="text-white text-sm font-bold">AI</span>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="rounded-lg bg-muted p-3">
                        <p className="text-sm">
                          Hello! I&apos;m ChatSecure AI. I can help you with coding, writing, analysis....
                          How can I assist you today?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 justify-end">
                    <div className="flex-1 space-y-2">
                      <div className="rounded-lg bg-purple-600 p-3 text-white">
                        <p className="text-sm">
                          Can you help me build a React component?
                        </p>
                      </div>
                    </div>
                    <div className="size-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <span className="text-sm">👤</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="size-8 rounded-full bg-purple-600 flex items-center justify-center shrink-0">
                      <span className="text-white text-sm font-bold">AI</span>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="rounded-lg bg-muted p-3">
                        <p className="text-sm">
                          Absolutely! I&apos;d be happy to help you create a React component. What kind of component
                          are you looking to build?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <StatCard number="99.9%" label="Uptime Guarantee" />
            <StatCard number="<100ms" label="Response Time" />
            <StatCard number="256-bit" label="Encryption" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            {/* Left Side - Info */}
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-950 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
                Get in Touch
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Us
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Need an API key or have questions? We&apos;re here to help. Fill out the form and our team will get back to you within 24 hours.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="rounded-lg bg-purple-100 dark:bg-purple-950 p-2">
                    <Mail className="size-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Support</h3>
                    <p className="text-sm text-muted-foreground">support@chatsecure.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="rounded-lg bg-purple-100 dark:bg-purple-950 p-2">
                    <Zap className="size-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">API Access</h3>
                    <p className="text-sm text-muted-foreground">Request your API key through the form</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="rounded-lg bg-purple-100 dark:bg-purple-950 p-2">
                    <Shield className="size-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Enterprise Solutions</h3>
                    <p className="text-sm text-muted-foreground">Custom plans for large organizations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="rounded-xl border bg-card p-8 shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="w-full border-t bg-background">
        {/* Main Footer Content */}
        <div className="container px-4 md:px-6 py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="rounded-lg bg-gradient-to-br from-purple-600 to-indigo-800 p-2">
                  <Shield className="size-5 text-white" />
                </div>
                <span className="text-xl font-bold">ChatSecure</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Next-generation AI chat platform built with cutting-edge technology and enterprise-grade security.
              </p>
              <div className="flex space-x-3">
                <Link 
                  href="/coming-soon" 
                  className="rounded-full border p-2 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-colors"
                >
                  <Twitter className="size-4" />
                </Link>
                <Link 
                  href="/coming-soon" 
                  className="rounded-full border p-2 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-colors"
                >
                  <Github className="size-4" />
                </Link>
                <Link 
                  href="/coming-soon" 
                  className="rounded-full border p-2 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-colors"
                >
                  <Linkedin className="size-4" />
                </Link>
                <Link 
                  href="/coming-soon" 
                  className="rounded-full border p-2 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-colors"
                >
                  <Mail className="size-4" />
                </Link>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#features" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                    API Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                    Changelog
                  </Link>
                </li>
                
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/help-center" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                    Guides & Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t">
          <div className="container px-4 md:px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © 2024 ChatSecure. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                  Cookie Policy
                </Link>
                <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                  Security
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col space-y-3">
        <div className="rounded-lg bg-purple-100 dark:bg-purple-950 w-fit p-3 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

const TechCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 text-center hover:shadow-md transition-shadow">
      <Globe className="size-8 text-purple-600" />
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

const CapabilityItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start space-x-3">
      <CheckCircle2 className="size-5 text-purple-600 mt-0.5 shrink-0" />
      <span className="text-muted-foreground">{text}</span>
    </li>
  )
}

const StatCard = ({ number, label }: { number: string; label: string }) => {
  return (
    <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-8 text-center">
      <div className="text-4xl font-bold text-purple-600">{number}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}