import { PrismaClient } from '@prisma/client';

// Define the enum values directly as they are in the database
type UserRole = 'CUSTOMER' | 'RESTAURANT_STAFF' | 'ADMIN';
type OrderStatus = 'PENDING' | 'PREPARING' | 'DELIVERING' | 'DELIVERED' | 'CANCELLED';

// Use the enum values directly
const UserRole = {
  CUSTOMER: 'CUSTOMER' as UserRole,
  RESTAURANT_STAFF: 'RESTAURANT_STAFF' as UserRole,
  ADMIN: 'ADMIN' as UserRole
};

const OrderStatus = {
  PENDING: 'PENDING' as OrderStatus,
  PREPARING: 'PREPARING' as OrderStatus,
  DELIVERING: 'DELIVERING' as OrderStatus,
  DELIVERED: 'DELIVERED' as OrderStatus,
  CANCELLED: 'CANCELLED' as OrderStatus
};

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  // Clean up existing data
  await prisma.orderItem.deleteMany({});
  await prisma.order.deleteMany({});
  await prisma.productAllergen.deleteMany({});
  await prisma.productIngredient.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.address.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.allergen.deleteMany({});
  await prisma.ingredient.deleteMany({});

  // Create users
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@sushishop.com',
      passwordHash: 'hashed_password_here', // In production, use proper password hashing
      firstName: 'Admin',
      lastName: 'User',
      role: UserRole.ADMIN,
    },
  });

  const staffUser = await prisma.user.create({
    data: {
      email: 'staff@sushishop.com',
      passwordHash: 'hashed_password_here',
      firstName: 'Staff',
      lastName: 'Member',
      role: UserRole.RESTAURANT_STAFF,
    },
  });

  const customerUser = await prisma.user.create({
    data: {
      email: 'customer@example.com',
      passwordHash: 'hashed_password_here',
      firstName: 'John',
      lastName: 'Doe',
      role: UserRole.CUSTOMER,
      addresses: {
        create: [
          {
            street: '123 Main St',
            city: 'Paris',
            state: 'Île-de-France',
            postalCode: '75001',
            country: 'France',
            isDefault: true,
          },
        ],
      },
    },
  });

  // Create categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: 'Sushi',
        description: 'Traditional Japanese sushi',
        displayOrder: 1,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Maki',
        description: 'Rolled sushi with seaweed outside',
        displayOrder: 2,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Bowls',
        description: 'Rice bowls with fresh toppings',
        displayOrder: 3,
      },
    }),
  ]);

  // Create ingredients
  const ingredients = await Promise.all([
    prisma.ingredient.create({
      data: {
        name: 'Salmon',
        description: 'Fresh Atlantic salmon',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Tuna',
        description: 'Sushi-grade tuna',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Rice',
        description: 'Japanese short-grain rice',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Nori',
        description: 'Seaweed sheets',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Avocado',
        description: 'Ripe avocado',
      },
    }),
    prisma.ingredient.create({
      data: {
        name: 'Cucumber',
        description: 'Fresh cucumber',
      },
    }),
  ]);

  // Create allergens
  const allergens = await Promise.all([
    prisma.allergen.create({
      data: {
        name: 'Fish',
        description: 'Contains fish products',
      },
    }),
    prisma.allergen.create({
      data: {
        name: 'Gluten',
        description: 'Contains gluten',
      },
    }),
    prisma.allergen.create({
      data: {
        name: 'Soy',
        description: 'Contains soy products',
      },
    }),
    prisma.allergen.create({
      data: {
        name: 'Sesame',
        description: 'Contains sesame seeds',
      },
    }),
  ]);

  // Create products with ingredients and allergens
  const products = await Promise.all([
    // Sushi category products
    prisma.product.create({
      data: {
        name: 'Salmon Nigiri',
        description: 'Fresh salmon on top of rice',
        price: 3.99,
        imageUrl: '/images/salmon-nigiri.jpg',
        categoryId: categories[0].id,
        ingredients: {
          create: [
            { ingredientId: ingredients[0].id }, // Salmon
            { ingredientId: ingredients[2].id }, // Rice
          ],
        },
        allergens: {
          create: [
            { allergenId: allergens[0].id }, // Fish
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        name: 'Tuna Nigiri',
        description: 'Fresh tuna on top of rice',
        price: 4.49,
        imageUrl: '/images/tuna-nigiri.jpg',
        categoryId: categories[0].id,
        ingredients: {
          create: [
            { ingredientId: ingredients[1].id }, // Tuna
            { ingredientId: ingredients[2].id }, // Rice
          ],
        },
        allergens: {
          create: [
            { allergenId: allergens[0].id }, // Fish
          ],
        },
      },
    }),
    // Maki category products
    prisma.product.create({
      data: {
        name: 'California Roll',
        description: 'Crab, avocado, and cucumber roll',
        price: 7.99,
        imageUrl: '/images/california-roll.jpg',
        categoryId: categories[1].id,
        ingredients: {
          create: [
            { ingredientId: ingredients[2].id }, // Rice
            { ingredientId: ingredients[3].id }, // Nori
            { ingredientId: ingredients[4].id }, // Avocado
            { ingredientId: ingredients[5].id }, // Cucumber
          ],
        },
        allergens: {
          create: [
            { allergenId: allergens[2].id }, // Soy
            { allergenId: allergens[3].id }, // Sesame
          ],
        },
      },
    }),
    // Bowl category products
    prisma.product.create({
      data: {
        name: 'Salmon Poke Bowl',
        description: 'Rice bowl with fresh salmon, avocado, and vegetables',
        price: 12.99,
        imageUrl: '/images/salmon-poke.jpg',
        categoryId: categories[2].id,
        ingredients: {
          create: [
            { ingredientId: ingredients[0].id }, // Salmon
            { ingredientId: ingredients[2].id }, // Rice
            { ingredientId: ingredients[4].id }, // Avocado
            { ingredientId: ingredients[5].id }, // Cucumber
          ],
        },
        allergens: {
          create: [
            { allergenId: allergens[0].id }, // Fish
            { allergenId: allergens[2].id }, // Soy
            { allergenId: allergens[3].id }, // Sesame
          ],
        },
      },
    }),
  ]);

  // Create a sample order
  const customerAddress = await prisma.address.findFirst({
    where: { userId: customerUser.id },
  });

  if (customerAddress) {
    const order = await prisma.order.create({
      data: {
        userId: customerUser.id,
        addressId: customerAddress.id,
        status: OrderStatus.DELIVERED,
        totalPrice: 20.97,
        items: {
          create: [
            {
              productId: products[0].id,
              quantity: 2,
              unitPrice: 3.99,
              totalPrice: 7.98,
            },
            {
              productId: products[2].id,
              quantity: 1,
              unitPrice: 7.99,
              totalPrice: 7.99,
            },
            {
              productId: products[1].id,
              quantity: 1,
              unitPrice: 4.49,
              totalPrice: 4.49,
            },
          ],
        },
      },
    });
  }

  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
