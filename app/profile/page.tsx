import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { ProfileForm } from "./profile-form"
import { getUser } from "../sign-up/actions"

export default async function ProfilePage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/sign-in")
  }

  // Fetch full user details
  const userDetails = await getUser(session.user.email!)

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-4">
      <div className="w-full max-w-2xl">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              My Profile
            </h3>
            <p className="text-sm text-muted-foreground">
              View and manage your account information
            </p>
          </div>
          <div className="p-6 pt-0">
            <ProfileForm user={userDetails} />
          </div>
        </div>
      </div>
    </div>
  )
}

