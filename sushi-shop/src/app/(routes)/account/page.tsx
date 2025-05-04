import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Account | Sushi Shop",
  description: "Manage your Sushi Shop account, orders, and preferences",
};

export default function AccountPage(): React.ReactNode {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Account</h1>
      <p className="text-gray-600 mb-8">
        This is a placeholder for the account page. User account management functionality will be implemented here.
      </p>
    </main>
  );
}
