import { Redis } from '@upstash/redis'

// Validate environment variables
if (!process.env.UPSTASH_REDIS_REST_URL) {
  throw new Error(
    'UPSTASH_REDIS_REST_URL is not defined. Please add it to your .env.local file. See UPSTASH_SETUP.md for setup instructions.'
  )
}

if (!process.env.UPSTASH_REDIS_REST_TOKEN) {
  throw new Error(
    'UPSTASH_REDIS_REST_TOKEN is not defined. Please add it to your .env.local file. See UPSTASH_SETUP.md for setup instructions.'
  )
}

// Initialize Upstash Redis client
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

