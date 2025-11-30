"use client"

import type React from "react"

import { useFormState, useFormStatus } from "react-dom"
import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, ArrowRight } from "lucide-react"
import { authenticate } from "./actions"
import { toast } from "sonner"
import { getMessageFromCode } from "@/lib/utils"

function SignInButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3"
    >
      {pending ? "Signing in..." : "Sign In"}
    </Button>
  )
}

export default function SignInPage() {
  const router = useRouter()
  const [result, dispatch] = useFormState(authenticate, undefined)

  useEffect(() => {
    if (result) {
      if (result.type === 'error') {
        toast.error(getMessageFromCode(result.resultCode))
      } else {
        toast.success(getMessageFromCode(result.resultCode))
        router.push('/')
        router.refresh()
      }
    }
  }, [result, router])

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Login Form */}
      <div className="flex-1 bg-black text-white flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          {/* Close button */}
          <div className="flex justify-end">
            <Button variant="ghost" size="icon" asChild className="text-white hover:bg-white/10">
              <Link href="/">
                <X className="size-4" />
              </Link>
            </Button>
          </div>

          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Sign in</h1>
            <p className="text-gray-400 text-sm">Enter your details below</p>
          </div>

          {/* Form */}
          <form action={dispatch} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300 text-sm">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-500 focus:border-purple-500"
                required
                autoComplete="email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300 text-sm">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-500 focus:border-purple-500"
                required
                autoComplete="current-password"
                minLength={6}
              />
            </div>

            <SignInButton />
          </form>

          {/* Footer Links */}
          <div className="space-y-4 text-center">
            <Link href="/forgot-password" className="text-gray-400 hover:text-white text-sm">
              Forgot your password?
            </Link>

            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="text-gray-400">Don&apos;t have an account?</span>
              <Link href="/sign-up" className="text-white hover:underline">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Branding */}
      <div className="flex-1 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center p-8 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 size-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-32 left-16 size-24 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 size-16 border border-white/20 rounded-full"></div>
        </div>

        <div className="relative z-10 text-center text-white space-y-8 max-w-md">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-2">
            <div className="size-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-bold text-sm">ai</span>
            </div>
            {/* <span className="text-xl font-semibold">Visio</span> */}
          </div>

          {/* Content */}
          <div className="space-y-4">
            <p className="text-sm opacity-80">Stock BOT</p>
            <h2 className="text-3xl font-light leading-tight">
              Transformative collaboration
              <br />
              for larger teams
            </h2>
          </div>

          {/* CTA Button */}
          <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-6">
            LOGIN NOW
          </Button>

          {/* Navigation Arrow */}
          <div className="absolute bottom-8 right-8">
            <Button size="icon" className="bg-white/20 hover:bg-white/30 text-white rounded-full">
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
