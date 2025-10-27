'use server'

import { signIn } from '@/auth'
import { ResultCode } from '@/lib/utils'
import { z } from 'zod'
import { AuthError } from 'next-auth'
import { userStorage } from '@/lib/user-storage'

interface User {
  id: string
  email: string
  password: string
  salt: string
}

export const getUser = async (email: string): Promise<User | null> => {
  try {
    const user = await userStorage.getUser(email)
    return user
  } catch (error) {
    console.error('Failed to get user from storage:', error)
    return null
  }
}

interface Result {
  type: string
  resultCode: ResultCode
}

export const authenticate = async (
  _prevState: Result | undefined,
  formData: FormData
): Promise<Result | undefined> => {
  try {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const parsedCredentials = z
      .object({
        email: z.string().email(),
        password: z.string().min(6)
      })
      .safeParse({
        email,
        password
      })

    if (parsedCredentials.success) {
      await signIn('credentials', {
        email,
        password,
        redirect: false
      })

      return {
        type: 'success',
        resultCode: ResultCode.UserLoggedIn
      }
    } else {
      return {
        type: 'error',
        resultCode: ResultCode.InvalidCredentials
      }
    }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            type: 'error',
            resultCode: ResultCode.InvalidCredentials
          }
        default:
          return {
            type: 'error',
            resultCode: ResultCode.UnknownError
          }
      }
    }

    return {
      type: 'error',
      resultCode: ResultCode.UnknownError
    }
  }
}

