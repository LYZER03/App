'use client';

import { Provider } from 'react-redux';
import { store } from '@/store';

/**
 * Redux Provider component to wrap the application with Redux store
 * This enables state management throughout the application
 */
export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
