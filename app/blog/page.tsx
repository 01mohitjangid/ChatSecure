import { Calendar, Clock, User, ArrowRight, Tag, TrendingUp, BookOpen, Shield, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const metadata = {
  title: 'Blog - ChatSecure',
  description: 'Insights, updates, and best practices for secure AI conversations'
}

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm mb-4">
                Latest Insights & Updates
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                <span className="text-purple-200">BLOG</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover the latest in AI technology, security best practices, and product updates from the ChatSecure team.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="size-5 text-purple-600" />
            <h2 className="text-2xl font-bold">Featured Post</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden rounded-lg aspect-video bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-950 dark:to-indigo-950">
              <Image
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80"
                alt="The Future of AI Security"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="size-4" />
                  <span>Nov 20, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="size-4" />
                  <span>8 min read</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold tracking-tight">
                The Future of AI Security: Building Trust in Conversational AI
              </h3>
              <p className="text-muted-foreground">
                Explore how ChatSecure implements enterprise-grade security measures to protect your conversations
                while maintaining the flexibility and power of modern AI systems. Learn about our encryption protocols,
                data privacy policies, and commitment to user security.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-full bg-purple-600 flex items-center justify-center">
                    <User className="size-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">Sarah Chen</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">Security Lead</span>
              </div>
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Link href="/coming-soon">
                  Read Full Article
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Recent Articles
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Stay updated with our latest insights and announcements
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <BlogCard
              category="Product Update"
              title="Introducing Real-Time Collaboration Features"
              excerpt="Team collaboration just got easier with our new real-time features. Share conversations, collaborate on responses, and work together seamlessly."
              date="Nov 18, 2024"
              readTime="5 min"
              author="Michael Ross"
              image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
            />
            <BlogCard
              category="Technical"
              title="How We Built ChatSecure: A Technical Deep Dive"
              excerpt="Go behind the scenes and learn about the architecture, technologies, and design decisions that power ChatSecure's AI platform."
              date="Nov 15, 2024"
              readTime="12 min"
              author="David Kim"
              image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80"
            />
            <BlogCard
              category="Best Practices"
              title="10 Ways to Get the Most Out of ChatSecure"
              excerpt="Maximize your productivity with these expert tips and tricks for using ChatSecure effectively in your daily workflow."
              date="Nov 12, 2024"
              readTime="7 min"
              author="Emily Johnson"
              image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
            />
            <BlogCard
              category="Security"
              title="Understanding End-to-End Encryption in AI Chat"
              excerpt="Learn how end-to-end encryption works in ChatSecure and why it's crucial for protecting your sensitive conversations."
              date="Nov 8, 2024"
              readTime="6 min"
              author="Sarah Chen"
              image="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
            />
            <BlogCard
              category="AI Insights"
              title="The Evolution of Large Language Models"
              excerpt="Explore the history and future of LLMs, from early models to today's sophisticated AI systems, and what's coming next."
              date="Nov 5, 2024"
              readTime="10 min"
              author="Dr. James Wilson"
              image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
            />
            <BlogCard
              category="Company News"
              title="ChatSecure Raises Series A to Expand AI Capabilities"
              excerpt="We're excited to announce our Series A funding round to accelerate product development and expand our team."
              date="Nov 1, 2024"
              readTime="4 min"
              author="Jennifer Adams"
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Explore by Category
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Find content that interests you most
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <CategoryCard
              icon={<Shield className="size-8 text-purple-600" />}
              title="Security"
              count={12}
            />
            <CategoryCard
              icon={<BookOpen className="size-8 text-purple-600" />}
              title="AI Insights"
              count={18}
            />
            <CategoryCard
              icon={<TrendingUp className="size-8 text-purple-600" />}
              title="Product Updates"
              count={24}
            />
            <CategoryCard
              icon={<Tag className="size-8 text-purple-600" />}
              title="Best Practices"
              count={15}
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="rounded-full bg-white/10 p-3 w-fit mx-auto mb-4 backdrop-blur-sm">
                <Mail className="size-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Subscribe to Our Newsletter
              </h2>
              <p className="mx-auto max-w-[600px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get the latest articles, product updates, and AI insights delivered directly to your inbox.
              </p>
            </div>
            <div className="w-full max-w-md mt-6">
              <form className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                />
                <Button type="submit" size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-purple-100 mt-3">
                By subscribing, you agree to receive updates from ChatSecure. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-background">
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
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
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
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
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
                    Status
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
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const BlogCard = ({ 
  category, 
  title, 
  excerpt, 
  date, 
  readTime, 
  author,
  image 
}: { 
  category: string
  title: string
  excerpt: string
  date: string
  readTime: string
  author: string
  image?: string
}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-950 dark:to-indigo-950">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <BookOpen className="size-12 text-purple-600/20 group-hover:scale-110 transition-transform duration-300" />
          </div>
        )}
      </div>
      <div className="p-6 space-y-3">
        <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-950 px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400">
          {category}
        </div>
        <h3 className="text-xl font-bold leading-tight group-hover:text-purple-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between pt-3 border-t">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="size-3" />
            <span>{date}</span>
            <span>•</span>
            <Clock className="size-3" />
            <span>{readTime}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 pt-2">
          <div className="size-6 rounded-full bg-purple-600 flex items-center justify-center">
            <User className="size-3 text-white" />
          </div>
          <span className="text-xs font-medium">{author}</span>
        </div>
        <Link 
          href="/coming-soon" 
          className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 pt-2"
        >
          Read Article
          <ArrowRight className="ml-1 size-4" />
        </Link>
      </div>
    </div>
  )
}

const CategoryCard = ({ 
  icon, 
  title, 
  count 
}: { 
  icon: React.ReactNode
  title: string
  count: number
}) => {
  return (
    <Link href="/coming-soon" className="group">
      <div className="flex flex-col items-center space-y-3 rounded-lg border bg-card p-8 text-center hover:shadow-lg transition-all duration-300 hover:border-purple-600">
        <div className="rounded-lg bg-purple-100 dark:bg-purple-950 w-fit p-3 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{count} articles</p>
      </div>
    </Link>
  )
}

