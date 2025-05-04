import { notFound } from "next/navigation";
import { Container } from "@/components/layouts/container";
import { Breadcrumb } from "@/components/navigation";
import { H2, P } from "@/components/ui/typography";
import { sampleProducts } from "@/data/sample-products";
import { ProductPageClient } from "./components/product-page-client";
import { Metadata } from "next";

// Generate dynamic metadata
export async function generateMetadata({ 
  params 
}: { 
  params: { id: string } 
}): Promise<Metadata> {
  const productId = await params.id;
  const product = sampleProducts.find(p => p.id === productId);

  if (!product) {
    return {
      title: "Product Not Found | Sushi Shop"
    };
  }

  return {
    title: `${product.name} | Sushi Shop`,
    description: product.description
  };
}

export default async function ProductPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  // Get product ID and await it (Next.js 15+ requirement)
  const productId = await params.id;
  
  // Find the product by ID
  const product = sampleProducts.find(p => p.id === productId);
  
  // Handle case when product is not found
  if (!product) {
    notFound();
  }
  
  // Generate breadcrumb items for navigation
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: product.category?.name || "Product", href: `/menu/${product.category?.id}` },
    { label: product.name, href: `/menu/product/${product.id}`, current: true },
  ];
  
  return (
    <Container className="py-12">
      <div className="space-y-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Client component for interactive elements */}
        <ProductPageClient product={product} />
        
        {/* Related Products (would be implemented in a real app) */}
        <div className="mt-20">
          <H2 className="mb-4">You Might Also Like</H2>
          <P className="text-muted-foreground mb-4">
            This section would show related products based on category, popularity, or other criteria.
            For the demo, this is a placeholder.
          </P>
        </div>
      </div>
    </Container>
  );
}
