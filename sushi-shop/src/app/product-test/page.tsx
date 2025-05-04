"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layouts/container";
import { H1, H2, H3, P, Lead } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ProductCard, ProductGrid, ProductDetails, ProductQuickView } from "@/components/product";
import { sampleProducts, type ProductWithDetails } from "@/data/sample-products";
import { FoodBadge } from "@/components/ui/badge";

/**
 * Product Test Page
 * 
 * This page demonstrates all product display components
 * Used for validation of Step 8 of the implementation plan
 */
export default function ProductTestPage() {
  // State for quick view modal
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductWithDetails | undefined>(undefined);

  // Handle quick view
  const handleQuickView = (product: ProductWithDetails) => {
    setSelectedProduct(product);
    setQuickViewOpen(true);
  };

  // Mock add to cart function
  const handleAddToCart = (product: ProductWithDetails, quantity: number = 1) => {
    console.log(`Added ${quantity} x ${product.name} to cart`);
    alert(`Added ${quantity} x ${product.name} to cart`);
  };

  return (
    <div className="py-12">
      <Container>
        <div className="space-y-16">
          {/* Page Header */}
          <div className="space-y-4 text-center">
            <H1>Product Display Components</H1>
            <Lead>
              This page showcases the product display components developed for the Sushi Shop application.
            </Lead>
          </div>

          {/* ProductCard Component */}
          <section>
            <H2 className="mb-6">Product Card Component</H2>
            <div className="space-y-8">
              {/* Basic ProductCard */}
              <div>
                <H3 className="mb-4">Basic Product Cards</H3>
                <P className="mb-4">Product cards display essential product information and allow customers to add items to cart or view more details.</P>
                <ProductGrid columnsMd={2} columnsLg={3} columnsXl={4}>
                  {sampleProducts.slice(0, 4).map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={handleAddToCart}
                      onQuickView={() => handleQuickView(product)}
                    />
                  ))}
                </ProductGrid>
              </div>

              {/* ProductCard Variants */}
              <div>
                <H3 className="mb-4">Product Card Variants</H3>
                <P className="mb-4">Different configurations of the product card for various use cases:</P>
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Without Quick View</h4>
                    <ProductCard
                      product={sampleProducts[4]}
                      showQuickView={false}
                      onAddToCart={handleAddToCart}
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Without Add to Cart</h4>
                    <ProductCard
                      product={sampleProducts[5]}
                      showAddToCart={false}
                      onQuickView={() => handleQuickView(sampleProducts[5])}
                    />
                  </div>
                </div>
              </div>

              {/* Badge Examples */}
              <div>
                <H3 className="mb-4">Product Card with Badges</H3>
                <P className="mb-4">Product cards showing different badge types for dietary information and special statuses:</P>
                <ProductGrid columnsMd={2} columnsLg={3} columnsXl={3}>
                  {/* Vegetarian Product */}
                  <ProductCard
                    product={sampleProducts[6]} // Vegan Avocado Roll
                    onAddToCart={handleAddToCart}
                    onQuickView={() => handleQuickView(sampleProducts[6])}
                  />
                  {/* Spicy Product */}
                  <ProductCard
                    product={sampleProducts[4]} // Spicy Tuna Roll
                    onAddToCart={handleAddToCart}
                    onQuickView={() => handleQuickView(sampleProducts[4])}
                  />
                  {/* Gluten-Free Product */}
                  <ProductCard
                    product={sampleProducts[7]} // Salmon Poke Bowl
                    onAddToCart={handleAddToCart}
                    onQuickView={() => handleQuickView(sampleProducts[7])}
                  />
                </ProductGrid>
              </div>
            </div>
          </section>

          {/* ProductGrid Component */}
          <section>
            <H2 className="mb-6">Product Grid Component</H2>
            <div className="space-y-8">
              <div>
                <H3 className="mb-4">Responsive Product Grid</H3>
                <P className="mb-4">
                  The ProductGrid component arranges products in a responsive grid that adapts to different screen sizes.
                  It can be configured with different column counts for various breakpoints.
                </P>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">3-Column Grid (Default)</h4>
                    <ProductGrid>
                      {sampleProducts.slice(0, 3).map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onAddToCart={handleAddToCart}
                          onQuickView={() => handleQuickView(product)}
                        />
                      ))}
                    </ProductGrid>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">2-Column Grid (columnsMd=2, columnsLg=2)</h4>
                    <ProductGrid columnsMd={2} columnsLg={2}>
                      {sampleProducts.slice(3, 5).map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onAddToCart={handleAddToCart}
                          onQuickView={() => handleQuickView(product)}
                        />
                      ))}
                    </ProductGrid>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ProductDetails Component */}
          <section>
            <H2 className="mb-6">Product Details Component</H2>
            <div className="space-y-4">
              <P>
                The ProductDetails component displays comprehensive information about a single product,
                including images, description, dietary information, ingredients, and nutritional facts.
              </P>
              <div className="rounded-lg border p-6">
                <ProductDetails
                  product={sampleProducts[0]} // Salmon Nigiri
                  onAddToCart={handleAddToCart}
                />
              </div>
            </div>
          </section>

          {/* ProductQuickView Component */}
          <section>
            <H2 className="mb-6">Product Quick View Component</H2>
            <div className="space-y-4">
              <P>
                The ProductQuickView component displays product details in a modal dialog, allowing customers
                to quickly view product information without navigating away from the current page.
              </P>
              <div className="flex flex-wrap gap-4">
                {sampleProducts.map((product) => (
                  <Button
                    key={product.id}
                    onClick={() => handleQuickView(product)}
                  >
                    Quick View: {product.name}
                  </Button>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Container>

      {/* Quick View Modal */}
      <ProductQuickView
        open={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
