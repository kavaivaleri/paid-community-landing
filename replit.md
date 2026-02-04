# Alexey's Technical Community

A Next.js 16 landing page for a paid technical community targeting experienced engineers and technical leads in AI, ML, and data systems.

## Overview

This is a modern landing page built with:
- **Next.js 16** with App Router and Turbopack
- **React 19**
- **TypeScript**
- **Tailwind CSS 4** with shadcn/ui components
- **Radix UI** for accessible components

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   │   └── button.tsx    # Button component
│   ├── hero-section.tsx
│   ├── what-happens-section.tsx
│   ├── difference-section.tsx
│   ├── tiers-section.tsx
│   ├── constraints-section.tsx
│   ├── cta-section.tsx
│   └── footer.tsx
├── lib/                   # Utility functions
│   └── utils.ts          # cn() helper for Tailwind
└── public/               # Static assets
```

## Development

The app runs on port 5000 in development mode:

```bash
pnpm run dev
```

## Build & Production

```bash
pnpm run build
pnpm run start
```

## Configuration

- `next.config.mjs` - Next.js configuration with allowed dev origins for Replit
- `tsconfig.json` - TypeScript configuration with path alias `@/` for root imports
- `tailwind.config.ts` - Tailwind CSS configuration (if present)
