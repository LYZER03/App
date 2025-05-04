"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Product } from "@/types/product";
import { ProductDetails } from "@/components/product";

interface ProductPageClientProps {
  product: Product;
}

export function ProductPageClient({ product }: ProductPageClientProps) {
  const router = useRouter();
  
  // Mock add to cart function for demo purposes
  const handleAddToCart = (product: any, quantity: number) => {
    console.log(`Added ${quantity} × ${product.name} to cart`);
    // Here we would dispatch an action to add the item to the cart
    alert(`Added ${quantity} × ${product.name} to the cart!`);
  };
  
  return (
    <div className="space-y-6">
      {/* Back button */}
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="flex items-center gap-1"
      >
        <ChevronLeft className="h-4 w-4" />
        Back
      </Button>
      
      {/* Product Details with client-side interactivity */}
      <ProductDetails 
        product={product} 
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
