import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { ProfileForm } from "./profile-form"
import { getUser } from "../sign-up/actions"

export const metadata = {
  title: 'Profile - ChatSecure',
  description: 'Manage your account settings and preferences'
}

export default async function ProfilePage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/sign-in")
  }

  // Fetch full user details
  const userDetails = await getUser(session.user.email!)

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <div className="container max-w-5xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col gap-2 pb-6 border-b border-white/10">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Profile
            </h1>
            <p className="text-base text-zinc-400">
              Manage your personal information and security settings.
            </p>
          </div>

          {/* Main Content */}
          <div className="w-full">
            <ProfileForm
              user={userDetails}
              userEmail={session.user.email!}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
