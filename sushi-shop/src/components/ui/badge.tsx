import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Badge variants using class-variance-authority for type-safe styling
 */
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        accent:
          "border-transparent bg-accent text-white hover:bg-accent/80",
        outline: "text-foreground",
        success: "border-transparent bg-green-500 text-white hover:bg-green-500/80",
        warning: "border-transparent bg-yellow-500 text-white hover:bg-yellow-500/80",
        danger: "border-transparent bg-red-500 text-white hover:bg-red-500/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

/**
 * Additional food-specific badge variants for dietary information
 */
const foodBadgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        vegan: "border-transparent bg-green-600 text-white hover:bg-green-600/80",
        vegetarian: "border-transparent bg-green-500 text-white hover:bg-green-500/80",
        glutenFree: "border-transparent bg-amber-500 text-white hover:bg-amber-500/80",
        spicy: "border-transparent bg-red-500 text-white hover:bg-red-500/80",
      },
    },
    defaultVariants: {
      variant: "vegan",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  variant?: 'default' | 'secondary' | 'accent' | 'outline' | 'success' | 'warning' | 'danger';
}

export interface FoodBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof foodBadgeVariants> {
  variant?: 'vegan' | 'vegetarian' | 'glutenFree' | 'spicy';
}

/**
 * Badge component for general tags and labels
 */
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

/**
 * FoodBadge component specific for dietary information
 */
function FoodBadge({ className, variant, ...props }: FoodBadgeProps) {
  return (
    <div className={cn(foodBadgeVariants({ variant }), className)} {...props} />
  );
}

/**
 * Allergen badge component specifically for food allergen information
 */
function AllergenBadge({
  allergen,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { allergen: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-red-200 bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-700 transition-colors",
        className
      )}
      {...props}
    >
      {allergen}
    </div>
  );
}

export { Badge, FoodBadge, AllergenBadge, badgeVariants, foodBadgeVariants };
