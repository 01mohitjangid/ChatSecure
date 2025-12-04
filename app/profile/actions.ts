'use server'

import { kv } from '@vercel/kv'
import { getStringFromBuffer } from '@/lib/utils'
import { revalidatePath } from 'next/cache'

async function getUser(email: string) {
  try {
    const user = await kv.hgetall<{
      id: string
      email: string
      password: string
      salt: string
    }>(`user:${email}`)
    return user
  } catch (error) {
    console.error('Failed to fetch user:', error)
    return null
  }
}

export async function updatePassword(formData: FormData) {
  try {
    const email = formData.get('email') as string
    const currentPassword = formData.get('currentPassword') as string
    const newPassword = formData.get('newPassword') as string

    if (!email || !currentPassword || !newPassword) {
      return {
        type: 'error',
        message: 'All fields are required'
      }
    }

    // Get user from database
    const user = await getUser(email)

    if (!user) {
      return {
        type: 'error',
        message: 'User not found'
      }
    }

    // Verify current password
    const encoder = new TextEncoder()
    const saltedCurrentPassword = encoder.encode(currentPassword + user.salt)
    const hashedCurrentPasswordBuffer = await crypto.subtle.digest(
      'SHA-256',
      saltedCurrentPassword
    )
    const hashedCurrentPassword = getStringFromBuffer(hashedCurrentPasswordBuffer)

    if (hashedCurrentPassword !== user.password) {
      return {
        type: 'error',
        message: 'Current password is incorrect'
      }
    }

    // Hash new password with the same salt
    const saltedNewPassword = encoder.encode(newPassword + user.salt)
    const hashedNewPasswordBuffer = await crypto.subtle.digest(
      'SHA-256',
      saltedNewPassword
    )
    const hashedNewPassword = getStringFromBuffer(hashedNewPasswordBuffer)

    // Update password in database
    await kv.hset(`user:${email}`, {
      password: hashedNewPassword
    })

    revalidatePath('/profile')

    return {
      type: 'success',
      message: 'Password updated successfully'
    }
  } catch (error) {
    console.error('Password update error:', error)
    return {
      type: 'error',
      message: 'Failed to update password'
    }
  }
}

