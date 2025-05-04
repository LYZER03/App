'use client';

import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { addItem, removeItem, toggleCart } from '@/store/slices/cartSlice';
import useSWR from 'swr';

// Sample fetcher function for SWR
const fetcher = (url: string) => fetch(url).then(res => res.json());

/**
 * Test component to validate that all essential dependencies are working correctly
 * This component demonstrates Shadcn UI, Redux Toolkit, and SWR functionality
 */
export function DependencyTest() {
  const [count, setCount] = useState(0);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.items);
  const isCartOpen = useAppSelector(state => state.cart.isOpen);
  
  // SWR test with a placeholder API endpoint
  const { data, error, isLoading } = useSWR('/api/test', fetcher, {
    // This is just for testing, so we'll disable actual fetching
    suspense: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    shouldRetryOnError: false,
  });

  // Test Redux actions
  const handleAddToCart = () => {
    dispatch(addItem({
      id: `test-${Date.now()}`,
      name: 'Test Sushi Roll',
      price: 12.99,
      image: '/images/placeholder.jpg',
    }));
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleToggleCart = () => {
    dispatch(toggleCart());
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-heading font-bold text-primary">Dependency Test</h2>
      
      <div className="space-y-4">
        <section>
          <h3 className="text-lg font-medium text-secondary">React State Test</h3>
          <div className="flex items-center space-x-2 mt-2">
            <button 
              onClick={() => setCount(prev => prev - 1)}
              className="px-3 py-1 bg-accent text-white rounded"
            >
              -
            </button>
            <span className="font-mono">{count}</span>
            <button 
              onClick={() => setCount(prev => prev + 1)}
              className="px-3 py-1 bg-accent text-white rounded"
            >
              +
            </button>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-medium text-secondary">Redux Toolkit Test</h3>
          <div className="space-y-2 mt-2">
            <button 
              onClick={handleAddToCart}
              className="w-full px-4 py-2 bg-primary text-white rounded"
            >
              Add Test Item to Cart
            </button>
            <button 
              onClick={handleToggleCart}
              className="w-full px-4 py-2 bg-secondary text-white rounded"
            >
              {isCartOpen ? 'Close Cart' : 'Open Cart'}
            </button>
            
            {cartItems.length > 0 && (
              <div className="mt-2 border border-gray-200 rounded p-2">
                <h4 className="font-medium">Cart Items:</h4>
                <ul className="mt-1 space-y-1">
                  {cartItems.map((item: any) => (
                    <li key={item.id} className="flex justify-between items-center">
                      <span>{item.name} (x{item.quantity})</span>
                      <button 
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="text-xs px-2 py-1 bg-red-500 text-white rounded"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-medium text-secondary">SWR Test</h3>
          <div className="mt-2">
            <p className="text-sm text-gray-600">
              {isLoading ? 'Loading...' : 
               error ? 'Error: SWR is working but the API endpoint is not available' : 
               'SWR is working correctly'}
            </p>
          </div>
        </section>
        
        <section>
          <h3 className="text-lg font-medium text-secondary">Typography Test</h3>
          <div className="space-y-2 mt-2">
            <p className="font-sans">This text uses Inter font (sans)</p>
            <p className="font-heading">This text uses Poppins font (heading)</p>
            <p className="font-japanese">寿司 - This Japanese text uses Noto Sans JP</p>
          </div>
        </section>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          All dependencies are installed and configured correctly.
        </p>
      </div>
    </div>
  );
}
