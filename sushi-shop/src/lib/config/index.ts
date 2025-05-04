/**
 * Application configuration derived from environment variables
 * Centralizes configuration values and provides type-safe access
 */
import { getEnv } from '@/lib/utils/env';

// Configuration interface with application-wide settings
export interface AppConfig {
  // Environment and URLs
  environment: 'development' | 'staging' | 'production';
  isDevelopment: boolean;
  isProduction: boolean;
  appUrl: string;
  apiBaseUrl: string;
  
  // Database
  databaseUrl: string;
  
  // Authentication
  authUrl: string;
  
  // Feature flags
  features: {
    googleAuth: boolean;
    stripePayments: boolean;
    cloudinaryStorage: boolean;
  };
}

/**
 * Creates and returns the application configuration
 * Derived from environment variables and computed values
 */
export function createConfig(): AppConfig {
  const env = getEnv();
  
  return {
    // Environment and URLs
    environment: env.APP_ENV,
    isDevelopment: env.APP_ENV === 'development',
    isProduction: env.APP_ENV === 'production',
    appUrl: env.APP_URL,
    apiBaseUrl: env.API_BASE_URL,
    
    // Database
    databaseUrl: env.DATABASE_URL,
    
    // Authentication
    authUrl: env.NEXTAUTH_URL,
    
    // Feature flags based on available credentials
    features: {
      googleAuth: Boolean(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET),
      stripePayments: Boolean(env.STRIPE_PUBLIC_KEY && env.STRIPE_SECRET_KEY),
      cloudinaryStorage: Boolean(
        env.CLOUDINARY_CLOUD_NAME && 
        env.CLOUDINARY_API_KEY && 
        env.CLOUDINARY_API_SECRET
      ),
    }
  };
}

// Export singleton instance of application configuration
export const config = createConfig();

// Default export for easier imports
export default config;
