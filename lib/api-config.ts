/**
 * API Configuration Utilities
 * Helps validate and manage OpenAI API configuration
 */

export interface APIConfigStatus {
  isConfigured: boolean
  missingKeys: string[]
  warnings: string[]
}

/**
 * Check if OpenAI API is properly configured
 */
export function checkOpenAIConfig(): APIConfigStatus {
  const missingKeys: string[] = []
  const warnings: string[] = []

  // Check required environment variables
  if (!process.env.OPENAI_API_KEY) {
    missingKeys.push('OPENAI_API_KEY')
  } else {
    // Validate API key format
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey.startsWith('sk-')) {
      warnings.push('OPENAI_API_KEY should start with "sk-"')
    }
    if (apiKey.length < 40) {
      warnings.push('OPENAI_API_KEY appears to be invalid (too short)')
    }
  }

  if (!process.env.AUTH_SECRET) {
    missingKeys.push('AUTH_SECRET')
  } else if (process.env.AUTH_SECRET.length < 32) {
    warnings.push('AUTH_SECRET should be at least 32 characters for security')
  }

  if (!process.env.UPSTASH_REDIS_REST_URL) {
    missingKeys.push('UPSTASH_REDIS_REST_URL')
  }

  if (!process.env.UPSTASH_REDIS_REST_TOKEN) {
    missingKeys.push('UPSTASH_REDIS_REST_TOKEN')
  }

  return {
    isConfigured: missingKeys.length === 0,
    missingKeys,
    warnings
  }
}

/**
 * Get user-friendly configuration error message
 */
export function getConfigErrorMessage(config: APIConfigStatus): string {
  if (config.isConfigured && config.warnings.length === 0) {
    return ''
  }

  let message = ''

  if (!config.isConfigured) {
    message += '❌ Missing required configuration:\n'
    config.missingKeys.forEach(key => {
      message += `  - ${key}\n`
    })
    message += '\n'
    message += 'Please check your .env.local file and ensure all required variables are set.\n'
    message += 'Refer to env.example for the required configuration.\n'
  }

  if (config.warnings.length > 0) {
    message += '\n⚠️ Configuration warnings:\n'
    config.warnings.forEach(warning => {
      message += `  - ${warning}\n`
    })
  }

  return message
}

/**
 * Log configuration status (for development)
 */
export function logConfigStatus(): void {
  if (process.env.NODE_ENV === 'development') {
    const config = checkOpenAIConfig()
    
    if (!config.isConfigured) {
      console.error('❌ API Configuration Error:')
      console.error(getConfigErrorMessage(config))
    } else if (config.warnings.length > 0) {
      console.warn('⚠️ API Configuration Warnings:')
      console.warn(getConfigErrorMessage(config))
    } else {
      console.log('✅ API Configuration: All required variables are set')
    }
  }
}

/**
 * OpenAI API Rate Limit Info (for free tier)
 */
export const OPENAI_RATE_LIMITS = {
  FREE_TIER: {
    RPM: 3, // Requests per minute
    RPD: 200, // Requests per day (estimate)
    TPM: 40000, // Tokens per minute (estimate)
    MODEL: 'gpt-3.5-turbo'
  },
  TIER_1: {
    RPM: 500,
    TPM: 90000,
    MODEL: 'gpt-3.5-turbo '
  }
}

/**
 * Calculate estimated wait time based on rate limit
 */
export function getEstimatedWaitTime(requestCount: number, timeWindow: number = 60): number {
  const limit = OPENAI_RATE_LIMITS.FREE_TIER.RPM
  
  if (requestCount < limit) {
    return 0
  }
  
  // If we've exceeded the limit, suggest waiting for the time window to reset
  return timeWindow * 1000 // Return in milliseconds
}

/**
 * Format wait time for display
 */
export function formatWaitTime(milliseconds: number): string {
  if (milliseconds === 0) {
    return 'Ready to send'
  }
  
  const seconds = Math.ceil(milliseconds / 1000)
  
  if (seconds < 60) {
    return `${seconds} second${seconds !== 1 ? 's' : ''}`
  }
  
  const minutes = Math.ceil(seconds / 60)
  return `${minutes} minute${minutes !== 1 ? 's' : ''}`
}

