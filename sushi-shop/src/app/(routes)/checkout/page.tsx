import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Sushi Shop",
  description: "Complete your sushi order and arrange delivery",
};

export default function CheckoutPage(): React.ReactNode {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <p className="text-gray-600 mb-8">
        This is a placeholder for the checkout page. Order completion functionality will be implemented here.
      </p>
    </main>
  );
}
