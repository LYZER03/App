import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart | Sushi Shop",
  description: "View and manage your sushi order",
};

export default function CartPage(): React.ReactNode {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <p className="text-gray-600 mb-8">
        This is a placeholder for the shopping cart page. Cart functionality will be implemented here.
      </p>
    </main>
  );
}
