import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

// Export actions
export const {
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
  toggleCart,
  setCartOpen,
  setLoading,
} = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
