"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * Navigation item interface
 */
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavItem[];
  description?: string;
}

/**
 * MainNav props
 */
export interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Navigation items to display in the main navigation
   */
  items?: NavItem[];
}

/**
 * Main navigation component
 * 
 * Displays the main navigation menu with links to the primary routes
 */
export function MainNav({
  className,
  items,
  ...props
}: MainNavProps) {
  const pathname = usePathname();

  // Default navigation items if none provided
  const defaultItems: NavItem[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Menu",
      href: "/menu",
      children: [
        {
          label: "Sushi",
          href: "/menu/sushi",
          description: "Traditional nigiri and specialty sushi",
        },
        {
          label: "Sashimi",
          href: "/menu/sashimi",
          description: "Premium cuts of fresh raw fish",
        },
        {
          label: "Maki Rolls",
          href: "/menu/maki",
          description: "Classic and specialty rolled sushi",
        },
        {
          label: "Poke Bowls",
          href: "/menu/bowls",
          description: "Fresh bowls with sushi-grade fish",
        },
        {
          label: "Appetizers",
          href: "/menu/appetizers",
          description: "Starters and side dishes",
        },
      ],
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  const navItems = items || defaultItems;

  // Check if a path is active (exact match or starts with path for nested routes)
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className={cn("flex items-center space-x-6", className)} {...props}>
      {navItems.map((item) => (
        <div key={item.href} className="relative group">
          <Link
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary flex items-center",
              isActive(item.href) 
                ? "text-primary" 
                : "text-muted-foreground"
            )}
          >
            {item.icon && <span className="mr-1">{item.icon}</span>}
            {item.label}
            {item.children && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-3 w-3"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            )}
          </Link>
          
          {/* Dropdown menu for items with children */}
          {item.children && item.children.length > 0 && (
            <div className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1 divide-y divide-gray-100">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={cn(
                      "block px-4 py-2 text-sm hover:bg-gray-50",
                      isActive(child.href) 
                        ? "bg-gray-50 text-primary" 
                        : "text-gray-700"
                    )}
                  >
                    <div className="font-medium">{child.label}</div>
                    {child.description && (
                      <p className="text-xs text-gray-500 mt-0.5">
                        {child.description}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
