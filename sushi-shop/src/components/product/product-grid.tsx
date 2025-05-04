import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * ProductGrid component
 * 
 * A responsive grid layout for displaying product cards
 * Supports different column configurations for each breakpoint
 */
interface ProductGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The number of columns on mobile devices (default: 1)
   */
  columnsSm?: number;
  /**
   * The number of columns on tablet devices (default: 2)
   */
  columnsMd?: number;
  /**
   * The number of columns on desktop devices (default: 3)
   */
  columnsLg?: number;
  /**
   * The number of columns on large desktop devices (default: 4)
   */
  columnsXl?: number;
  /**
   * The gap between grid items (default: 6 - corresponds to Tailwind's gap-6)
   */
  gap?: number;
}

export function ProductGrid({
  children,
  className,
  columnsSm = 1,
  columnsMd = 2,
  columnsLg = 3,
  columnsXl = 4,
  gap = 6,
  ...props
}: ProductGridProps) {
  return (
    <div
      className={cn(
        "grid",
        `grid-cols-${columnsSm}`,
        `md:grid-cols-${columnsMd}`,
        `lg:grid-cols-${columnsLg}`,
        `xl:grid-cols-${columnsXl}`,
        `gap-${gap}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
