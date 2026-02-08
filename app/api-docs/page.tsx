import { ExternalLink, Terminal, Upload, FileImage, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'API Documentation - ChatSecure',
  description: 'Developer documentation for ChatSecure APIs'
}

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Header */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              API Documentation
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Integrate ChatSecure&apos;s powerful features into your applications.
              Comprehensive guides and references for our Chat and Upload APIs.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                v1.0.0
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm font-medium">
                Stable
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Sidebar Navigation */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-8 space-y-8">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-foreground">Getting Started</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#authentication" className="hover:text-primary transition-colors block py-1">Authentication</a></li>
                  <li><a href="#base-url" className="hover:text-primary transition-colors block py-1">Base URL</a></li>
                  <li><a href="#errors" className="hover:text-primary transition-colors block py-1">Errors</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 text-foreground">Endpoints</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <a href="#chat-api" className="hover:text-primary transition-colors flex items-center gap-2 py-1">
                      <span className="w-16 text-xs font-mono uppercase bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-1.5 py-0.5 rounded text-center">POST</span>
                      Chat
                    </a>
                  </li>
                  <li>
                    <a href="#upload-api" className="hover:text-primary transition-colors flex items-center gap-2 py-1">
                      <span className="w-16 text-xs font-mono uppercase bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-1.5 py-0.5 rounded text-center">POST</span>
                      Upload
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-16">

            {/* General Info */}
            <section id="introduction" className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Introduction</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to the ChatSecure API documentation. Our APIs allow you to build intelligent chat interfaces and handle secure file uploads with ease. All endpoints are built to be RESTful and return JSON responses, with the exception of the streaming Chat API.
              </p>
            </section>

            <section id="authentication" className="space-y-6 scroll-mt-20">
              <h2 className="text-2xl font-bold tracking-tight">Authentication</h2>
              <p className="text-muted-foreground text-lg">
                The API uses session-based authentication. Ensure you include the session cookie in your requests.
                Unauthorized requests will receive a <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">401 Unauthorized</code> response.
              </p>
              <div className="bg-card border rounded-lg p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                  <ExternalLink className="size-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Auth.js Integration</h4>
                  <p className="text-muted-foreground">This project uses Auth.js (NextAuth) for authentication handling. The session is automatically managed by the framework.</p>
                </div>
              </div>
            </section>

            <section id="base-url" className="space-y-6 scroll-mt-20">
              <h2 className="text-2xl font-bold tracking-tight">Base URL</h2>
              <p className="text-muted-foreground text-lg">
                All API requests should be made to the following base URL:
              </p>
              <div className="bg-muted rounded-lg p-4 font-mono text-sm flex items-center justify-between">
                <span>http://localhost:3000/api</span>
              </div>
            </section>

            <section id="errors" className="space-y-6 scroll-mt-20">
              <h2 className="text-2xl font-bold tracking-tight">Errors</h2>
              <p className="text-muted-foreground text-lg">
                The API uses standard HTTP status codes to indicate the success or failure of requests.
              </p>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted/50">
                    <tr className="border-b">
                      <th className="py-3 px-4 font-semibold w-24">Code</th>
                      <th className="py-3 px-4 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-3 px-4 font-mono text-blue-600">200</td>
                      <td className="py-3 px-4 text-muted-foreground">The request was successful.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-yellow-600">400</td>
                      <td className="py-3 px-4 text-muted-foreground">Bad Request. The request was invalid or cannot be served.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-orange-600">401</td>
                      <td className="py-3 px-4 text-muted-foreground">Unauthorized. Authentication is required or has failed.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-red-600">429</td>
                      <td className="py-3 px-4 text-muted-foreground">Too Many Requests. Rate limit exceeded.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-red-600">500</td>
                      <td className="py-3 px-4 text-muted-foreground">Internal Server Error. Something went wrong on our end.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="border-border" />

            {/* Chat API */}
            <section id="chat-api" className="space-y-8 scroll-mt-20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 text-blue-600 rounded-lg">
                  <MessageSquare className="size-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Chat API</h2>
                  <p className="text-lg text-muted-foreground mt-1">Generate AI responses using OpenAI models.</p>
                </div>
              </div>

              <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
                <div className="border-b bg-muted/40 px-6 py-4 flex flex-col md:flex-row md:items-center gap-4">
                  <span className="px-3 py-1 rounded-md bg-blue-600 text-white font-bold font-mono text-sm tracking-wide">POST</span>
                  <code className="font-mono text-muted-foreground">/api/chat</code>
                </div>
                <div className="p-6 space-y-8">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Request Body</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="py-3 font-semibold w-1/4">Field</th>
                            <th className="py-3 font-semibold w-1/4">Type</th>
                            <th className="py-3 font-semibold">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="py-3 font-mono text-primary">messages</td>
                            <td className="py-3 font-mono text-muted-foreground">Array</td>
                            <td className="py-3 text-muted-foreground">Array of message objects with <code className="bg-muted px-1 rounded">role</code> and <code className="bg-muted px-1 rounded">content</code>.</td>
                          </tr>
                          <tr>
                            <td className="py-3 font-mono text-primary">model</td>
                            <td className="py-3 font-mono text-muted-foreground">String</td>
                            <td className="py-3 text-muted-foreground">Optional. The OpenAI model to use. Default: <code className="bg-muted px-1 rounded">&apos;gpt-4-turbo-preview&apos;</code>.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Example Request</h4>
                    <div className="space-y-4">
                      <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto text-foreground">
                        <div className="mb-2 text-xs text-muted-foreground select-none font-semibold">cURL</div>
                        <pre>{`curl -X POST http://localhost:3000/api/chat \\
  -H "Content-Type: application/json" \\
  -d '{
    "messages": [
      { "role": "user", "content": "Hello, how does this API work?" }
    ],
    "model": "gpt-4-turbo-preview"
  }'`}</pre>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Response</h4>
                    <p className="text-muted-foreground mb-4">Returns a streaming text response compatible with the AI SDK.</p>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-border" />

            {/* Upload API */}
            <section id="upload-api" className="space-y-8 scroll-mt-20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 text-purple-600 rounded-lg">
                  <Upload className="size-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Upload API</h2>
                  <p className="text-lg text-muted-foreground mt-1">Securely upload image files to the server.</p>
                </div>
              </div>

              <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
                <div className="border-b bg-muted/40 px-6 py-4 flex flex-col md:flex-row md:items-center gap-4">
                  <span className="px-3 py-1 rounded-md bg-purple-600 text-white font-bold font-mono text-sm tracking-wide">POST</span>
                  <code className="font-mono text-muted-foreground">/api/upload</code>
                </div>
                <div className="p-6 space-y-8">
                  <div>
                    <p className="text-muted-foreground mb-6">
                      Accepts multipart/form-data. Supported formats: JPEG, PNG, GIF, WebP. Max size: 5MB.
                    </p>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Request Body</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="py-3 font-semibold w-1/4">Field</th>
                            <th className="py-3 font-semibold w-1/4">Type</th>
                            <th className="py-3 font-semibold">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="py-3 font-mono text-primary">file</td>
                            <td className="py-3 font-mono text-muted-foreground">File</td>
                            <td className="py-3 text-muted-foreground">The image file to upload.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Example Request</h4>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto text-foreground">
                      <div className="mb-2 text-xs text-muted-foreground select-none font-semibold">cURL</div>
                      <pre>{`curl -X POST http://localhost:3000/api/upload \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@/path/to/image.png"`}</pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Example Response</h4>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto text-foreground">
                      <pre>{`{
  "success": true,
  "imageUrl": "/uploads/example-image.png",
  "fileName": "example-image.png",
  "size": 10240,
  "type": "image/png"
}`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
