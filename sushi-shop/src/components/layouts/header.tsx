"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ShoppingCart, Menu, X } from "lucide-react";
import { MainNav } from "@/components/navigation/main-nav";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-heading font-bold text-primary">
                <span className="text-accent">寿司</span> SUSHI SHOP
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <MainNav />
          </div>

          {/* Cart and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/cart" 
              className="relative p-2 text-text hover:text-primary transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-white">
                0
              </span>
              <span className="sr-only">Shopping Cart</span>
            </Link>

            <button
              onClick={toggleMenu}
              className="p-2 text-text md:hidden focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className={cn(
                    "block py-2 font-medium transition-colors hover:text-primary",
                    pathname === "/" ? "text-primary" : "text-text/80"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className={cn(
                    "block py-2 font-medium transition-colors hover:text-primary",
                    pathname.startsWith("/menu") ? "text-primary" : "text-text/80"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Menu
                </Link>
              </li>
              <li className="pl-4">
                <Link
                  href="/menu/sushi"
                  className={cn(
                    "block py-1 text-sm transition-colors hover:text-primary",
                    pathname === "/menu/sushi" ? "text-primary" : "text-text/70"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sushi
                </Link>
              </li>
              <li className="pl-4">
                <Link
                  href="/menu/sashimi"
                  className={cn(
                    "block py-1 text-sm transition-colors hover:text-primary",
                    pathname === "/menu/sashimi" ? "text-primary" : "text-text/70"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sashimi
                </Link>
              </li>
              <li className="pl-4">
                <Link
                  href="/menu/maki"
                  className={cn(
                    "block py-1 text-sm transition-colors hover:text-primary",
                    pathname === "/menu/maki" ? "text-primary" : "text-text/70"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Maki Rolls
                </Link>
              </li>
              <li className="pl-4">
                <Link
                  href="/menu/bowls"
                  className={cn(
                    "block py-1 text-sm transition-colors hover:text-primary",
                    pathname === "/menu/bowls" ? "text-primary" : "text-text/70"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Poke Bowls
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={cn(
                    "block py-2 font-medium transition-colors hover:text-primary",
                    pathname === "/about" ? "text-primary" : "text-text/80"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={cn(
                    "block py-2 font-medium transition-colors hover:text-primary",
                    pathname === "/contact" ? "text-primary" : "text-text/80"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="pt-4 border-t border-gray-100">
                <Link
                  href="/account"
                  className="block py-2 font-medium text-text/80 transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Account
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}
