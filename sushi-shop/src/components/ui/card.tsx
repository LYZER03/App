import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Card component container
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

/**
 * Card header component
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

/**
 * Card title component
 */
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight font-heading",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

/**
 * Card description component
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

/**
 * Card content component
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

/**
 * Card footer component
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

/**
 * Product card component specifically designed for displaying products
 */
const ProductCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    imageSrc?: string;
    imageAlt?: string;
    title: string;
    price: string | number;
    description?: string;
    badges?: React.ReactNode;
    actions?: React.ReactNode;
  }
>(({ className, imageSrc, imageAlt, title, price, description, badges, actions, ...props }, ref) => (
  <Card
    ref={ref}
    className={cn("overflow-hidden transition-all hover:shadow-md", className)}
    {...props}
  >
    {imageSrc && (
      <div className="relative aspect-video overflow-hidden bg-slate-50">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageSrc})` }}
          role="img" 
          aria-label={imageAlt || title} 
        />
        {badges && (
          <div className="absolute top-2 left-2 z-10">
            {badges}
          </div>
        )}
      </div>
    )}
    <CardHeader className="p-4">
      <div className="flex justify-between items-start">
        <CardTitle className="text-lg">{title}</CardTitle>
        <div className="text-lg font-semibold text-primary">
          {typeof price === "number" ? `$${price.toFixed(2)}` : price}
        </div>
      </div>
      {description && (
        <CardDescription className="mt-2 line-clamp-2">
          {description}
        </CardDescription>
      )}
    </CardHeader>
    {actions && (
      <CardFooter className="p-4 pt-0 flex justify-end gap-2">
        {actions}
      </CardFooter>
    )}
  </Card>
));
ProductCard.displayName = "ProductCard";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  ProductCard,
};
