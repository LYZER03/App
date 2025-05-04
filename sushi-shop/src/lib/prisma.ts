import { PrismaClient } from '@prisma/client';
import { getEnv } from '@/lib/utils/env';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

// Declare global variable to avoid TypeScript errors
declare global {
  var prisma: PrismaClient | undefined;
}

// Get validated environment variables
const env = getEnv();

// Initialize Prisma Client with the validated DATABASE_URL
export const prisma = global.prisma || new PrismaClient({
  log: env.APP_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  datasources: {
    db: {
      url: env.DATABASE_URL,
    },
  },
});

// If we're not in production, attach to global object for better hot-reloading experience
if (env.APP_ENV !== 'production') global.prisma = prisma;

export default prisma;
