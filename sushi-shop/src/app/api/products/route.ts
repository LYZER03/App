import { NextResponse } from "next/server";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
};

export async function GET(): Promise<NextResponse> {
  // This is a placeholder for the products API route
  // In a real implementation, this would fetch data from a database
  
  const mockProducts: Product[] = [
    {
      id: "1",
      name: "California Roll",
      description: "Crab, avocado, and cucumber wrapped in seaweed and rice",
      price: 8.99,
      category: "rolls",
      imageUrl: "/images/products/california-roll.jpg"
    },
    {
      id: "2",
      name: "Salmon Nigiri",
      description: "Fresh salmon slices on top of seasoned rice",
      price: 6.99,
      category: "nigiri",
      imageUrl: "/images/products/salmon-nigiri.jpg"
    }
  ];

  return NextResponse.json({ products: mockProducts });
}
