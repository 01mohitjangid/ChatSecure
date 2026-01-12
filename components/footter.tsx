import { Shield, Github, Twitter, Linkedin, Mail, Globe } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
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
                href="/dashboard#contact" 
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
                <Link href="/api-docs" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
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
                <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/dashboard#contact" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
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
                  Guides & Tutorials
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                  Status
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
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
  )
}