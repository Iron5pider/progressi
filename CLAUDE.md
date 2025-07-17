# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Progressi is the Helix CMS (Content Management System) for Team Helix's weather data collection drone project. It's a modern web application built with:

- **Next.js 15.4.2** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component library
- **Lucide React** - Icon library

## Architecture Overview

The project follows Next.js 15 App Router structure with:
- Server and Client Components separation
- Modern React patterns (Server Components by default)
- Tailwind CSS for styling with a custom design system
- Radix UI primitives for accessible components

## Key Commands

```bash
# Development (uses Turbopack for fast refresh)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## Project Structure

```
progressi/
├── app/                      # Next.js App Router pages and layouts
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Dashboard home page
│   ├── content/             # Content management section
│   ├── team/                # Team management
│   ├── knowledge-base/      # Documentation and resources
│   ├── flight-data/         # Flight data management
│   ├── weather/             # Weather analysis
│   ├── analytics/           # Data analytics
│   └── settings/            # Application settings
├── components/              # React components
│   ├── ui/                  # Base UI components (buttons, cards, etc.)
│   └── navigation/          # Navigation components
├── lib/                     # Utility functions and shared code
├── public/                  # Static assets
└── styles/                  # Global styles and Tailwind config
```

## Key Features

1. **Real-time Dashboard** - Overview of drone operations and weather data
2. **Flight Data Management** - Track and analyze flight missions
3. **Weather Analysis** - Weather data visualization and forecasting
4. **Team Collaboration** - Team member management and permissions
5. **Knowledge Base** - Documentation and resource management
6. **Analytics Dashboard** - Data insights and reporting
7. **Content Management** - Manage drone-related content and media

## Component Architecture

### UI Components (`components/ui/`)
- Built on Radix UI primitives
- Styled with Tailwind CSS using `cn()` utility
- Follows consistent design system with CSS variables

### Page Structure
- Each route has its own directory under `app/`
- Uses `page.tsx` for route components
- Implements loading states and error boundaries

### Styling Approach
- Tailwind CSS with custom configuration
- CSS variables for theming (see `app/globals.css`)
- Component variants using `class-variance-authority`

## Development Guidelines

### TypeScript Configuration
- Strict type checking enabled
- Path aliases configured (@/* for root imports)
- Next.js types included

### Component Patterns
```tsx
// Use server components by default
export default function Component() { }

// Mark client components explicitly
"use client"
export default function InteractiveComponent() { }
```

### Tailwind Classes
- Use `cn()` utility from `lib/utils` for conditional classes
- Follow existing color scheme using CSS variables
- Maintain consistent spacing and sizing

## Routes and Features

- `/` - Dashboard with real-time overview
- `/content` - Content management for drone media
- `/team` - Team member management
- `/knowledge-base` - Documentation hub
- `/flight-data` - Flight logs and analysis
- `/weather` - Weather monitoring and forecasts
- `/analytics` - Data visualization and insights
- `/settings` - Application configuration

## Navigation Structure

The main navigation is implemented in `components/navigation/MainNav.tsx` with:
- Sidebar navigation for desktop
- Responsive design for mobile
- Active route highlighting
- Icon-based navigation items

## Important Notes

1. The project uses Next.js 15's App Router - all pages are in the `app/` directory
2. Turbopack is configured for faster development builds
3. ESLint is configured with Next.js recommended rules
4. The project includes a modern dashboard UI with cards, charts, and data tables
5. All UI components are built with accessibility in mind using Radix UI