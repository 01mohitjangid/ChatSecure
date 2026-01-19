import { 
  Shield, 
  MessageSquare, 
  Upload, 
  Key, 
  Code, 
  BookOpen, 
  CheckCircle2,
  AlertCircle,
  Info,
  Copy,
  ExternalLink
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/ui/codeblock"

export const metadata = {
  title: 'API Documentation - ChatSecure',
  description: 'Complete API documentation for ChatSecure - Integrate AI chat capabilities into your applications'
}

export default function APIDocsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      {/* <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm mb-4">
                Developer Resources
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                API <span className="text-purple-200">Documentation</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Integrate ChatSecure&apos;s powerful AI chat capabilities into your applications with our comprehensive REST API.
              </p>
            </div>
            <div className="space-x-4 mt-6">
              <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
                <Link href="#getting-started">
                  Get Started
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Link href="#endpoints">View Endpoints</Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Quick Start Section */}
      <section id="getting-started" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Quick Start
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get up and running with the ChatSecure API in minutes
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <QuickStartCard
              step="1"
              title="Get Your API Key"
              description="Request an API key through our contact form or dashboard"
              icon={<Key className="size-6 text-purple-600" />}
            />
            <QuickStartCard
              step="2"
              title="Authenticate"
              description="Include your API key in the Authorization header"
              icon={<Shield className="size-6 text-purple-600" />}
            />
            <QuickStartCard
              step="3"
              title="Make Requests"
              description="Start making API calls to chat or upload endpoints"
              icon={<Code className="size-6 text-purple-600" />}
            />
          </div>

          <div className="rounded-xl border bg-card p-6 md:p-8 shadow-lg">
            <div className="flex items-center space-x-2 mb-4">
              <Info className="size-5 text-purple-600" />
              <h3 className="text-xl font-semibold">Base URL</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              All API requests should be made to:
            </p>
            <div className="bg-muted rounded-lg p-4 font-mono text-sm">
              <span className="text-purple-600">{process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'}</span>/api
            </div>
          </div>
        </div>
      </section>

      {/* Authentication Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Authentication
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                All API endpoints require authentication using session-based authentication
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="rounded-xl border bg-card p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <Shield className="size-5 text-purple-600" />
                <span>Session Authentication</span>
              </h3>
              <p className="text-muted-foreground mb-4">
                ChatSecure uses NextAuth.js for authentication. Users must be signed in to access the API endpoints. 
                The session is automatically validated on each request.
              </p>
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> For browser-based requests, cookies are automatically sent. 
                  For server-to-server requests, you&apos;ll need to include session cookies in your requests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section id="endpoints" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                API Endpoints
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore available endpoints and integrate them into your application
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {/* Chat Endpoint */}
            <EndpointCard
              method="POST"
              path="/api/chat"
              title="Chat Completion"
              description="Send messages to the AI and receive streaming responses"
              icon={<MessageSquare className="size-6 text-purple-600" />}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center space-x-2">
                    <Info className="size-4 text-purple-600" />
                    <span>Request Body</span>
                  </h4>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`{
  "messages": [
    {
      "role": "user",
      "content": "Hello, how are you?"
    }
  ],
  "model": "gpt-4-turbo-preview" // optional, defaults to gpt-4-turbo-preview
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Parameters</h4>
                  <div className="space-y-2">
                    <ParamRow
                      name="messages"
                      type="Array&lt;Message&gt;"
                      required
                      description="Array of message objects with role and content"
                    />
                    <ParamRow
                      name="model"
                      type="string"
                      required={false}
                      description="OpenAI model to use (default: gpt-4-turbo-preview)"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Message Object</h4>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`{
  "role": "user" | "assistant" | "system",
  "content": "string"
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Response</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Returns a streaming text response. The response is a text stream that can be consumed incrementally.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Example Request</h4>
                  <CodeBlock
                    language="javascript"
                    value={`const response = await fetch('/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    messages: [
      { role: 'user', content: 'Explain quantum computing in simple terms' }
    ],
    model: 'gpt-4-turbo-preview'
  })
})

const reader = response.body.getReader()
const decoder = new TextDecoder()

while (true) {
  const { done, value } = await reader.read()
  if (done) break
  
  const chunk = decoder.decode(value)
  console.log(chunk)
}`}
                  />
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center space-x-2">
                    <AlertCircle className="size-4 text-amber-500" />
                    <span>Error Responses</span>
                  </h4>
                  <div className="space-y-2">
                    <ErrorResponse code={401} message="Unauthorized - User not authenticated" />
                    <ErrorResponse code={400} message="Invalid request: messages array required" />
                    <ErrorResponse code={429} message="Rate limit exceeded" />
                    <ErrorResponse code={500} message="Internal server error" />
                  </div>
                </div>
              </div>
            </EndpointCard>

            {/* Upload Endpoint */}
            <EndpointCard
              method="POST"
              path="/api/upload"
              title="Image Upload"
              description="Upload images to be used in chat conversations"
              icon={<Upload className="size-6 text-purple-600" />}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center space-x-2">
                    <Info className="size-4 text-purple-600" />
                    <span>Request Format</span>
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    This endpoint accepts multipart/form-data with a file field named &quot;file&quot;.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">File Requirements</h4>
                  <div className="space-y-2">
                    <RequirementRow
                      label="Allowed Types"
                      value="JPEG, PNG, GIF, WebP"
                    />
                    <RequirementRow
                      label="Max File Size"
                      value="5 MB"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Response</h4>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`{
  "success": true,
  "imageUrl": "/uploads/abc123.png",
  "fileName": "abc123.png",
  "size": 102400,
  "type": "image/png"
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Example Request</h4>
                  <CodeBlock
                    language="javascript"
                    value={`const formData = new FormData()
formData.append('file', fileInput.files[0])

const response = await fetch('/api/upload', {
  method: 'POST',
  body: formData
})

const data = await response.json()
console.log(data.imageUrl) // /uploads/abc123.png`}
                  />
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center space-x-2">
                    <AlertCircle className="size-4 text-amber-500" />
                    <span>Error Responses</span>
                  </h4>
                  <div className="space-y-2">
                    <ErrorResponse code={401} message="Unauthorized - User not authenticated" />
                    <ErrorResponse code={400} message="No file provided" />
                    <ErrorResponse code={400} message="Invalid file type. Only JPEG, PNG, GIF, and WebP images are allowed." />
                    <ErrorResponse code={400} message="File too large. Maximum size is 5MB." />
                    <ErrorResponse code={500} message="Failed to upload image" />
                  </div>
                </div>
              </div>
            </EndpointCard>
          </div>
        </div>
      </section>

      {/* Rate Limits & Best Practices */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Best Practices
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Follow these guidelines for optimal API usage
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <BestPracticeCard
              icon={<Shield className="size-6 text-purple-600" />}
              title="Handle Errors Gracefully"
              description="Always implement proper error handling for 4xx and 5xx responses"
            />
            <BestPracticeCard
              icon={<MessageSquare className="size-6 text-purple-600" />}
              title="Stream Responses"
              description="For chat endpoints, consume the stream incrementally for better UX"
            />
            <BestPracticeCard
              icon={<Upload className="size-6 text-purple-600" />}
              title="Validate Files Client-Side"
              description="Check file size and type before uploading to save bandwidth"
            />
            <BestPracticeCard
              icon={<Key className="size-6 text-purple-600" />}
              title="Secure Your Keys"
              description="Never expose API keys or session tokens in client-side code"
            />
            <BestPracticeCard
              icon={<Code className="size-6 text-purple-600" />}
              title="Use Appropriate Models"
              description="Choose the right model for your use case to optimize costs"
            />
            <BestPracticeCard
              icon={<BookOpen className="size-6 text-purple-600" />}
              title="Read Documentation"
              description="Stay updated with the latest API changes and improvements"
            />
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="rounded-xl border bg-card p-8 md:p-12 shadow-lg max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Need Help?
            </h2>
            <p className="text-muted-foreground mb-6 md:text-lg">
              Have questions about the API or need assistance with integration? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/dashboard#contact">
                  Contact Support
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/help-center">
                  Help Center
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const QuickStartCard = ({ 
  step, 
  title, 
  description, 
  icon 
}: { 
  step: string
  title: string
  description: string
  icon: React.ReactNode
}) => {
  return (
    <div className="rounded-lg border bg-card p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="rounded-lg bg-purple-100 dark:bg-purple-950 p-3 shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm font-semibold text-purple-600">Step {step}</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}

const EndpointCard = ({
  method,
  path,
  title,
  description,
  icon,
  children
}: {
  method: string
  path: string
  title: string
  description: string
  icon: React.ReactNode
  children: React.ReactNode
}) => {
  const methodColor = method === 'POST' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
  
  return (
    <div className="rounded-xl border bg-card p-6 md:p-8 shadow-lg">
      <div className="flex items-start space-x-4 mb-6">
        <div className="rounded-lg bg-purple-100 dark:bg-purple-950 p-3 shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <span className={`px-2 py-1 rounded text-xs font-semibold ${methodColor}`}>
              {method}
            </span>
            <code className="text-sm font-mono bg-muted px-2 py-1 rounded">{path}</code>
          </div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="border-t pt-6">
        {children}
      </div>
    </div>
  )
}

const ParamRow = ({
  name,
  type,
  required,
  description
}: {
  name: string
  type: string
  required: boolean
  description: string
}) => {
  return (
    <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-1">
          <code className="text-sm font-mono font-semibold">{name}</code>
          <span className="text-xs text-muted-foreground">({type})</span>
          {required && (
            <span className="text-xs bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-2 py-0.5 rounded">
              required
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

const RequirementRow = ({
  label,
  value
}: {
  label: string
  value: string
}) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
      <span className="text-sm font-medium">{label}</span>
      <span className="text-sm text-muted-foreground">{value}</span>
    </div>
  )
}

const ErrorResponse = ({
  code,
  message
}: {
  code: number
  message: string
}) => {
  return (
    <div className="flex items-start space-x-3 p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900">
      <code className="text-sm font-mono font-semibold text-red-600 dark:text-red-400 shrink-0">
        {code}
      </code>
      <p className="text-sm text-red-700 dark:text-red-300">{message}</p>
    </div>
  )
}

const BestPracticeCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode
  title: string
  description: string
}) => {
  return (
    <div className="rounded-lg border bg-card p-6 hover:shadow-lg transition-shadow">
      <div className="rounded-lg bg-purple-100 dark:bg-purple-950 w-fit p-3 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

