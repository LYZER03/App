import type { Metadata } from 'next';
import { Inter, Poppins, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

// Import the providers (dynamic import in client component)
import { ReduxProvider } from '@/components/providers/redux-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { MainLayout } from '@/components/layouts/main-layout';

// Client component wrapper to avoid server component issues
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <ThemeProvider defaultTheme="light" storageKey="sushi-shop-theme">
        <MainLayout>
          {children}
        </MainLayout>
      </ThemeProvider>
    </ReduxProvider>
  );
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sushi Shop | Fresh & Delicious Japanese Cuisine',
  description: 'Order fresh and authentic Japanese sushi for delivery or pickup. Explore our menu of sashimi, maki, nigiri, and specialty rolls.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} ${notoSansJP.variable} font-sans antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
