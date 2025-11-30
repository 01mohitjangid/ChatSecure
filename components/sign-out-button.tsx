"use client"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { handleSignOut } from "@/app/actions"

export function SignOutButton() {
  const router = useRouter()

  const onSignOut = async () => {
    try {
      await handleSignOut()
      toast.success("Signed out successfully")
      router.push("/")
      router.refresh()
    } catch (error) {
      toast.error("Failed to sign out")
    }
  }

  return (
    <DropdownMenuItem onClick={onSignOut}>
      <LogOut className="mr-2 size-4" />
      <span>Sign out</span>
    </DropdownMenuItem>
  )
}

