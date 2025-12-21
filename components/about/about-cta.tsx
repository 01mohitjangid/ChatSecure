import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export const AboutCTA = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            Ready to get started?
          </h2>
          <p className="max-w-[500px] text-muted-foreground">
            Join thousands of users who trust ChatSecure for secure AI conversations.
          </p>
          <div className="flex gap-4">
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link href="/">
                Start Chatting
                <ChevronRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/dashboard#contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
