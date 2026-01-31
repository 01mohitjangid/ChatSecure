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
      profilePhoto?: string
      bio?: string
      phoneNumber?: string
      lastLogin?: string
    }>(`user:${email}`)
    return user
  } catch (error) {
    console.error('Failed to fetch user:', error)
    return null
  }
}

export async function updateUserDetails(email: string, data: { bio?: string, phoneNumber?: string }) {
  try {
    const user = await getUser(email)
    if (!user) return { type: 'error', message: 'User not found' }

    await kv.hset(`user:${email}`, {
      ...data
    })

    revalidatePath('/profile')
    return { type: 'success', message: 'Profile updated' }
  } catch (error) {
    return { type: 'error', message: 'Failed to update profile' }
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

export async function updateProfilePhoto(email: string, photoUrl: string) {
  try {
    if (!email || !photoUrl) {
      return {
        type: 'error',
        message: 'Email and photo URL are required'
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

    // Update profile photo in database
    await kv.hset(`user:${email}`, {
      profilePhoto: photoUrl
    })

    revalidatePath('/profile')
    revalidatePath('/')

    return {
      type: 'success',
      message: 'Profile photo updated successfully'
    }
  } catch (error) {
    console.error('Profile photo update error:', error)
    return {
      type: 'error',
      message: 'Failed to update profile photo'
    }
  }
}

export async function removeProfilePhoto(email: string) {
  try {
    if (!email) {
      return {
        type: 'error',
        message: 'Email is required'
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

    // Remove profile photo from database
    await kv.hset(`user:${email}`, {
      profilePhoto: ''
    })

    revalidatePath('/profile')
    revalidatePath('/')

    return {
      type: 'success',
      message: 'Profile photo removed successfully'
    }
  } catch (error) {
    console.error('Profile photo removal error:', error)
    return {
      type: 'error',
      message: 'Failed to remove profile photo'
    }
  }
}

