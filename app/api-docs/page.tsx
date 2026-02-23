'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, Terminal, Upload, MessageSquare, Copy, Check, ChevronRight, Server, Shield, Zap } from 'lucide-react'
import Link from 'next/link'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json'
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

SyntaxHighlighter.registerLanguage('json', json)
SyntaxHighlighter.registerLanguage('bash', bash)

export default function ApiDocsPage() {
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#030303] text-zinc-900 dark:text-white selection:bg-purple-500/30 selection:text-purple-900 dark:selection:text-purple-200 font-sans overflow-hidden transition-colors">

      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] size-[40%] bg-purple-500/10 dark:bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] size-[40%] bg-blue-500/10 dark:bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden border-b border-zinc-200 dark:border-white/5">
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        >
          <h1 className="text-[12vw] md:text-[15vw] font-black tracking-tighter text-black/[0.07] dark:text-white/[0.04] select-none whitespace-nowrap">
            CHATSECURE
          </h1>
        </motion.div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/50 dark:bg-white/5 border border-zinc-300 dark:border-white/10 text-xs font-medium text-purple-600 dark:text-purple-300 mb-6 backdrop-blur-sm">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex size-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-purple-500"></span>
              </span>
              API v1.0.0 Stable
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-500 dark:from-white dark:to-white/60">
              Build with Superpowers
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Integrate ChatSecure&apos;s powerful AI chat and secure file handling capabilities directly into your applications.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Sidebar Navigation */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-8">
              <NavSection title="Getting Started">
                <NavLink href="#authentication">Authentication</NavLink>
                <NavLink href="#base-url">Base URL</NavLink>
                <NavLink href="#errors">Errors</NavLink>
              </NavSection>

              <NavSection title="Endpoints">
                <NavLink href="#chat-api" method="POST">Chat</NavLink>
                <NavLink href="#upload-api" method="POST">Upload</NavLink>
              </NavSection>

              <div className="p-4 rounded-xl bg-gradient-to-br from-purple-100/50 to-blue-100/50 dark:from-purple-900/20 dark:to-blue-900/20 border border-zinc-200 dark:border-white/5 backdrop-blur-sm">
                <h4 className="font-semibold text-sm mb-2 text-zinc-900 dark:text-white">Need Help?</h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3">Check our community guides or contact support.</p>
                <Link href="/contact" className="text-xs text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1 transition-colors">
                  Contact Support <ChevronRight className="size-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-24">

            {/* Intro Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard
                icon={<Zap className="size-6 text-yellow-400" />}
                title="Fast Integration"
                description="Get up and running in minutes with our simple REST API."
              />
              <FeatureCard
                icon={<Shield className="size-6 text-green-400" />}
                title="Enterprise Secure"
                description="Bank-grade encryption and token-based authentication."
              />
              <FeatureCard
                icon={<Server className="size-6 text-blue-400" />}
                title="Scalable"
                description="Built to handle millions of requests with low latency."
              />
            </div>

            {/* Authentication */}
            <Section id="authentication" title="Authentication">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                The API uses session-based authentication via secure cookies. All requests must include valid session credentials.
              </p>
              <div className="bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-500/20 rounded-lg text-purple-600 dark:text-purple-400">
                    <Shield className="size-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Auth.js Integration</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      This project uses Auth.js (also known as NextAuth) for seamless authentication handling. The session token is automatically managed by the framework when you log in via the web interface.
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            {/* Base URL */}
            <Section id="base-url" title="Base URL">
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">All API requests should be made to:</p>
              <CodeBlock code="http://localhost:3000/api" language="bash" />
            </Section>

            {/* Chat API */}
            <Section id="chat-api" title="Chat API" badge="POST">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                Generate AI responses using advanced OpenAI models. Supports streaming for real-time interaction.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Request Body</h3>
                  <div className="border border-zinc-200 dark:border-white/10 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-zinc-100 dark:bg-white/5">
                        <tr>
                          <th className="py-4 px-6 font-semibold text-zinc-900 dark:text-white">Field</th>
                          <th className="py-4 px-6 font-semibold text-zinc-900 dark:text-white">Type</th>
                          <th className="py-4 px-6 font-semibold text-zinc-900 dark:text-white">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-200 dark:divide-white/5 bg-white dark:bg-zinc-900/30">
                        <tr>
                          <td className="py-4 px-6 font-mono text-purple-600 dark:text-purple-400">messages</td>
                          <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">Array</td>
                          <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">List of message objects ({`{ role, content }`})</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-6 font-mono text-purple-600 dark:text-purple-400">model</td>
                          <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">String</td>
                          <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">Model to use (default: gpt-4-turbo-preview)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Example Request</h3>
                  <CodeBlock
                    language="bash"
                    code={`curl -X POST http://localhost:3000/api/chat \\
  -H "Content-Type: application/json" \\
  -d '{
    "messages": [
      { "role": "user", "content": "Hello, how does this API work?" }
    ],
    "model": "gpt-4-turbo-preview"
  }'`}
                  />
                </div>
              </div>
            </Section>

            {/* Upload API */}
            <Section id="upload-api" title="Upload API" badge="POST">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                Securely upload image files. Supports JPEG, PNG, GIF, and WebP formats up to 5MB.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Example Request</h3>
                  <CodeBlock
                    language="bash"
                    code={`curl -X POST http://localhost:3000/api/upload \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@/path/to/image.png"`}
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Success Response</h3>
                  <CodeBlock
                    language="json"
                    code={`{
  "success": true,
  "imageUrl": "/uploads/example-image.png",
  "fileName": "example-image.png",
  "size": 10240,
  "type": "image/png"
}`}
                  />
                </div>
              </div>
            </Section>

          </div>
        </div>
      </div>
    </div>
  )
}

