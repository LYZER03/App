import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Sushi Shop",
  description: "Browse our selection of sushi and Japanese cuisine",
};

export default function MenuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Menu</h1>
      <p className="text-gray-600 mb-8">
        This is a placeholder for the menu page. Product listings will be implemented here.
      </p>
    </main>
  );
}
