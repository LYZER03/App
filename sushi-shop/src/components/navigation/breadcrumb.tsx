import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Array of breadcrumb items to display in the navigation
   */
  items: BreadcrumbItem[];
  /**
   * Whether to show the home icon for the first item
   * @default true
   */
  showHomeIcon?: boolean;
  /**
   * Icon to use as the separator between items
   * @default ChevronRight
   */
  separator?: React.ReactNode;
}

/**
 * Breadcrumb navigation component
 * 
 * Displays a breadcrumb trail of pages to help users navigate the hierarchy
 * @example
 * ```tsx
 * <Breadcrumb
 *   items={[
 *     { label: "Home", href: "/" },
 *     { label: "Menu", href: "/menu" },
 *     { label: "Sushi", href: "/menu/sushi", current: true },
 *   ]}
 * />
 * ```
 */
export function Breadcrumb({
  items,
  showHomeIcon = true,
  separator = <ChevronRight className="h-4 w-4 text-muted-foreground mx-2 flex-shrink-0" />,
  className,
  ...props
}: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("", className)} {...props}>
      <ol className="flex flex-wrap items-center text-sm">
        {items.map((item, index) => {
          // Determine if this is the last item
          const isLastItem = index === items.length - 1;
          
          return (
            <li 
              key={item.href + index} 
              className={cn(
                "flex items-center",
                isLastItem ? "text-foreground font-medium" : "text-muted-foreground"
              )}
            >
              {index === 0 && showHomeIcon ? (
                <Link
                  href={item.href}
                  className="flex items-center hover:text-primary"
                  aria-current={item.current ? "page" : undefined}
                >
                  <Home className="h-4 w-4 mr-1" />
                  <span className="sr-only md:not-sr-only">{item.label}</span>
                </Link>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "hover:text-primary",
                    item.current ? "cursor-default hover:text-foreground" : ""
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.label}
                </Link>
              )}
              
              {!isLastItem && separator}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
