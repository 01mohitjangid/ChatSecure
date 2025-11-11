/**
 * Retry utility with exponential backoff for handling API rate limits
 * Especially useful for free OpenAI API keys with limited rate limits
 */

interface RetryOptions {
  maxRetries?: number
  initialDelay?: number
  maxDelay?: number
  backoffMultiplier?: number
  retryableStatusCodes?: number[]
}

const DEFAULT_OPTIONS: Required<RetryOptions> = {
  maxRetries: 3,
  initialDelay: 1000, // 1 second
  maxDelay: 10000, // 10 seconds
  backoffMultiplier: 2,
  retryableStatusCodes: [429, 500, 502, 503, 504] // Rate limit and server errors
}

/**
 * Sleep utility for delays
 */
const sleep = (ms: number): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms))

/**
 * Check if error is retryable
 */
function isRetryableError(error: any, retryableStatusCodes: number[]): boolean {
  // Don't retry insufficient quota errors - they need user intervention
  const errorType = error?.data?.error?.type || error?.error?.type
  const errorCode = error?.data?.error?.code || error?.error?.code
  
  if (errorType === 'insufficient_quota' || errorCode === 'insufficient_quota') {
    return false
  }
  
  // Don't retry authentication errors - invalid API key
  if (errorType === 'invalid_api_key' || errorCode === 'invalid_api_key') {
    return false
  }
  
  // Check for rate limit or server errors
  if (error?.status && retryableStatusCodes.includes(error.status)) {
    // Special case: 429 with insufficient_quota should not be retried
    if (error.status === 429 && (errorType === 'insufficient_quota' || errorCode === 'insufficient_quota')) {
      return false
    }
    return true
  }

  // Check for timeout errors
  if (error?.message?.toLowerCase().includes('timeout')) {
    return true
  }

  // Check for network errors
  if (error?.message?.toLowerCase().includes('network')) {
    return true
  }

  return false
}

/**
 * Retry a function with exponential backoff
 * @param fn - Async function to retry
 * @param options - Retry configuration options
 * @returns Promise that resolves with the function result or rejects after max retries
 */
export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const config = { ...DEFAULT_OPTIONS, ...options }
  let lastError: any

  for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
    try {
      return await fn()
    } catch (error: any) {
      lastError = error

      // Don't retry if it's not a retryable error
      if (!isRetryableError(error, config.retryableStatusCodes)) {
        throw error
      }

      // Don't retry if we've exhausted all attempts
      if (attempt === config.maxRetries) {
        throw error
      }

      // Calculate delay with exponential backoff
      const delay = Math.min(
        config.initialDelay * Math.pow(config.backoffMultiplier, attempt),
        config.maxDelay
      )

      // Log retry attempt (in production, use proper logging)
      console.warn(
        `Retry attempt ${attempt + 1}/${config.maxRetries} after ${delay}ms delay. Error:`,
        error?.message || error
      )

      // Wait before retrying
      await sleep(delay)
    }
  }

  // This should never be reached, but TypeScript needs it
  throw lastError
}

/**
 * Wrapper specifically for OpenAI API calls with appropriate defaults
 */
export async function retryOpenAICall<T>(
  fn: () => Promise<T>
): Promise<T> {
  return retryWithBackoff(fn, {
    maxRetries: 2, // Lower retries for faster feedback
    initialDelay: 2000, // 2 seconds (rate limits typically reset after 60s)
    maxDelay: 5000, // 5 seconds max
    backoffMultiplier: 2,
    retryableStatusCodes: [429, 500, 502, 503, 504]
  })
}

