import Link from "next/link"
import { Mail, MessageSquare, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export const TermsContact = () => {
  return (
    <section className="w-full py-12 md:py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="rounded-xl border bg-card p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-2">Questions About Our Terms?</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-lg bg-purple-100 dark:bg-purple-950 p-3 mb-3">
                <Mail className="size-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-sm text-muted-foreground">legal@chatsecure.com</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-lg bg-purple-100 dark:bg-purple-950 p-3 mb-3">
                <MessageSquare className="size-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-1">Support</h3>
              <p className="text-sm text-muted-foreground">support@chatsecure.com</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-lg bg-purple-100 dark:bg-purple-950 p-3 mb-3">
                <MapPin className="size-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-1">Address</h3>
              <p className="text-sm text-muted-foreground">San Francisco, CA</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link href="/dashboard#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

