import * as React from "react";
import { ShoppingCart } from "lucide-react";

import { type Product } from "@/components/product/product-card";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ProductDetails } from "@/components/product/product-details";

/**
 * ProductQuickView component props
 */
export interface ProductQuickViewProps {
  /**
   * Whether the quick view is open
   */
  open: boolean;
  /**
   * Function to call when the quick view should be closed
   */
  onClose: () => void;
  /**
   * The product to display in the quick view
   */
  product?: Product & {
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
  };
  /**
   * Callback function when adding to cart
   */
  onAddToCart?: (product: Product, quantity: number) => void;
}

/**
 * ProductQuickView component
 * 
 * A dialog that displays product details in a quick view modal
 */
export function ProductQuickView({
  open,
  onClose,
  product,
  onAddToCart,
}: ProductQuickViewProps) {
  if (!product) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="2xl"
      title={product.name}
      footer={
        <>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button onClick={() => onAddToCart?.(product, 1)}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </>
      }
    >
      <div className="max-h-[70vh] overflow-y-auto pr-1">
        <ProductDetails 
          product={product} 
          onAddToCart={onAddToCart}
          className="md:grid-cols-1"
        />
      </div>
    </Dialog>
  );
}
