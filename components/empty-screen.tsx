import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to ChatSecure! 🔒
        </h1>
        <p className="leading-normal text-muted-foreground">
          A secure AI chat application powered by{' '}
          <ExternalLink href="https://openai.com">OpenAI</ExternalLink> and built with{' '}
          <ExternalLink href="https://nextjs.org">Next.js 14</ExternalLink>.
        </p>
        
        <p className="leading-normal text-muted-foreground">
          Start a conversation by typing your message below. Your chats are securely stored 
          and only accessible to you.
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          <p className="text-sm font-medium">You can ask me to:</p>
          <ul className="text-sm text-muted-foreground space-y-1 ml-4">
            <li>• Answer questions and explain concepts</li>
            <li>• Help with coding and debugging</li>
            <li>• Write and edit content</li>
            <li>• Brainstorm ideas and solutions</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
