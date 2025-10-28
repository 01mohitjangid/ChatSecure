"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useFormState, useFormStatus } from "react-dom"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, ArrowRight, Loader2 } from "lucide-react"
import { signup } from "./actions"
import { toast } from "sonner"
import { getMessageFromCode } from "@/lib/utils"

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 size-4 animate-spin" />
          Creating account...
        </>
      ) : (
        "Sign Up"
      )}
    </Button>
  )
}

export default function SignUpPage() {
  const router = useRouter()
  const [result, dispatch] = useFormState(signup, undefined)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  useEffect(() => {
    if (result) {
      if (result.type === 'error') {
        toast.error(getMessageFromCode(result.resultCode))
      } else {
        toast.success(getMessageFromCode(result.resultCode))
        router.refresh()
        router.push('/')
      }
    }
  }, [result, router])

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Sign Up Form */}
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
            <h1 className="text-2xl font-semibold">Create your account</h1>
            <p className="text-gray-400 text-sm">Enter your details to get started</p>
          </div>

          {/* Form */}
          <form 
            action={(formData) => {
              // Client-side password validation
              if (password !== confirmPassword) {
                toast.error("Passwords do not match!")
                return
              }
              dispatch(formData)
            }} 
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300 text-sm">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
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
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-500 focus:border-purple-500"
                required
                minLength={6}
                autoComplete="new-password"
              />
              <p className="text-xs text-gray-500">Minimum 6 characters</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-gray-300 text-sm">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-500 focus:border-purple-500"
                required
                minLength={6}
                autoComplete="new-password"
              />
            </div>

            <SubmitButton />
          </form>

          {/* Footer Links */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="text-gray-400">Already have an account?</span>
              <Link href="/sign-in" className="text-white hover:underline">
                Sign In
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
              <span className="text-purple-600 font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-semibold"></span>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <p className="text-sm opacity-80 uppercase tracking-wider">ChatSecure AI</p>
            <h2 className="text-3xl font-light leading-tight">
              Join thousands of users
              <br />
              experiencing secure AI
            </h2>
            <p className="text-sm opacity-90">
              Create your free account and start having intelligent conversations protected by enterprise-grade encryption.
            </p>
          </div>

          {/* CTA Button */}
          <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-6" asChild>
            <Link href="/dashboard">LEARN MORE</Link>
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
