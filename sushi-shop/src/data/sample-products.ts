/**
 * Sample product data for development and testing purposes
 */
import { type Product } from "@/components/product/product-card";

// Extended product type with additional details
export interface ProductWithDetails extends Product {
  images?: string[];
  ingredients?: string[];
  allergens?: string[];
  nutritionalInfo?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
  };
  rating?: number;
  reviewCount?: number;
}

export const sampleProducts: ProductWithDetails[] = [
  {
    id: "1",
    name: "Salmon Nigiri",
    description: "Fresh salmon on a bed of seasoned rice. Served with wasabi and soy sauce.",
    price: 12.99,
    imageUrl: "/images/hero-sushi.jpg",
    category: {
      id: "sushi",
      name: "Sushi"
    },
    isPopular: true,
    ingredients: ["Salmon", "Sushi Rice", "Wasabi", "Soy Sauce"],
    allergens: ["Fish", "Soy"],
    nutritionalInfo: {
      calories: 220,
      protein: 12,
      carbs: 30,
      fat: 6
    },
    rating: 4.8,
    reviewCount: 124
  },
  {
    id: "2",
    name: "Tuna Sashimi",
    description: "Premium cuts of raw bluefin tuna. A delicacy for sashimi lovers.",
    price: 18.50,
    imageUrl: "/images/category-sashimi.jpg",
    category: {
      id: "sashimi",
      name: "Sashimi"
    },
    isFeatured: true,
    isGlutenFree: true,
    ingredients: ["Bluefin Tuna", "Daikon Radish", "Shiso Leaf", "Wasabi"],
    allergens: ["Fish"],
    nutritionalInfo: {
      calories: 180,
      protein: 32,
      carbs: 2,
      fat: 5
    },
    rating: 4.9,
    reviewCount: 87
  },
  {
    id: "3",
    name: "California Roll",
    description: "Crab, avocado and cucumber wrapped in seaweed and rice. Perfect for beginners.",
    price: 9.99,
    imageUrl: "/images/category-sushi.jpg",
    category: {
      id: "maki",
      name: "Maki Rolls"
    },
    isPopular: true,
    ingredients: ["Imitation Crab", "Avocado", "Cucumber", "Sushi Rice", "Nori", "Sesame Seeds"],
    allergens: ["Shellfish", "Sesame"],
    nutritionalInfo: {
      calories: 350,
      protein: 9,
      carbs: 45,
      fat: 14
    },
    rating: 4.5,
    reviewCount: 246
  },
  {
    id: "4",
    name: "Vegetable Tempura",
    description: "Assorted vegetables fried in a light, crispy batter. Served with tempura dipping sauce.",
    price: 10.99,
    imageUrl: "/images/vegetable-tempura.jpg",
    category: {
      id: "appetizers",
      name: "Appetizers"
    },
    isVegetarian: true,
    ingredients: ["Seasonal Vegetables", "Tempura Batter", "Dipping Sauce"],
    allergens: ["Wheat", "Soy"],
    nutritionalInfo: {
      calories: 320,
      protein: 5,
      carbs: 42,
      fat: 16
    },
    rating: 4.3,
    reviewCount: 78
  },
  {
    id: "5",
    name: "Spicy Tuna Roll",
    description: "Diced tuna mixed with spicy mayo and cucumber, wrapped in seaweed and rice.",
    price: 11.50,
    imageUrl: "/images/spicy-tuna-roll.jpg",
    category: {
      id: "maki",
      name: "Maki Rolls"
    },
    isSpicy: true,
    isPopular: true,
    ingredients: ["Tuna", "Spicy Mayo", "Cucumber", "Sushi Rice", "Nori", "Togarashi"],
    allergens: ["Fish", "Egg", "Soy"],
    nutritionalInfo: {
      calories: 380,
      protein: 15,
      carbs: 40,
      fat: 18
    },
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: "6",
    name: "Dragon Roll",
    description: "Eel and cucumber roll topped with avocado and eel sauce.",
    price: 14.99,
    imageUrl: "/images/dragon-roll.jpg",
    category: {
      id: "maki",
      name: "Maki Rolls"
    },
    isFeatured: true,
    ingredients: ["Eel", "Cucumber", "Avocado", "Sushi Rice", "Nori", "Eel Sauce"],
    allergens: ["Fish", "Soy"],
    nutritionalInfo: {
      calories: 410,
      protein: 16,
      carbs: 50,
      fat: 19
    },
    rating: 4.6,
    reviewCount: 112
  },
  {
    id: "7",
    name: "Vegan Avocado Roll",
    description: "Fresh avocado, cucumber and carrot wrapped in seaweed and rice.",
    price: 8.99,
    imageUrl: "/images/vegan-avocado-roll.jpg",
    category: {
      id: "maki",
      name: "Maki Rolls"
    },
    isVegetarian: true,
    isGlutenFree: true,
    isNew: true,
    ingredients: ["Avocado", "Cucumber", "Carrot", "Sushi Rice", "Nori"],
    nutritionalInfo: {
      calories: 280,
      protein: 4,
      carbs: 40,
      fat: 12
    },
    rating: 4.2,
    reviewCount: 45
  },
  {
    id: "8",
    name: "Salmon Poke Bowl",
    description: "Diced raw salmon, avocado, cucumber, edamame and carrots on a bed of sushi rice.",
    price: 15.99,
    imageUrl: "/images/salmon-poke-bowl.jpg",
    category: {
      id: "bowls",
      name: "Poke Bowls"
    },
    isGlutenFree: true,
    isNew: true,
    ingredients: ["Salmon", "Avocado", "Cucumber", "Edamame", "Carrots", "Sushi Rice", "Poke Sauce"],
    allergens: ["Fish", "Soy"],
    nutritionalInfo: {
      calories: 550,
      protein: 28,
      carbs: 60,
      fat: 22
    },
    rating: 4.8,
    reviewCount: 67
  }
];
