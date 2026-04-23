"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileMenuButton() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4 mt-8">
          <Link
            href="/"
            className="text-lg font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className="text-lg font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="text-lg font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/chat"
            className="text-lg font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Chat
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

