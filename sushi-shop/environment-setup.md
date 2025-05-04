# Environment Configuration Guide

This document provides guidance on setting up environment variables for different deployment environments (development, staging, production) for the Sushi Shop application.

## Overview

The application requires specific environment variables to function correctly. These variables control database connections, authentication, API endpoints, and various service integrations.

## Required Environment Files

Create the following files in the root directory of the project:

1. `.env.local` - For local development (not committed to git)
2. `.env.development` - Development environment defaults (can be committed)
3. `.env.production` - Production environment defaults (can be committed)

## Environment Variables

Below are the environment variables required by the application:

### Database Configuration
```
# Required: PostgreSQL connection string
DATABASE_URL=postgresql://username:password@localhost:5432/sushi_shop_db

# Optional: Prisma Accelerate URL for improved performance
PRISMA_ACCELERATE_URL=your_prisma_accelerate_url
```

### Authentication Configuration
```
# Required: NextAuth.js configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_key

# Optional: Google OAuth credentials (for social login)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### API Configuration
```
# Required: Base URL for API endpoints
API_BASE_URL=http://localhost:3000/api
```

### Service Integrations
```
# Optional: Cloudinary for image storage
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Optional: Stripe for payment processing
STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

### Application Configuration
```
# Required: Environment name
APP_ENV=development  # or staging, production

# Required: Application URL
APP_URL=http://localhost:3000
```

## Environment-Specific Configuration

### Development (`.env.development`)
```
APP_ENV=development
APP_URL=http://localhost:3000
API_BASE_URL=http://localhost:3000/api
NEXTAUTH_URL=http://localhost:3000
```

### Staging (for staging deployment)
```
APP_ENV=staging
APP_URL=https://staging.sushi-shop-app.com
API_BASE_URL=https://staging.sushi-shop-app.com/api
NEXTAUTH_URL=https://staging.sushi-shop-app.com
```

### Production (`.env.production`)
```
APP_ENV=production
APP_URL=https://sushi-shop-app.com
API_BASE_URL=https://sushi-shop-app.com/api
NEXTAUTH_URL=https://sushi-shop-app.com
```

## Usage in Application

The application uses a centralized validation system for environment variables. This ensures all required variables are present before the application starts.

```typescript
import { getEnv } from '@/lib/utils/env';

// Access validated environment variables
const env = getEnv();
console.log(env.APP_ENV); // 'development', 'staging', or 'production'
```

## Security Considerations

1. **Never commit** `.env.local` or any file containing real secrets to version control
2. For production deployments, set environment variables through the hosting platform (Vercel, Railway, etc.)
3. Rotate secrets periodically and after team member departures
4. Use different secrets for different environments
