import * as React from "react";
import Image from "next/image";
import { ShoppingCart, Heart, Share2, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge, FoodBadge, AllergenBadge } from "@/components/ui/badge";
import { type Product } from "@/components/product/product-card";
import { H2, H3, P, Japanese, Large, Small, Muted } from "@/components/ui/typography";

/**
 * ProductDetails component props
 */
export interface ProductDetailsProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The product to display details for
   */
  product: Product & {
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
  /**
   * Function to format prices 
   */
  formatPrice?: (price: number) => string;
}

/**
 * ProductDetails component
 * 
 * Displays full details for a single product including:
 * - Gallery of images
 * - Product name, price, description
 * - Dietary information and allergens
 * - Ingredients list
 * - Nutritional information
 * - Add to cart functionality with quantity selector
 */
export function ProductDetails({
  product,
  className,
  onAddToCart,
  formatPrice = (price) => `$${price.toFixed(2)}`,
  ...props
}: ProductDetailsProps) {
  // State for managing the selected quantity
  const [quantity, setQuantity] = React.useState(1);
  // State for tracking the main image (first image or provided imageUrl)
  const [mainImage, setMainImage] = React.useState<string>(
    product.images?.[0] || product.imageUrl || "/images/placeholder.jpg"
  );

  // Handle quantity changes
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  
  // Handle add to cart
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product, quantity);
    }
  };

  // Render the rating stars
  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              "h-4 w-4",
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            )}
          />
        ))}
        <span className="ml-2 text-sm text-muted-foreground">
          ({product.reviewCount || 0} reviews)
        </span>
      </div>
    );
  };

  return (
    <div className={cn("grid gap-8 md:grid-cols-2", className)} {...props}>
      {/* Product Images */}
      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-lg border bg-slate-50">
          <div className="aspect-square w-full relative">
            {mainImage && (
              <Image
                src={mainImage}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            )}
          </div>
        </div>

        {/* Image Gallery */}
        {product.images && product.images.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={cn(
                  "relative aspect-square overflow-hidden rounded-md border",
                  mainImage === image && "ring-2 ring-primary ring-offset-2"
                )}
                onClick={() => setMainImage(image)}
              >
                <Image
                  src={image}
                  alt={`${product.name} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 10vw"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="space-y-6">
        {/* Title and Rating */}
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <H2>{product.name}</H2>
            <Button variant="ghost" size="icon" className="rounded-full" title="Add to wishlist">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
          
          {product.category && (
            <Small className="text-muted-foreground">
              {product.category.name}
            </Small>
          )}
          
          {product.rating && renderRating(product.rating)}
        </div>

        {/* Price and Add to Cart */}
        <div className="space-y-4">
          <Large className="text-2xl font-bold text-primary">
            {formatPrice(product.price)}
          </Large>

          <div className="flex items-center space-x-4">
            <div className="flex items-center rounded-md border">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-none"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-none"
                onClick={increaseQuantity}
              >
                +
              </Button>
            </div>

            <Button onClick={handleAddToCart} className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>

            <Button variant="outline" size="icon" title="Share">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Description */}
        {product.description && (
          <div className="space-y-2">
            <H3 className="text-lg">Description</H3>
            <P>{product.description}</P>
          </div>
        )}

        {/* Dietary Information */}
        <div className="space-y-2">
          <H3 className="text-lg">Dietary Information</H3>
          <div className="flex flex-wrap gap-2">
            {product.isVegetarian && <FoodBadge variant="vegetarian">Vegetarian</FoodBadge>}
            {product.isGlutenFree && <FoodBadge variant="glutenFree">Gluten Free</FoodBadge>}
            {product.isSpicy && <FoodBadge variant="spicy">Spicy</FoodBadge>}
            {!product.isVegetarian && !product.isGlutenFree && !product.isSpicy && (
              <Muted>No specific dietary information</Muted>
            )}
          </div>
        </div>

        {/* Allergens */}
        {product.allergens && product.allergens.length > 0 && (
          <div className="space-y-2">
            <H3 className="text-lg">Allergens</H3>
            <div className="flex flex-wrap gap-2">
              {product.allergens.map((allergen) => (
                <AllergenBadge key={allergen} allergen={allergen} />
              ))}
            </div>
          </div>
        )}

        {/* Ingredients */}
        {product.ingredients && product.ingredients.length > 0 && (
          <div className="space-y-2">
            <H3 className="text-lg">Ingredients</H3>
            <P>
              {product.ingredients.map((ingredient, index) => (
                <React.Fragment key={ingredient}>
                  {index > 0 && ", "}
                  {ingredient}
                </React.Fragment>
              ))}
            </P>
          </div>
        )}

        {/* Nutritional Info */}
        {product.nutritionalInfo && (
          <div className="space-y-2">
            <H3 className="text-lg">Nutritional Information</H3>
            <div className="grid grid-cols-4 gap-2">
              {product.nutritionalInfo.calories !== undefined && (
                <div className="rounded-md border p-2 text-center">
                  <Small className="text-muted-foreground">Calories</Small>
                  <div className="font-semibold">{product.nutritionalInfo.calories}</div>
                </div>
              )}
              {product.nutritionalInfo.protein !== undefined && (
                <div className="rounded-md border p-2 text-center">
                  <Small className="text-muted-foreground">Protein</Small>
                  <div className="font-semibold">{product.nutritionalInfo.protein}g</div>
                </div>
              )}
              {product.nutritionalInfo.carbs !== undefined && (
                <div className="rounded-md border p-2 text-center">
                  <Small className="text-muted-foreground">Carbs</Small>
                  <div className="font-semibold">{product.nutritionalInfo.carbs}g</div>
                </div>
              )}
              {product.nutritionalInfo.fat !== undefined && (
                <div className="rounded-md border p-2 text-center">
                  <Small className="text-muted-foreground">Fat</Small>
                  <div className="font-semibold">{product.nutritionalInfo.fat}g</div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
