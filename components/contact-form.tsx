'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { submitContactForm } from '@/app/dashboard/actions'
import { toast } from 'sonner'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const result = await submitContactForm(formData)

      if (result.success) {
        toast.success(result.message)
          // Reset form
          ; (e.target as HTMLFormElement).reset()
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-bold text-foreground">
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          required
          disabled={isSubmitting}
          className="w-full rounded-lg border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-purple-600 transition-all disabled:opacity-50"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-bold text-foreground">
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          disabled={isSubmitting}
          className="w-full rounded-lg border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-purple-600 transition-all disabled:opacity-50"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="reason" className="text-sm font-bold text-foreground">
          Reason for Contact *
        </label>
        <div className="relative">
          <select
            id="reason"
            name="reason"
            required
            disabled={isSubmitting}
            className="w-full rounded-lg border border-border bg-background px-4 py-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-purple-600 transition-all disabled:opacity-50 appearance-none"
          >
            <option value="" className="bg-background">Select a reason...</option>
            <option value="api-key" className="bg-background">Request API Key</option>
            <option value="support" className="bg-background">Technical Support</option>
            <option value="enterprise" className="bg-background">Enterprise Inquiry</option>
            <option value="partnership" className="bg-background">Partnership Opportunity</option>
            <option value="other" className="bg-background">Other</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
            <svg className="size-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-bold text-foreground">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us more about your needs..."
          required
          disabled={isSubmitting}
          className="w-full rounded-lg border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-purple-600 transition-all resize-none disabled:opacity-50"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg shadow-purple-900/20 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
      >
        <Mail className="mr-2 size-4" />
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        We typically respond within 24 hours. For urgent matters, please mention
        it in your message.
      </p>
    </form>
  )
}
