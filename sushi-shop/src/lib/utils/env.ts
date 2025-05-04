/**
 * Environment variable validation utility
 * Ensures required environment variables are present before starting the application
 */

// Define the shape of our validated environment variables
export interface ValidatedEnv {
  // Database
  DATABASE_URL: string;
  PRISMA_ACCELERATE_URL?: string;
  
  // Authentication
  NEXTAUTH_URL: string;
  NEXTAUTH_SECRET: string;
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_CLIENT_SECRET?: string;
  
  // API
  API_BASE_URL: string;
  
  // Services
  CLOUDINARY_CLOUD_NAME?: string;
  CLOUDINARY_API_KEY?: string;
  CLOUDINARY_API_SECRET?: string;
  
  // Stripe for payments
  STRIPE_PUBLIC_KEY?: string;
  STRIPE_SECRET_KEY?: string;
  STRIPE_WEBHOOK_SECRET?: string;
  
  // Application
  APP_ENV: 'development' | 'staging' | 'production';
  APP_URL: string;
}

/**
 * Validates required environment variables
 * Throws an error if any required variables are missing
 */
export function validateEnv(): ValidatedEnv {
  const requiredEnvVars = [
    'DATABASE_URL',
    'NEXTAUTH_URL',
    'NEXTAUTH_SECRET',
    'API_BASE_URL',
    'APP_ENV',
    'APP_URL'
  ];
  
  const missingEnvVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  );
  
  if (missingEnvVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingEnvVars.join(', ')}`
    );
  }
  
  return {
    // Database
    DATABASE_URL: process.env.DATABASE_URL!,
    PRISMA_ACCELERATE_URL: process.env.PRISMA_ACCELERATE_URL,
    
    // Authentication
    NEXTAUTH_URL: process.env.NEXTAUTH_URL!,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET!,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    
    // API
    API_BASE_URL: process.env.API_BASE_URL!,
    
    // Services
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    
    // Stripe for payments
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    
    // Application
    APP_ENV: process.env.APP_ENV as ValidatedEnv['APP_ENV'],
    APP_URL: process.env.APP_URL!
  };
}

// Singleton pattern for validated environment variables
let validatedEnv: ValidatedEnv | null = null;

/**
 * Gets the validated environment variables
 * Uses a singleton pattern to avoid validating multiple times
 */
export function getEnv(): ValidatedEnv {
  if (!validatedEnv) {
    validatedEnv = validateEnv();
  }
  return validatedEnv;
}
