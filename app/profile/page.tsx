import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { ProfileForm } from "./profile-form"
import { getUser } from "../sign-up/actions"

export const metadata = {
  title: 'My Profile - ChatSecure',
  description: 'Manage your ChatSecure account'
}

export default async function ProfilePage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/sign-in")
  }

  // Fetch full user details
  const userDetails = await getUser(session.user.email!)

  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <section className="relative w-full py-12 md:py-16 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 size-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 left-20 size-24 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 size-16 border border-white/20 rounded-full"></div>
        </div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              PROFILE
            </h1>
            <p className="text-purple-200 text-sm md:text-base">
              Manage your account settings
            </p>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="w-full py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <ProfileForm 
              user={userDetails} 
              userEmail={session.user.email!}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

