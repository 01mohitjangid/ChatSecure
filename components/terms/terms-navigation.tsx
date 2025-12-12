"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface NavItem {
  id: string
  title: string
}

interface TermsNavigationProps {
  items: NavItem[]
}

export const TermsNavigation = ({ items }: TermsNavigationProps) => {
  return (
    <nav className="sticky top-20 hidden lg:block">
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
          Table of Contents
        </h3>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className="flex items-center text-sm text-muted-foreground hover:text-purple-600 transition-colors py-1"
              >
                <ChevronRight className="size-4 mr-1 text-purple-600" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

