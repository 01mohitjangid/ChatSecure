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
        ;(e.target as HTMLFormElement).reset()
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
        <label htmlFor="name" className="text-sm font-medium">
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          required
          disabled={isSubmitting}
          className="w-full rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all disabled:opacity-50"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          disabled={isSubmitting}
          className="w-full rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all disabled:opacity-50"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="reason" className="text-sm font-medium">
          Reason for Contact *
        </label>
        <select
          id="reason"
          name="reason"
          required
          disabled={isSubmitting}
          className="w-full rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all disabled:opacity-50"
        >
          <option value="">Select a reason...</option>
          <option value="api-key">Request API Key</option>
          <option value="support">Technical Support</option>
          <option value="enterprise">Enterprise Inquiry</option>
          <option value="partnership">Partnership Opportunity</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us more about your needs..."
          required
          disabled={isSubmitting}
          className="w-full rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all resize-none disabled:opacity-50"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-purple-600 to-indigo-800 hover:from-purple-700 hover:to-indigo-900 text-white disabled:opacity-50"
      >
        <Mail className="mr-2 h-4 w-4" />
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        We typically respond within 24 hours. For urgent matters, please mention
        it in your message.
      </p>
    </form>
  )
}

