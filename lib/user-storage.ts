/**
 * Persistent user storage using Upstash Redis
 * All user data is stored in Redis and persists across server restarts
 */

import { redis } from './redis'

export interface User {
  id: string
  email: string
  password: string
  salt: string
  createdAt: string
  [key: string]: string // Index signature for Redis compatibility
}

export const userStorage = {
  /**
   * Get user by email from Redis
   */
  async getUser(email: string): Promise<User | null> {
    try {
      const user = await redis.hgetall<User>(`user:${email.toLowerCase()}`)
      
      if (!user || Object.keys(user).length === 0) {
        return null
      }
      
      return user
    } catch (error) {
      console.error('Error getting user:', error)
      return null
    }
  },

  /**
   * Create a new user in Redis
   */
  async createUser(
    email: string,
    hashedPassword: string,
    salt: string
  ): Promise<User> {
    const user: User = {
      id: crypto.randomUUID(),
      email: email.toLowerCase(),
      password: hashedPassword,
      salt,
      createdAt: new Date().toISOString()
    }

    try {
      // Store user data in Redis
      await redis.hmset(`user:${email.toLowerCase()}`, user)
      
      // Also store in a set for easy listing (optional)
      await redis.sadd('users:all', email.toLowerCase())
      
      return user
    } catch (error) {
      console.error('Error creating user:', error)
      throw new Error('Failed to create user')
    }
  },

  /**
   * Check if user exists
   */
  async userExists(email: string): Promise<boolean> {
    try {
      const user = await redis.exists(`user:${email.toLowerCase()}`)
      return user === 1
    } catch (error) {
      console.error('Error checking user existence:', error)
      return false
    }
  },

  /**
   * Get all users (for debugging)
   */
  async getAllUsers(): Promise<User[]> {
    try {
      const emails = await redis.smembers('users:all')
      const users: User[] = []
      
      for (const email of emails) {
        const user = await this.getUser(email)
        if (user) {
          users.push(user)
        }
      }
      
      return users
    } catch (error) {
      console.error('Error getting all users:', error)
      return []
    }
  },

  /**
   * Delete user (for testing)
   */
  async deleteUser(email: string): Promise<boolean> {
    try {
      await redis.del(`user:${email.toLowerCase()}`)
      await redis.srem('users:all', email.toLowerCase())
      return true
    } catch (error) {
      console.error('Error deleting user:', error)
      return false
    }
  },

  /**
   * Clear all users (for testing)
   */
  async clearAll(): Promise<void> {
    try {
      const emails = await redis.smembers('users:all')
      
      for (const email of emails) {
        await redis.del(`user:${email}`)
      }
      
      await redis.del('users:all')
    } catch (error) {
      console.error('Error clearing users:', error)
    }
  }
}

