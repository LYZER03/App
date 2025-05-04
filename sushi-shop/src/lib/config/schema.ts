/**
 * Environment variable schema documentation
 * 
 * This file documents all environment variables used by the application
 * and provides types and validation rules for them.
 */

/**
 * Database environment variables
 */
export interface DatabaseEnvSchema {
  /**
   * PostgreSQL connection string
   * Format: postgresql://username:password@host:port/database
   * @required
   */
  DATABASE_URL: string;
  
  /**
   * Prisma Accelerate URL for improved performance
   * @optional
   */
  PRISMA_ACCELERATE_URL?: string;
}

/**
 * Authentication environment variables
 */
export interface AuthEnvSchema {
  /**
   * NextAuth.js URL, should match the application URL
   * @required
   */
  NEXTAUTH_URL: string;
  
  /**
   * Secret used to encrypt cookies and tokens
   * Generate with: `openssl rand -base64 32`
   * @required
   */
  NEXTAUTH_SECRET: string;
  
  /**
   * Google OAuth client ID
   * Obtain from Google Cloud Console
   * @optional
   */
  GOOGLE_CLIENT_ID?: string;
  
  /**
   * Google OAuth client secret
   * Obtain from Google Cloud Console
   * @optional
   */
  GOOGLE_CLIENT_SECRET?: string;
}

/**
 * API environment variables
 */
export interface ApiEnvSchema {
  /**
   * Base URL for API endpoints
   * @required
   */
  API_BASE_URL: string;
}

/**
 * Storage service environment variables
 */
export interface StorageEnvSchema {
  /**
   * Cloudinary cloud name
   * @optional
   */
  CLOUDINARY_CLOUD_NAME?: string;
  
  /**
   * Cloudinary API key
   * @optional
   */
  CLOUDINARY_API_KEY?: string;
  
  /**
   * Cloudinary API secret
   * @optional
   */
  CLOUDINARY_API_SECRET?: string;
}

/**
 * Payment service environment variables
 */
export interface PaymentEnvSchema {
  /**
   * Stripe public key
   * @optional
   */
  STRIPE_PUBLIC_KEY?: string;
  
  /**
   * Stripe secret key
   * @optional
   */
  STRIPE_SECRET_KEY?: string;
  
  /**
   * Stripe webhook secret for event validation
   * @optional
   */
  STRIPE_WEBHOOK_SECRET?: string;
}

/**
 * Application environment variables
 */
export interface AppEnvSchema {
  /**
   * Environment name
   * @required
   */
  APP_ENV: 'development' | 'staging' | 'production';
  
  /**
   * Application URL
   * @required
   */
  APP_URL: string;
}

/**
 * Combined environment variable schema
 */
export type EnvSchema = 
  & DatabaseEnvSchema 
  & AuthEnvSchema 
  & ApiEnvSchema 
  & StorageEnvSchema 
  & PaymentEnvSchema 
  & AppEnvSchema;

/**
 * Required environment variables that must be present
 */
export const REQUIRED_ENV_VARS: Array<keyof EnvSchema> = [
  'DATABASE_URL',
  'NEXTAUTH_URL',
  'NEXTAUTH_SECRET',
  'API_BASE_URL',
  'APP_ENV',
  'APP_URL'
];
