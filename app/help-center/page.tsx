import { 
  HelpCircle, 
  MessageSquare, 
  Shield, 
  Zap, 
  Users, 
  Settings, 
  CreditCard, 
  Lock, 
  Search,
  ChevronRight,
  BookOpen,
  FileQuestion,
  Headphones,
  Mail,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const metadata = {
  title: 'Help Center - ChatSecure',
  description: 'Find answers to your questions and get support for ChatSecure'
}

export default function HelpCenterPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-20 lg:py-28 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 size-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 left-20 size-24 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 size-16 border border-white/20 rounded-full"></div>
        </div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm">
              Support & Resources
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Help <span className="text-purple-200">Center</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-purple-100 md:text-xl/relaxed">
              Find answers to your questions, explore guides, and get the support you need to make the most of ChatSecure.
            </p>
            
            {/* Search Bar */}
            <div className="w-full max-w-xl mt-4">
          
            </div>
          </div>
        </div>
      </section>

      

      {/* Help Categories Section */}
      <section id="getting-started" className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-950 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
              Browse Topics
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              How can we help you?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg">
              Choose a category below to find the help you need
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CategoryCard 
              icon={<Zap className="size-8 text-purple-600" />}
              title="Getting Started"
              description="Learn the basics of ChatSecure and set up your account"
              articles={["Creating your account", "First chat guide", "Interface overview", "Customizing settings"]}
            />
            <CategoryCard 
              icon={<MessageSquare className="size-8 text-purple-600" />}
              title="Using Chat"
              description="Master conversations and get the most from AI"
              articles={["Starting conversations", "Best prompting practices", "Saving chat history", "Exporting chats"]}
            />
            <CategoryCard 
              icon={<Shield className="size-8 text-purple-600" />}
              title="Security & Privacy"
              description="Understand how we protect your data"
              articles={["Data encryption", "Privacy controls", "Account security", "Data deletion"]}
            />
            
            <CategoryCard 
              icon={<Settings className="size-8 text-purple-600" />}
              title="Account Settings"
              description="Manage your profile and preferences"
              articles={["Profile settings", "Notification preferences", "Theme customization", "Language settings"]}
            />
            <CategoryCard 
              icon={<CreditCard className="size-8 text-purple-600" />}
              title="Billing & Plans"
              description="Subscription and payment information"
              articles={["Plan comparison", "Payment methods", "Invoices & receipts", "Cancel subscription"]}
            />
            <CategoryCard 
              icon={<Users className="size-8 text-purple-600" />}
              title="Teams & Collaboration"
              description="Work together with your team"
              articles={["Inviting team members", "Role management", "Shared workspaces", "Team billing"]}
            />
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-950 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
              Common Questions
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <FAQItem 
              question="What is ChatSecure?"
              answer="ChatSecure is a next-generation AI chat platform built with cutting-edge technology and enterprise-grade security. It provides intelligent, context-aware conversations while keeping your data private and protected."
            />
            <FAQItem 
              question="How secure is my data?"
              answer="We use 256-bit encryption for all data transmission and storage. Your conversations are never used for training purposes, and you have full control over your data, including the ability to delete it at any time."
            />
            <FAQItem 
              question="Can I use ChatSecure for my business?"
              answer="Absolutely! ChatSecure offers enterprise solutions with advanced features like team management, custom integrations, and dedicated support. Contact our sales team for more information."
            />
            <FAQItem 
              question="What AI models does ChatSecure use?"
              answer="ChatSecure is powered by state-of-the-art AI models including OpenAI's GPT. We continuously update our models to provide the best possible experience."
            />
            <FAQItem 
              question="How do I get an API key?"
              answer="You can request an API key through our contact form on the dashboard page. Our team will review your request and get back to you within 24 hours."
            />
            <FAQItem 
              question="Is there a free plan available?"
              answer="Yes! ChatSecure offers a free tier with generous usage limits. You can upgrade to a paid plan anytime for additional features and higher limits."
            />
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      
    </div>
  )
}

const QuickLinkCard = ({ 
  icon, 
  title, 
  description, 
  href 
}: { 
  icon: React.ReactNode
  title: string
  description: string
  href: string 
}) => {
  return (
    <Link 
      href={href}
      className="group flex items-center gap-4 rounded-xl border bg-card p-4 hover:shadow-md hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300"
    >
      <div className="rounded-lg bg-purple-100 dark:bg-purple-950 p-3 group-hover:scale-110 transition-transform duration-300">
        <div className="text-purple-600">{icon}</div>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold group-hover:text-purple-600 transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <ChevronRight className="size-5 text-muted-foreground group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
    </Link>
  )
}

const CategoryCard = ({ 
  icon, 
  title, 
  description, 
  articles 
}: { 
  icon: React.ReactNode
  title: string
  description: string
  articles: string[]
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-card p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col space-y-4">
        <div className="rounded-lg bg-purple-100 dark:bg-purple-950 w-fit p-3 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <ul className="space-y-2 pt-2 border-t">
          {articles.map((article, index) => (
            <li key={index}>
              <Link 
                href="/coming-soon" 
                className="flex items-center text-sm text-muted-foreground hover:text-purple-600 transition-colors"
              >
                <ChevronRight className="size-4 mr-1" />
                {article}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <div className="rounded-xl border bg-card p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-purple-100 dark:bg-purple-950 p-2 shrink-0">
          <HelpCircle className="size-5 text-purple-600" />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">{question}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}

const ContactOption = ({ 
  icon, 
  title, 
  description, 
  action 
}: { 
  icon: React.ReactNode
  title: string
  description: string
  action: string 
}) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="rounded-lg bg-purple-100 dark:bg-purple-950 p-2">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <span className="text-sm text-purple-600 font-medium">{action}</span>
      </div>
    </div>
  )
}

