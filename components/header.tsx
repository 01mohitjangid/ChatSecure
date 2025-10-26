"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { type User as ClerkUser, LogOut, Github, Menu } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Mock user state - replace with actual Clerk integration
interface User {
  id: string
  email: string
  firstName?: string
  lastName?: string
  imageUrl?: string
}

export function Header() {
  const [user, setUser] = useState<User | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Mock authentication state - replace with Clerk's useUser hook
  useEffect(() => {
    // Simulate checking authentication state
    const checkAuth = () => {
      // This would be replaced with Clerk's authentication check
      const isAuthenticated = localStorage.getItem("isAuthenticated") === "true"
      if (isAuthenticated) {
        setUser({
          id: "1",
          email: "user@example.com",
          firstName: "John",
          lastName: "Doe",
          imageUrl: undefined,
        })
      }
    }
    checkAuth()
  }, [])

  const handleSignOut = () => {
    // Replace with Clerk's signOut function
    localStorage.removeItem("isAuthenticated")
    setUser(null)
    window.location.href = "/"
  }

  const handleSignIn = () => {
    // Mock sign in - replace with actual Clerk logic
    localStorage.setItem("isAuthenticated", "true")
    setUser({
      id: "1",
      email: "user@example.com",
      firstName: "John",
      lastName: "Doe",
    })
  }

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="/dashboard" 
            className="text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400"
          >
            Dashboard
          </Link>
        </nav>
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link 
                href="/dashboard" 
                className="text-lg font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                href="/" 
                className="text-lg font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Chat
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex items-center justify-end space-x-2">
        <a
          target="_blank"
          href="https://github.com/01mohitjangid/ai-chatbox"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <Github className="h-4 w-4" />
          <span className="hidden ml-2 md:flex">GitHub</span>
        </a>

        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.imageUrl || "/placeholder.svg"} alt={user.email} />
                  <AvatarFallback>
                    {user.firstName?.[0]}
                    {user.lastName?.[0]}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  {user.firstName && (
                    <p className="font-medium">
                      {user.firstName} {user.lastName}
                    </p>
                  )}
                  <p className="w-[200px] truncate text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
