'use client';

import { useEffect, useState } from 'react';
import config from '@/lib/config';
import { getEnv } from '@/lib/utils/env';

/**
 * Test page to validate that environment variables are correctly loaded
 * Only available in development mode for security reasons
 */
export default function EnvironmentTestPage() {
  // State to hold config values that are safe to display
  const [safeConfig, setSafeConfig] = useState<Record<string, any> | null>(null);
  // State to track if we're in development mode
  const [isDev, setIsDev] = useState<boolean>(false);
  
  useEffect(() => {
    const env = getEnv();
    setIsDev(env.APP_ENV === 'development');
    
    // Only in development mode, show a limited set of environment variables
    // Never expose secrets or connection strings
    if (env.APP_ENV === 'development') {
      setSafeConfig({
        // Environment info
        environment: config.environment,
        isDevelopment: config.isDevelopment,
        isProduction: config.isProduction,
        
        // URLs (safe to display, no secrets)
        appUrl: config.appUrl,
        apiBaseUrl: config.apiBaseUrl,
        authUrl: config.authUrl,
        
        // Feature flags
        features: config.features,
        
        // Display database type without connection details
        databaseType: 'PostgreSQL',
        hasAccelerateUrl: Boolean(env.PRISMA_ACCELERATE_URL),
      });
    }
  }, []);
  
  // Safety check - only render in development mode
  if (!isDev) {
    return (
      <div className="p-8 bg-red-50 rounded-lg">
        <h1 className="text-2xl font-bold text-red-800 mb-4">
          Environment Test - Not Available
        </h1>
        <p className="text-red-700">
          This page is only available in development mode for security reasons.
        </p>
      </div>
    );
  }
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Environment Configuration Test</h1>
      
      <div className="bg-green-50 p-4 rounded-md mb-8">
        <p className="text-green-700 font-semibold">
          ✅ Environment variables loaded successfully!
        </p>
      </div>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Environment</h2>
          <div className="bg-gray-50 p-4 rounded-md">
            <pre className="whitespace-pre-wrap">
              {safeConfig ? JSON.stringify(safeConfig, null, 2) : 'Loading...'}
            </pre>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">Environment Files</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="ml-4">
              <code className="bg-gray-100 px-2 py-1 rounded">.env.local</code> - 
              Local development variables (not in version control)
            </li>
            <li className="ml-4">
              <code className="bg-gray-100 px-2 py-1 rounded">.env.development</code> - 
              Development defaults
            </li>
            <li className="ml-4">
              <code className="bg-gray-100 px-2 py-1 rounded">.env.production</code> - 
              Production defaults
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
