# Sushi Shop Clone Architecture Documentation

## Overview

This document outlines the architectural design of the Sushi Shop Clone platform, detailing the structure, organization, and relationships between different components of the system.

## Technology Stack

- **Frontend**: Next.js 15.3.1 with TypeScript, React 18+, Tailwind CSS
- **State Management**: Redux Toolkit, Context API, SWR for server state
- **UI Components**: Shadcn UI for accessible components
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with Google OAuth
- **API**: Next.js API routes with NestJS principles
- **Deployment**: Vercel for frontend, Railway/Render for backend services

## Project Structure

### Root Directory Structure

```
sushi-shop/
├── src/
│   ├── app/           # App Router pages and layouts
│   ├── components/    # Reusable components
│   ├── lib/          # Utility functions and services
│   ├── store/        # Redux state management
│   └── types/        # TypeScript type definitions
├── public/           # Static assets
├── next.config.js    # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json     # TypeScript configuration
└── package.json      # Dependencies and scripts
```

## Core Components

### Next.js App Router

The application leverages Next.js App Router, which provides several key architectural benefits:

- **Server Components**: Reduces client-side JavaScript and improves performance
- **Nested Layouts**: Enables sharing UI between routes while preserving state
- **Loading States**: Built-in loading UI for improved user experience
- **Route Handlers**: API endpoints defined alongside UI components
- **Server Actions**: Form handling directly from server components

### TypeScript Integration

TypeScript provides static type checking throughout the application, enhancing code quality through:

- **Type Safety**: Preventing runtime errors through compile-time checks
- **Improved Developer Experience**: Better autocompletion and documentation
- **Maintainability**: Self-documenting code with explicit interfaces
- **Refactoring Support**: Safer code refactoring with immediate feedback

### File Organization Principles

The project follows these organizational principles:

1. **Feature-based Organization**: Components, hooks, and utilities are organized by feature when possible
2. **Component Categorization**: UI components are separated into atomic, shared, and feature-specific
3. **Path Aliases**: Using `@/` aliases for clean imports
4. **Component Co-location**: Tests, styles, and types are kept close to related components

## Updated Components (May 4, 2025)

### Next.js Project Initialization

The initial project setup includes:

- **Project Configuration**: Basic Next.js project with TypeScript, ESLint, and Tailwind CSS
- **Development Environment**: Development server running on port 3000

### Core Project Files

#### Configuration Files
- `package.json`: Defines project dependencies and scripts
  - Contains core dependencies like Next.js, React, and TypeScript
  - Scripts for development, building, and linting

- `tsconfig.json`: TypeScript configuration
  - Path aliases setup with `@/*` for clean imports
  - Strict type checking enabled
  - Target ES6 for modern JavaScript features

- `next.config.js`: Next.js framework configuration
  - Currently using minimal configuration
  - Will be expanded for custom routing, image optimization, etc.

- `tailwind.config.ts`: Tailwind CSS configuration
  - Default color palette (to be customized with sushi shop colors)
  - Content paths configured to scan all relevant files
  - Core plugins enabled for responsive design

- `.eslintrc.json`: ESLint rules for code quality
  - Enforces Next.js recommended practices
  - TypeScript-specific rules for type safety

#### Application Files
- `src/app/page.tsx`: Main entry point (home page)
  - Server Component by default
  - Will host the landing page content

- `src/app/layout.tsx`: Root layout component
  - Wraps all pages with common UI elements
  - Configures HTML metadata and global styles
  - Sets up font loading and viewport settings

- `src/app/globals.css`: Global style definitions
  - Imports Tailwind utility classes
  - Will contain custom CSS variables and global styles

#### Public Assets
- `public/`: Directory for static assets
  - Will contain images, icons, and other static files
  - Directly accessible through URL paths

#### Generated Directories
- `node_modules/`: Contains installed dependencies
- `.next/`: Build output directory (not committed to version control)

## Planned Architecture Evolution

As development progresses, this architecture document will be updated to include:

1. **Database Schema**: Implementation of PostgreSQL with Prisma models
2. **State Management Flow**: Redux store organization with slices and actions
3. **API Endpoints**: Documentation of server-side APIs
4. **Authentication Flow**: NextAuth.js implementation details
5. **Data Fetching Strategy**: SWR hooks and caching mechanisms
6. **Component Library**: Shadcn UI component customizations