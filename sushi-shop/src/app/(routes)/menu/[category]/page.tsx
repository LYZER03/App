import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/layouts/container";
import { H1, H2, P } from "@/components/ui/typography";
import { ProductGrid, ProductCard } from "@/components/product";
import { sampleProducts } from "@/data/sample-products";

// Define valid categories
const validCategories = ["sushi", "sashimi", "maki", "bowls", "appetizers"];

export async function generateMetadata({ 
  params 
}: { 
  params: { category: string } 
}): Promise<Metadata> {
  // Get category parameter and await it (Next.js 15+ requirement)
  const categoryParam = await params.category;
  
  // Capitalize first letter of category
  const categoryName = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
  
  return {
    title: `${categoryName} | Sushi Shop Menu`,
    description: `Browse our selection of ${categoryParam} items and other Japanese cuisine specialties`
  };
}

export default async function CategoryPage({ 
  params 
}: { 
  params: { category: string } 
}) {
  // Get category parameter and await it (Next.js 15+ requirement)
  const categoryParam = await params.category;
  
  // Normalize category (convert to lowercase for comparison)
  const category = categoryParam.toLowerCase();
  
  // Check if category is valid, if not return 404
  if (!validCategories.includes(category)) {
    notFound();
  }
  
  // Format the category name for display (capitalize first letter)
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  
  // Filter products by category
  const categoryProducts = sampleProducts.filter(product => 
    product.category?.id.toLowerCase() === category
  );
  
  // Handle case when no products found in this category
  if (categoryProducts.length === 0) {
    return (
      <Container className="py-12">
        <H1>{categoryName}</H1>
        <P className="mt-4">
          No products found in this category. Please check back later or browse our other categories.
        </P>
      </Container>
    );
  }
  
  return (
    <Container className="py-12">
      <div className="space-y-8">
        <div>
          <H1>{categoryName}</H1>
          <P className="mt-2 text-muted-foreground">
            Browse our selection of {categoryName.toLowerCase()} items prepared with the freshest ingredients.
          </P>
        </div>
        
        <ProductGrid columnsMd={2} columnsLg={3} columnsXl={4}>
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={(product) => console.log(`Added ${product.name} to cart`)}
              onQuickView={(product) => console.log(`Quick view: ${product.name}`)}
            />
          ))}
        </ProductGrid>
      </div>
    </Container>
  );
}
