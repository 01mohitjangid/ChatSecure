import { auth } from '@/auth'
import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    // Authenticate the user
    const session = await auth()
    if (!session?.user?.id) {
      return new Response('Unauthorized', { status: 401 })
    }

    // Store userId for use in callbacks
    const userId = session.user.id

    // Parse the request body
    const json = await req.json()
    const { messages, model = 'gpt-4-turbo-preview' } = json

    // Validate messages
    if (!messages || !Array.isArray(messages)) {
      return new Response('Invalid request: messages array required', {
        status: 400
      })
    }

    // Check for OpenAI API key
    if (!process.env.OPENAI_API_KEY) {
      return new Response('OpenAI API key not configured', { status: 500 })
    }

    // Stream the chat completion
    const result = await streamText({
      model: openai(model),
      messages,
      temperature: 0.7,
      maxTokens: 2000,
      async onFinish({ text, finishReason, usage }) {
        // Log completion for monitoring/debugging
        console.log('Chat completion:', {
          userId,
          finishReason,
          usage
        })
      }
    })

    // Return the streaming response
    return result.toTextStreamResponse()
  } catch (error) {
    console.error('Chat API Error:', error)
    
    // Handle specific error types
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return new Response('Invalid API key', { status: 401 })
      }
      if (error.message.includes('rate limit')) {
        return new Response('Rate limit exceeded', { status: 429 })
      }
    }

    return new Response('Internal server error', { status: 500 })
  }
}

