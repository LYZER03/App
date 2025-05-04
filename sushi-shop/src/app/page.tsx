import Image from 'next/image';
import { DependencyTest } from '@/components/test/dependency-test';

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <header className="w-full max-w-6xl mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/next.svg"
            alt="Sushi Shop Logo"
            width={120}
            height={30}
            priority
            className="dark:invert"
          />
          <h1 className="text-2xl font-heading font-bold text-primary hidden sm:block">Sushi Shop</h1>
        </div>
        <nav className="hidden sm:block">
          <ul className="flex gap-6">
            <li><a href="#" className="text-secondary hover:text-primary transition-colors">Home</a></li>
            <li><a href="#" className="text-secondary hover:text-primary transition-colors">Menu</a></li>
            <li><a href="#" className="text-secondary hover:text-primary transition-colors">About</a></li>
            <li><a href="#" className="text-secondary hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main className="flex-1 w-full max-w-6xl mx-auto py-12">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">Step 4 Validation Test</h2>
        
        {/* Dependency Test Component */}
        <DependencyTest />
      </main>
      
      <footer className="w-full max-w-6xl mx-auto py-6 text-center text-sm text-gray-500">
        <p>&copy; 2025 Sushi Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}
