'use server'

import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  reason: z.enum(['api-key', 'support', 'enterprise', 'partnership', 'other']),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Parse and validate form data
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      reason: formData.get('reason'),
      message: formData.get('message')
    }

    const validatedData = contactFormSchema.parse(data)

    // Log the contact request (in production, you'd send to your backend/email service)
    console.log('Contact Form Submission:', {
      ...validatedData,
      timestamp: new Date().toISOString()
    })

    // Here you would:
    // 1. Send email notification to your team
    // 2. Store in database
    // 3. Send confirmation email to user
    // 4. If reason is 'api-key', generate and send API key
    
    // For now, we'll simulate success
    await new Promise(resolve => setTimeout(resolve, 1000))

    return {
      success: true,
      message: 'Thank you for contacting us! We will respond within 24 hours.'
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message
      }
    }

    console.error('Contact form error:', error)
    return {
      success: false,
      message: 'Something went wrong. Please try again later.'
    }
  }
}

