/**
 * Test file for environment variable validation
 * 
 * This file tests that environment variables are correctly loaded and validated
 * Run with: npm test -- env.test.ts
 */
import { getEnv, validateEnv, type ValidatedEnv } from '../utils/env';

describe('Environment Variable Validation', () => {
  const originalEnv = process.env;
  
  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
    
    // Setup minimum required environment variables for tests
    process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test_db';
    process.env.NEXTAUTH_URL = 'http://localhost:3000';
    process.env.NEXTAUTH_SECRET = 'test_secret';
    process.env.API_BASE_URL = 'http://localhost:3000/api';
    process.env.APP_ENV = 'development';
    process.env.APP_URL = 'http://localhost:3000';
  });
  
  afterAll(() => {
    process.env = originalEnv;
  });
  
  test('validateEnv returns all required environment variables', () => {
    const env = validateEnv();
    
    // Check that all required variables are present
    expect(env.DATABASE_URL).toBe('postgresql://test:test@localhost:5432/test_db');
    expect(env.NEXTAUTH_URL).toBe('http://localhost:3000');
    expect(env.NEXTAUTH_SECRET).toBe('test_secret');
    expect(env.API_BASE_URL).toBe('http://localhost:3000/api');
    expect(env.APP_ENV).toBe('development');
    expect(env.APP_URL).toBe('http://localhost:3000');
  });
  
  test('validateEnv throws error if required environment variables are missing', () => {
    // Remove a required environment variable
    delete process.env.DATABASE_URL;
    
    // Expect validation to throw an error
    expect(() => validateEnv()).toThrow('Missing required environment variables: DATABASE_URL');
  });
  
  test('getEnv returns the same instance on multiple calls', () => {
    const env1 = getEnv();
    const env2 = getEnv();
    
    // Should return the same instance (singleton pattern)
    expect(env1).toBe(env2);
  });
  
  test('environment variables can be loaded for different environments', () => {
    // Test development environment
    process.env.APP_ENV = 'development';
    let env = validateEnv();
    expect(env.APP_ENV).toBe('development');
    
    // Test staging environment
    process.env.APP_ENV = 'staging';
    env = validateEnv();
    expect(env.APP_ENV).toBe('staging');
    
    // Test production environment
    process.env.APP_ENV = 'production';
    env = validateEnv();
    expect(env.APP_ENV).toBe('production');
  });
});