function Section({ id, title, children, badge }: { id: string, title: string, children: React.ReactNode, badge?: string }) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-32"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">{title}</h2>
        {badge && (
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 text-xs font-mono font-bold rounded-md border border-purple-200 dark:border-purple-500/30">
            {badge}
          </span>
        )}
      </div>
      {children}
    </motion.section>
  )
}

function NavSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-4 border-l-2 border-purple-500 pl-3">
        {title}
      </h3>
      <ul className="space-y-2">
        {children}
      </ul>
    </div>
  )
}

function NavLink({ href, children, method }: { href: string, children: React.ReactNode, method?: string }) {
  return (
    <li>
      <a
        href={href}
        className="group flex items-center justify-between py-2 px-3 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-white/5 transition-all text-sm"
      >
        <span>{children}</span>
        {method && (
          <span className="text-[10px] font-mono opacity-50 bg-zinc-200 dark:bg-white/10 px-1.5 py-0.5 rounded group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
            {method}
          </span>
        )}
      </a>
    </li>
  )
}

function CodeBlock({ code, language }: { code: string, language: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-[#1e1e2e]">
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="size-3 rounded-full bg-red-500/20 mix-blend-screen" />
          <div className="size-3 rounded-full bg-yellow-500/20 mix-blend-screen" />
          <div className="size-3 rounded-full bg-green-500/20 mix-blend-screen" />
        </div>
        <button
          onClick={copyToClipboard}
          className="text-zinc-500 hover:text-white transition-colors p-1.5 rounded hover:bg-white/10"
        >
          {copied ? <Check className="size-4 text-green-400" /> : <Copy className="size-4" />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto text-sm font-mono">
        <SyntaxHighlighter
          language={language}
          style={atomOneDark}
          customStyle={{ background: 'transparent', padding: 0 }}
          wrapLongLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-xl bg-zinc-100/50 dark:bg-white/5 border border-zinc-200 dark:border-white/5 hover:border-purple-500/30 transition-colors group">
      <div className="p-3 bg-zinc-200/50 dark:bg-white/5 rounded-lg w-fit mb-4 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 transition-colors">
        {icon}
      </div>
      <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  )
}
