"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Eye } from "lucide-react";
import { Product } from "@/types/product";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge, FoodBadge } from "@/components/ui/badge";
import { ProductCard as BaseProductCard } from "@/components/ui/card";

/**
 * Enhanced ProductCard component specifically for displaying product data
 * Builds upon the base ProductCard from the UI kit and adds more functionality
 */
export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
  showQuickView?: boolean;
  showAddToCart?: boolean;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  imageSize?: "contain" | "cover";
  onAddToCart?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
}

export function ProductCard({
  product,
  className,
  showQuickView = true,
  showAddToCart = true,
  aspectRatio = "square",
  imageSize = "cover",
  onAddToCart,
  onQuickView,
  ...props
}: ProductCardProps) {
  // Handle the add to cart action
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  // Handle the quick view action
  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) {
      onQuickView(product);
    }
  };

  // Generate badges based on product properties
  const badges = (
    <div className="flex flex-wrap gap-1">
      {product.isNew && <Badge variant="secondary">New</Badge>}
      {product.isPopular && <Badge variant="secondary">Popular</Badge>}
      {product.isFeatured && <Badge variant="secondary">Featured</Badge>}
      
      {product.isVegetarian && <FoodBadge variant="vegetarian">Vegetarian</FoodBadge>}
      {product.isGlutenFree && <FoodBadge variant="glutenFree">Gluten Free</FoodBadge>}
      {product.isSpicy && <FoodBadge variant="spicy">Spicy</FoodBadge>}
    </div>
  );

  // Generate action buttons
  const actions = (
    <>
      {showQuickView && (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleQuickView}
          title="Quick view"
        >
          <Eye className="h-4 w-4 mr-1" /> Quick View
        </Button>
      )}
      {showAddToCart && (
        <Button 
          size="sm" 
          onClick={handleAddToCart}
          title="Add to cart"
        >
          <ShoppingCart className="h-4 w-4 mr-1" /> Add to Cart
        </Button>
      )}
    </>
  );

  // Map aspectRatio to className
  const aspectRatioClass = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/9]",
  };

  // Map imageSize to className
  const imageSizeClass = {
    contain: "object-contain",
    cover: "object-cover",
  };

  return (
    <div className={cn("relative", className)} {...props}>
      <BaseProductCard
        title={product.name}
        price={product.price}
        description={product.description}
        imageSrc={product.imageUrl}
        imageAlt={product.name}
        badges={badges}
        actions={actions}
        className="h-full"
      />
      
      {/* Wrap the entire card in a Link, excluding the action buttons */}
      <Link 
        href={`/menu/product/${product.id}`} 
        className="absolute inset-0 z-0"
        aria-label={`View details for ${product.name}`}
      />
    </div>
  );
}
