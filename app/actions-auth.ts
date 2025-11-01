'use server'

import { signOut } from '@/auth'

/**
 * Server action to handle user logout
 * This properly calls NextAuth signOut and clears the session
 */
export async function logout() {
  await signOut({
    redirectTo: '/sign-in'
  })
}

