import Link from "next/link";
import { Container } from "@/components/layouts/container";
import { H1, H2, H3, P, Lead } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/navigation";
import { sampleProducts } from "@/data/sample-products";

/**
 * Routing Test Page
 * 
 * This page demonstrates the routing and navigation features implemented in Step 9
 * Used for validation of the implementation plan
 */
export default function RoutingTestPage() {
  // Demo breadcrumb items
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Routing Test", href: "/routing-test", current: true },
  ];

  // Group products by category for easier navigation demo
  const productsByCategory = sampleProducts.reduce((acc, product) => {
    const category = product.category?.id || "other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {} as Record<string, typeof sampleProducts>);

  return (
    <Container className="py-12">
      <div className="space-y-12">
        {/* Page Header */}
        <div className="space-y-4">
          <Breadcrumb items={breadcrumbItems} />
          <H1>Routing & Navigation Test</H1>
          <Lead>
            This page demonstrates the routing and navigation features implemented for the Sushi Shop application.
          </Lead>
        </div>

        {/* Primary Routes */}
        <section>
          <H2 className="mb-6">Primary Routes</H2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <RouteCard 
              title="Home"
              description="Landing page with hero section and featured products"
              path="/"
              icon="🏠"
            />
            <RouteCard 
              title="Menu"
              description="Browse all products across all categories"
              path="/menu"
              icon="🍣"
            />
            <RouteCard 
              title="Cart"
              description="View shopping cart and proceed to checkout"
              path="/cart"
              icon="🛒"
            />
            <RouteCard 
              title="Account"
              description="User account management and order history"
              path="/account"
              icon="👤"
            />
          </div>
        </section>

        {/* Category Routes */}
        <section>
          <H2 className="mb-6">Category Routes</H2>
          <P className="mb-4">
            The application supports dynamic category routes using the <code>[category]</code> parameter.
            Categories can be browsed through the following links:
          </P>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RouteCard 
              title="Sushi"
              description="Traditional and specialty sushi"
              path="/menu/sushi"
              icon="🍣"
            />
            <RouteCard 
              title="Sashimi"
              description="Fresh raw fish slices"
              path="/menu/sashimi"
              icon="🐟"
            />
            <RouteCard 
              title="Maki Rolls"
              description="Classic and specialty rolled sushi"
              path="/menu/maki"
              icon="🍱"
            />
            <RouteCard 
              title="Poke Bowls"
              description="Fresh bowls with sushi-grade fish"
              path="/menu/bowls"
              icon="🥗"
            />
            <RouteCard 
              title="Appetizers"
              description="Starters and side dishes"
              path="/menu/appetizers"
              icon="🥢"
            />
          </div>
        </section>

        {/* Product Detail Routes */}
        <section>
          <H2 className="mb-6">Product Detail Routes</H2>
          <P className="mb-4">
            Individual products can be viewed using the <code>/menu/product/[id]</code> dynamic route.
            Here are some sample products:
          </P>
          <div className="space-y-6">
            {Object.entries(productsByCategory).map(([category, products]) => (
              <div key={category} className="space-y-4">
                <H3 className="capitalize">{category}</H3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {products.map(product => (
                    <div key={product.id} className="border rounded-md p-4 hover:border-primary transition-colors">
                      <h4 className="font-medium">{product.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <Button asChild size="sm">
                        <Link href={`/menu/product/${product.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation Features */}
        <section>
          <H2 className="mb-6">Navigation Features</H2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-2">Header Navigation</h3>
              <p className="mb-4">The main navigation in the header provides access to primary routes and dropdown menus for categories.</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Responsive design that adapts to mobile and desktop</li>
                <li>Dropdown menus for categories on desktop</li>
                <li>Expanded menu view on mobile with hamburger toggle</li>
                <li>Active state indication for current route</li>
              </ul>
              <Button asChild>
                <Link href="/">
                  View Header Navigation
                </Link>
              </Button>
            </div>
            
            <div className="border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-2">Breadcrumb Navigation</h3>
              <p className="mb-4">Breadcrumb navigation helps users understand their location in the site hierarchy and navigate back to parent pages.</p>
              <div className="bg-gray-50 p-3 rounded mb-4">
                <Breadcrumb 
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Menu", href: "/menu" },
                    { label: "Sushi", href: "/menu/sushi" },
                    { label: "Salmon Nigiri", href: "/menu/product/1", current: true },
                  ]} 
                />
              </div>
              <Button asChild>
                <Link href="/menu/product/1">
                  View Live Example
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}

// Helper component for route cards
function RouteCard({ 
  title, 
  description, 
  path, 
  icon 
}: { 
  title: string; 
  description: string; 
  path: string; 
  icon: string;
}) {
  return (
    <div className="border rounded-md p-6 hover:border-primary transition-colors">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <Button asChild>
        <Link href={path}>Visit {title}</Link>
      </Button>
    </div>
  );
}
