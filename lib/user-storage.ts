/**
 * Simple in-memory user storage
 * For production, replace with a real database (Postgres, MongoDB, etc.)
 */

interface User {
  id: string
  email: string
  password: string
  salt: string
  createdAt: string
}

// In-memory storage (will reset on server restart)
// For production, use a real database
const users = new Map<string, User>()

export const userStorage = {
  /**
   * Get user by email
   */
  async getUser(email: string): Promise<User | null> {
    const user = users.get(email.toLowerCase())
    return user || null
  },

  /**
   * Create a new user
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

    users.set(email.toLowerCase(), user)
    return user
  },

  /**
   * Check if user exists
   */
  async userExists(email: string): Promise<boolean> {
    return users.has(email.toLowerCase())
  },

  /**
   * Get all users (for debugging)
   */
  async getAllUsers(): Promise<User[]> {
    return Array.from(users.values())
  },

  /**
   * Delete user (for testing)
   */
  async deleteUser(email: string): Promise<boolean> {
    return users.delete(email.toLowerCase())
  },

  /**
   * Clear all users (for testing)
   */
  async clearAll(): Promise<void> {
    users.clear()
  }
}

// Export for direct access if needed
export { users }

