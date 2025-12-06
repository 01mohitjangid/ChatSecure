import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LogOut, Github, Menu, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { auth } from "@/auth"
import { SignOutButton } from "./sign-out-button"
import { MobileMenuButton } from "./mobile-menu-button"

export async function Header() {
  const session = await auth()
  const user = session?.user

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="size-8 bg-purple-600 rounded-full flex items-center justify-center">
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
        <MobileMenuButton />
      </div>

      <div className="flex items-center justify-end space-x-2">
        <a
          target="_blank"
          href="https://github.com/01mohitjangid/ai-chatbox"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <Github className="size-4" />
          <span className="hidden ml-2 md:flex">GitHub</span>
        </a>

        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative size-8 rounded-full">
                <Avatar className="size-8">
                  <AvatarImage src={user.image || "/placeholder.svg"} alt={user.email || "User"} />
                  <AvatarFallback className="bg-purple-600 text-white">
                    {user.email?.[0]?.toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="w-[200px] truncate text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile" className="cursor-pointer">
                  <User className="mr-2 size-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <SignOutButton />
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
