#!/usr/bin/env node

/**
 * Environment Variables Checker
 * Verifies all required environment variables are set
 */

const requiredVars = [
  'OPENAI_API_KEY',
  'AUTH_SECRET',
  'NEXT_PUBLIC_APP_URL'
]

const optionalVars = [
  'OPENAI_MODEL',
  'KV_URL',
  'KV_REST_API_URL',
  'KV_REST_API_TOKEN',
  'KV_REST_API_READ_ONLY_TOKEN',
  'AUTH_GITHUB_ID',
  'AUTH_GITHUB_SECRET'
]

console.log('🔍 Checking environment variables...\n')

let hasErrors = false

// Check required variables
console.log('✅ Required Variables:')
requiredVars.forEach(varName => {
  const value = process.env[varName]
  if (!value) {
    console.log(`   ❌ ${varName} - MISSING`)
    hasErrors = true
  } else {
    const maskedValue = varName.includes('KEY') || varName.includes('SECRET') 
      ? value.substring(0, 8) + '...' 
      : value
    console.log(`   ✅ ${varName} - ${maskedValue}`)
  }
})

// Check optional variables
console.log('\n📋 Optional Variables:')
optionalVars.forEach(varName => {
  const value = process.env[varName]
  if (!value) {
    console.log(`   ⚠️  ${varName} - Not set (optional)`)
  } else {
    const maskedValue = varName.includes('KEY') || varName.includes('SECRET') || varName.includes('TOKEN')
      ? value.substring(0, 8) + '...' 
      : value
    console.log(`   ✅ ${varName} - ${maskedValue}`)
  }
})

// Summary
console.log('\n' + '='.repeat(50))
if (hasErrors) {
  console.log('❌ Some required environment variables are missing!')
  console.log('📝 Please check your .env.local file')
  console.log('📖 See SETUP.md for detailed instructions')
  process.exit(1)
} else {
  console.log('✅ All required environment variables are set!')
  console.log('🚀 You can now run the application with: npm run dev')
  process.exit(0)
}

