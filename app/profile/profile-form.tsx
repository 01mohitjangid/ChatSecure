"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, Mail, Key, Settings } from "lucide-react"

import { ProfileSection } from "./components/profile-section"
import { ProfileInfo } from "./components/profile-info"
import { AccountInfo } from "./components/account-info"
import { SecuritySettings } from "./components/security-settings"
import { Preferences } from "./components/preferences"

interface ProfileFormProps {
  user: {
    id: string
    email: string
    password: string
    salt: string
    profilePhoto?: string
    bio?: string
    phoneNumber?: string
    lastLogin?: string
  } | null
  userEmail: string
}

export function ProfileForm({ user, userEmail }: ProfileFormProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['profile']))

  if (!user) {
    return <div className="text-red-500">User not found</div>
  }

  const userInitial = userEmail?.[0]?.toUpperCase() || 'U'

  const toggleSection = (section: string) => {
    const newSections = new Set(expandedSections)
    if (newSections.has(section)) {
      newSections.delete(section)
    } else {
      newSections.add(section)
    }
    setExpandedSections(newSections)
  }

  return (
    <div className="py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-2xl mx-auto space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile Header Section */}
        <ProfileSection
          id="profile"
          title="My Profile"
          icon={User}
          isExpanded={expandedSections.has('profile')}
          onToggle={toggleSection}
        >
          <ProfileInfo user={user} userEmail={userEmail} userInitial={userInitial} />
        </ProfileSection>

        {/* Account Section */}
        <ProfileSection
          id="account"
          title="Account Information"
          icon={Mail}
          isExpanded={expandedSections.has('account')}
          onToggle={toggleSection}
        >
          <AccountInfo user={user} />
        </ProfileSection>

        {/* Security Section */}
        <ProfileSection
          id="security"
          title="Security & Privacy"
          icon={Key}
          isExpanded={expandedSections.has('security')}
          onToggle={toggleSection}
        >
          <SecuritySettings userEmail={userEmail} />
        </ProfileSection>

        {/* Preferences Section */}
        <ProfileSection
          id="preferences"
          title="Preferences"
          icon={Settings}
          isExpanded={expandedSections.has('preferences')}
          onToggle={toggleSection}
        >
          <Preferences />
        </ProfileSection>
      </motion.div>
    </div>
  )
}
