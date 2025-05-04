/**
 * Product type definitions for the Sushi Shop application
 */

// Basic product interface
export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  category?: {
    id: string;
    name: string;
  };
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  isSpicy?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  isPopular?: boolean;
}

// Extended product interface with detailed information
export interface ProductWithDetails extends Product {
  images?: string[];
  ingredients?: string[];
  allergens?: string[];
  nutritionalInfo?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
    sodium?: number;
  };
  preparation?: string;
  servingSize?: string;
  rating?: number;
  reviewCount?: number;
}

export type ProductCategory = {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
};
