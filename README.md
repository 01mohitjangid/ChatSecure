# 🔒 ChatSecure

<div align="center">

![ChatSecure](https://img.shields.io/badge/ChatSecure-AI%20Chat%20Platform-purple?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=for-the-badge&logo=typescript)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4-green?style=for-the-badge&logo=openai)

**A next-generation AI chat platform built with cutting-edge technology and enterprise-grade security.**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Usage](#-usage) • [Contributing](#-contributing)

</div>

---

## ✨ Features

### 🤖 AI-Powered Conversations
- **Advanced AI Models**: Powered by OpenAI GPT-4 for intelligent, context-aware conversations
- **Real-time Streaming**: Instant responses with smooth streaming UI
- **Chat History**: Persistent conversation history with secure storage
- **Multi-turn Conversations**: Maintains context across multiple messages

### 🔐 Security & Privacy
- **Enterprise Security**: Bank-level encryption and security protocols
- **Privacy First**: Your data stays yours - no tracking, no selling
- **End-to-End Encryption**: Secure conversations protected at every level
- **Authentication**: Secure user authentication with NextAuth.js

### 🎨 Modern UI/UX
- **Beautiful Design**: Modern, responsive interface built with Tailwind CSS
- **Dark Mode**: Full dark mode support with system preference detection
- **Mobile Responsive**: Optimized for all devices and screen sizes
- **Accessible**: Built with accessibility in mind using Radix UI

### 📝 Additional Features
- **Code Understanding**: Advanced code comprehension with syntax highlighting
- **Markdown Support**: Rich text formatting with markdown rendering
- **Share Conversations**: Share your chats with unique shareable links
- **Blog Section**: Discover insights, updates, and best practices
- **Dashboard**: Explore features and capabilities

---

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library with Server Components
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development

### AI & Backend
- **[Vercel AI SDK](https://sdk.vercel.ai/)** - AI integration and streaming
- **[OpenAI](https://openai.com/)** - GPT-4 and other AI models
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication
- **[Vercel KV](https://vercel.com/storage/kv)** - Session storage and rate limiting

### UI Components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful component library
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI primitives
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

---

## 🚀 Installation

### Prerequisites

- **Node.js** 18+ and **pnpm** 8.6.3+
- **OpenAI API Key** ([Get one here](https://platform.openai.com/api-keys))
- **Vercel Account** (for deployment and KV storage)

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/ChatSecure.git
cd ChatSecure
```

### Step 2: Install Dependencies

```bash
pnpm install
```

### Step 3: Environment Variables

Create a `.env.local` file in the root directory:

```env
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4-turbo-preview

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here

# Vercel KV (Optional - for production)
KV_URL=your_vercel_kv_url
KV_REST_API_URL=your_vercel_kv_rest_api_url
KV_REST_API_TOKEN=your_vercel_kv_rest_api_token

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Generate NextAuth Secret:**
```bash
openssl rand -base64 32
```

### Step 4: Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📖 Usage

### Starting a Chat

1. Navigate to the home page
2. Type your message in the chat input
3. Press Enter or click Send
4. Watch as the AI streams its response in real-time

### Features

- **Chat History**: All conversations are automatically saved
- **Share Chats**: Click the share button to get a shareable link
- **Clear History**: Use the clear button to delete conversation history
- **Code Blocks**: AI responses with code are automatically formatted with syntax highlighting

### Dashboard

Visit `/dashboard` to explore:
- Feature overview
- Technology stack
- Capabilities
- Contact form for API key requests

### Blog

Visit `/blog` to read:
- Latest insights and updates
- Technical deep dives
- Best practices
- Security information

---

## 📁 Project Structure

```
ChatSecure/
├── app/                      # Next.js App Router pages
│   ├── (chat)/              # Chat routes
│   │   ├── chat/[id]/       # Individual chat pages
│   │   └── page.tsx         # Home/chat page
│   ├── api/                 # API routes
│   │   └── chat/            # Chat API endpoint
│   ├── blog/                # Blog page
│   ├── dashboard/           # Dashboard page
│   ├── sign-in/             # Sign in page
│   ├── sign-up/             # Sign up page
│   └── layout.tsx           # Root layout
├── components/               # React components
│   ├── ui/                  # shadcn/ui components
│   ├── chat.tsx             # Main chat component
│   ├── header.tsx           # Header component
│   └── ...
├── lib/                      # Utility functions
│   ├── chat/                # Chat-related utilities
│   ├── hooks/               # Custom React hooks
│   └── utils.ts             # General utilities
├── public/                   # Static assets
├── auth.ts                   # NextAuth configuration
├── middleware.ts             # Next.js middleware
└── package.json             # Dependencies
```

---

## 🔧 Available Scripts

```bash
# Development
pnpm dev              # Start development server with Turbo

# Production
pnpm build            # Build for production
pnpm start            # Start production server
pnpm preview          # Build and preview production build

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint errors
pnpm type-check       # TypeScript type checking
pnpm format:write     # Format code with Prettier
pnpm format:check     # Check code formatting

# Environment
pnpm check-env        # Verify environment variables
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ChatSecure)

### Environment Variables for Production

Make sure to set all environment variables in your Vercel project settings:
- `OPENAI_API_KEY`
- `NEXTAUTH_URL` (your production URL)
- `NEXTAUTH_SECRET`
- `KV_URL`, `KV_REST_API_URL`, `KV_REST_API_TOKEN` (for chat history)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all checks pass before submitting PR

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Vercel AI SDK](https://sdk.vercel.ai/) for AI integration
- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Next.js](https://nextjs.org/) for the amazing framework
- [OpenAI](https://openai.com/) for powerful AI models

---

## 📧 Contact & Support

- **Email**: support@chatsecure.com
- **Issues**: [GitHub Issues](https://github.com/yourusername/ChatSecure/issues)
- **Documentation**: [Coming Soon](/coming-soon)

---

<div align="center">

**Built with ❤️ using Next.js and OpenAI**

⭐ Star this repo if you find it helpful!

</div>
