import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Define types for the cart state
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  loading: boolean;
}

// Initial state
const initialState: CartState = {
  items: [],
  isOpen: false,
  loading: false,
};

/**
 * Cart slice for managing shopping cart state
 * Includes actions for adding, removing, updating items and toggling cart visibility
 */
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart (or increase quantity if it exists)
    addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    
    // Remove item from cart
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    
    // Update item quantity
    updateQuantity: (
      state, 
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        item.quantity = Math.max(1, quantity); // Ensure quantity is at least 1
      }
    },
    
    // Clear all items from cart
    clearCart: (state) => {
      state.items = [];
    },
    
    // Toggle cart visibility
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    
    // Set cart visibility explicitly
    setCartOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    
    // Set loading state
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

// Export cart actions
export const {
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
  toggleCart,
  setCartOpen,
  setLoading,
} = cartSlice.actions;

// Get cart reducer
const cartReducer = cartSlice.reducer;

/**
 * Configure the Redux store with all reducers
 */
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add more reducers here as needed
  },
  // Add middleware or other store enhancers here
  devTools: process.env.NODE_ENV !== 'production',
});

// Export types for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create typed hooks for use throughout the app
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
