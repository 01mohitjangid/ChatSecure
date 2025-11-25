import { Clock, ArrowLeft, Mail, Bell } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const metadata = {
  title: 'Coming Soon - ChatSecure',
  description: 'This feature is coming soon. Stay tuned for updates!'
}

export default function ComingSoonPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] w-full">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center max-w-3xl mx-auto">
          {/* Icon */}
          

          {/* Heading */}
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-950 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
              Under Development
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Coming <span className="text-purple-600">Soon</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
              We&apos;re working hard to bring you something amazing. This feature is currently under development 
              and will be available soon. Stay tuned for updates!
            </p>
          </div>

          {/* Newsletter Signup */}
          
          {/* Back to Home Button */}
          <div className="pt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/">
                <ArrowLeft className="mr-2 size-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Additional Info */}
          
        </div>
      </div>
    </div>
  )
}

