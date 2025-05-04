import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layouts/container';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/5 to-background py-16 sm:py-24">
        <Container className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-accent max-w-4xl mb-6">
            Authentic Japanese Cuisine Delivered to Your Door
          </h1>
          <p className="text-lg md:text-xl text-text/80 max-w-2xl mb-10">
            Experience the finest sushi crafted by expert chefs using premium ingredients, 
            delivered fresh to your home or office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/menu" 
              className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-600 transition-colors"
            >
              View Our Menu
            </Link>
            <Link 
              href="/about" 
              className="px-6 py-3 bg-white text-accent border border-accent/20 font-medium rounded-lg hover:bg-accent/5 transition-colors"
            >
              About Our Restaurant
            </Link>
          </div>
          <div className="mt-12 relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/images/hero-sushi.jpg" 
              alt="Assorted sushi platter" 
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Popular Categories Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Our Popular Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'Sushi', 
                href: '/menu/sushi',
                hasImage: true,
                image: '/images/category-sushi.jpg'
              },
              { 
                name: 'Maki Rolls', 
                href: '/menu/maki',
                hasImage: false,
                color: 'bg-secondary/20'
              },
              { 
                name: 'Sashimi', 
                href: '/menu/sashimi',
                hasImage: true,
                image: '/images/category-sashimi.jpg'
              },
            ].map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={`group relative h-64 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 ${!category.hasImage ? category.color : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-accent/20 z-10" />
                {category.hasImage ? (
                  <Image
                    src={category.image!}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/30 font-heading font-bold text-2xl">
                    {category.name} Image
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-heading font-bold text-white">{category.name}</h3>
                  <p className="text-white/80 text-sm mt-1">Explore Menu →</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/5">
        <Container>
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Why Choose Sushi Shop?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fresh Ingredients',
                description: 'We source the freshest ingredients daily to ensure quality and flavor.',
                icon: '🐟'
              },
              {
                title: 'Expert Chefs',
                description: 'Our skilled chefs have years of experience crafting authentic Japanese cuisine.',
                icon: '👨‍🍳'
              },
              {
                title: 'Fast Delivery',
                description: 'Quick and reliable delivery to preserve the freshness of your order.',
                icon: '🚚'
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                <p className="text-text/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <Container className="text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-6">
            Ready to Order?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Experience the authentic taste of Japan delivered right to your doorstep.
          </p>
          <Link
            href="/menu"
            className="inline-block px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Order Now
          </Link>
        </Container>
      </section>

      {/* Check Layout Test Link */}
      <section className="py-4 bg-gray-100">
        <Container className="text-center">
          <p className="text-sm text-gray-500">
            <Link href="/layout-test" className="text-primary hover:underline">
              View Layout Test Page
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
