# ChatSecure

ChatSecure is a simple, secure AI chat platform built with Next.js, TypeScript, and OpenAI. It provides private, real-time conversations with a modern interface and strong security.

## Features
- AI-powered chat (OpenAI GPT-4)
- End-to-end encrypted conversations
- Secure user authentication
- Persistent chat history
- Responsive, modern UI

## Quick Start
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/ChatSecure.git
   cd ChatSecure
   ```
2. **Install dependencies:**
   ```bash
   pnpm install
   ```
3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local` and fill in your OpenAI and NextAuth credentials.
4. **Run the development server:**
   ```bash
   pnpm dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) to start chatting.

## Environment Variables Example
Create a `.env.local` file in the root directory with the following content:

```env
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4-turbo-preview

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here

# Vercel KV (Optional)
KV_URL=your_vercel_kv_url
KV_REST_API_URL=your_vercel_kv_rest_api_url
KV_REST_API_TOKEN=your_vercel_kv_rest_api_token

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Project Structure
```
ChatSecure/
├── app/           # Next.js app routes (chat, api, dashboard, etc.)
├── components/    # UI and chat components
├── lib/           # Utilities and hooks
├── public/        # Static assets
├── auth.ts        # Authentication config
├── middleware.ts  # Middleware
└── package.json   # Project config
```
