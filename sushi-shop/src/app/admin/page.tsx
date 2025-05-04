import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Sushi Shop",
  description: "Manage products, orders, and inventory",
};

export default function AdminDashboardPage(): React.ReactNode {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="text-gray-600 mb-8">
        This is a placeholder for the admin dashboard. Restaurant management functionality will be implemented here.
      </p>
    </main>
  );
}
