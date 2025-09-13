# Visual Browser Marketing Website

AI-powered web testing platform with latest CUA models. Advanced browser automation with full media capture and intelligent visual analysis.

**Live Demo:** [FastAiDev.xyz](https://FastAiDev.xyz)

## 🚀 Features

- **AI Visual Analysis** - Powered by latest CUA models for intelligent web page analysis
- **Full Media Capture** - Complete video recordings, audio capture, and high-resolution screenshots
- **Export Everything** - Download all videos, audio, screenshots, and AI analysis reports
- **Early Access Signup** - Email collection system for launch notifications
- **Launch Special Pricing** - ~~$5/hour~~ → **$3/hour** special launch price

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with TypeScript
- **Database**: [PostgreSQL](https://www.postgresql.org/) with Drizzle ORM
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Email Collection**: Custom API endpoints with database integration
- **Deployment**: Optimized for Vercel

## 🏃‍♂️ Quick Start

```bash
git clone https://github.com/jeffersonwarrior/next-js-saas-starter
cd next-js-saas-starter
npm install
```

## 🔧 Development Setup

### Environment Variables

Create a `.env` file:

```bash
POSTGRES_URL=postgresql://your_db_url
BASE_URL=http://localhost:3000
AUTH_SECRET=your_random_secret
```

### Database Setup

```bash
npm run db:setup
npm run db:migrate
npm run db:seed
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the Visual Browser marketing site.

## 📊 Email Signup System

The website includes a functional email collection system:

- **API Endpoint**: `/api/signup` handles email submissions
- **Database Table**: `email_signups` stores leads with timestamps
- **Validation**: Email format validation and duplicate prevention
- **UI Feedback**: Success/error messages for user experience

## 🎯 Marketing Features

- **Strike-through Pricing** - Visual price reduction for urgency
- **Launch Special** - Limited-time offer messaging
- **GitHub Integration** - Direct link to MCP server installation
- **Developer Focus** - Technical positioning for AI/automation developers
- **Fast AI Dev Branding** - Clear publisher identification

## 🔗 Related Projects

- **MCP Server**: [Install Visual Browser MCP](https://github.com/fastaidev/visual-browser-mcp)
- **Publisher**: [Fast AI Development Company](https://FastAiDev.xyz)
- **Browser Testing Framework**: Located in `../browsertest`

## 🚀 Deploy to Production

### Vercel Deployment

1. Connect your GitHub repository to [Vercel](https://vercel.com/)
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main

### Environment Variables for Production

```bash
POSTGRES_URL=your_production_db_url
BASE_URL=https://your-domain.com
AUTH_SECRET=your_secure_random_string
```

## 📝 License

MIT License - Built on Next.js SaaS Starter template

---

**Visual Browser** - Advanced AI web testing platform  
*Developed by Fast AI Development Company*