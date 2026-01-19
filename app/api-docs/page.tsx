import { 
  Shield, 
  MessageSquare, 
  Upload, 
  Info,
  AlertCircle
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/ui/codeblock"

export const metadata = {
  title: 'API Documentation - ChatSecure',
  description: 'API documentation for ChatSecure'
}

export default function APIDocsPage() {
  const baseUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'}/api`

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              API <span className="text-purple-200">Documentation</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-purple-100 md:text-xl">
              Integrate ChatSecure AI chat capabilities into your applications
            </p>
          </div>
        </div>
      </section>

      {/* Base URL */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="rounded-xl border bg-card p-6 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Base URL</h2>
            <div className="bg-muted rounded-lg p-4 font-mono text-sm break-all mb-4">
              {baseUrl}
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                All API requests should be made to this base URL. Append the endpoint path to this URL.
              </p>
              <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                <div className="flex items-start space-x-2">
                  <span className="font-semibold text-foreground">Example:</span>
                  <code className="text-xs">{baseUrl}/chat</code>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-semibold text-foreground">Example:</span>
                  <code className="text-xs">{baseUrl}/upload</code>
                </div>
              </div>
              <p className="text-xs">
                <strong>Note:</strong> Replace <code className="bg-background px-1 rounded">your-domain.com</code> with your actual ChatSecure domain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="rounded-xl border bg-card p-6 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <Shield className="size-5 text-purple-600" />
              <span>Authentication</span>
            </h2>
            <p className="text-muted-foreground">
              All endpoints require session-based authentication. Users must be signed in. 
              For browser requests, cookies are sent automatically. For server requests, include the session cookie in headers.
            </p>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Endpoints</h2>

          <div className="space-y-12 max-w-4xl mx-auto">
            {/* Chat Endpoint */}
            <div className="rounded-xl border bg-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <MessageSquare className="size-6 text-purple-600" />
                <div>
                  <span className="px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 mr-2">
                    POST
                  </span>
                  <code className="text-sm font-mono">/api/chat</code>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Request Body</h3>
                  <div className="bg-muted rounded-lg p-4">
                    <pre className="text-sm overflow-x-auto">
{`{
  "messages": [
    { "role": "user", "content": "Hello!" }
  ],
  "model": "gpt-4-turbo-preview" // optional
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Example</h3>
                  <CodeBlock
                    language="javascript"
                    value={`const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
  body: JSON.stringify({
    messages: [{ role: 'user', content: 'Hello!' }]
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
                  <h3 className="font-semibold mb-2 flex items-center space-x-2">
                    <AlertCircle className="size-4 text-amber-500" />
                    <span>Errors</span>
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <code className="text-red-600">401</code>
                      <span className="text-muted-foreground">Unauthorized</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <code className="text-red-600">400</code>
                      <span className="text-muted-foreground">Invalid request</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <code className="text-red-600">429</code>
                      <span className="text-muted-foreground">Rate limit exceeded</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upload Endpoint */}
            <div className="rounded-xl border bg-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Upload className="size-6 text-purple-600" />
                <div>
                  <span className="px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 mr-2">
                    POST
                  </span>
                  <code className="text-sm font-mono">/api/upload</code>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Request</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Send multipart/form-data with a file field named &quot;file&quot;
                  </p>
                  <div className="bg-muted rounded-lg p-3 text-sm">
                    <div className="flex justify-between mb-1">
                      <span>Max Size:</span>
                      <span>5 MB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Allowed Types:</span>
                      <span>JPEG, PNG, GIF, WebP</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Example</h3>
                  <CodeBlock
                    language="javascript"
                    value={`const formData = new FormData()
formData.append('file', fileInput.files[0])

const response = await fetch('/api/upload', {
  method: 'POST',
  credentials: 'include',
  body: formData
})

const data = await response.json()
console.log(data.imageUrl) // /uploads/abc123.png`}
                  />
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Response</h3>
                  <div className="bg-muted rounded-lg p-4">
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
                  <h3 className="font-semibold mb-2 flex items-center space-x-2">
                    <AlertCircle className="size-4 text-amber-500" />
                    <span>Errors</span>
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <code className="text-red-600">401</code>
                      <span className="text-muted-foreground">Unauthorized</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <code className="text-red-600">400</code>
                      <span className="text-muted-foreground">Invalid file type or too large</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="rounded-xl border bg-card p-8 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-6">
              Have questions? Contact our support team.
            </p>
            <Button asChild>
              <Link href="/dashboard#contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
