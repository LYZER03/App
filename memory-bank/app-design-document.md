# Design Document: Sushi Shop Clone Platform

## 1. Introduction

### 1.1 Purpose
This document outlines the design specifications for a sushi delivery and ordering platform similar to sushi-shop.fr, including both customer-facing frontend and restaurateur back-office components.

### 1.2 Scope
The platform will enable customers to browse menus, place orders, track delivery, and allow restaurant staff to manage products, orders, and inventory through a dedicated back-office.

### 1.3 Target Audience
- Customers seeking to order sushi and Japanese cuisine
- Restaurant owners and staff
- Delivery personnel
- Platform administrators

## 2. Technology Stack

### 2.1 Frontend

- Framework: Next.js 14+ with App Router
- Language: TypeScript
- UI Components: Shadcn UI
- Styling: Tailwind CSS
- State Management: Redux Toolkit (global) + React Context API (UI)
- Data Fetching: SWR for client data fetching with caching

### 2.2 Backend

- API Framework: NestJS with TypeScript
- Database: PostgreSQL
- ORM: Prisma
- Authentication: NextAuth.js / JWT
- File Storage: Cloudinary for product images

### 2.3 Infrastructure

- Frontend Hosting: Vercel
- Backend Hosting: Railway/Render
- CI/CD: GitHub Actions
- Monitoring: Sentry + Vercel Analytics

## 3. System Architecture

### 3.1 High-Level Architecture
```
┌────────────────┐     ┌────────────────┐     ┌────────────────┐
│                │     │                │     │                │
│  Customer UI   │────▶│   Next.js API  │◀───▶│  NestJS API    │
│  (Next.js)     │     │   (Internal)   │     │  (External)    │
│                │     │                │     │                │
└────────────────┘     └────────────────┘     └────────────────┘
        │                                              │
        │                                              │
┌────────────────┐                           ┌─────────▼────────┐
│                │                           │                  │
│  Admin Panel   │                           │   PostgreSQL     │
│  (Next.js)     │                           │   Database       │
│                │                           │                  │
└────────────────┘                           └──────────────────┘
```

### 3.2 Data Flow
1. User requests are handled by Next.js frontend
2. Simple queries may use Next.js API routes
3. Complex operations are routed to the NestJS backend
4. Database transactions are managed through Prisma ORM
5. Authentication flows through NextAuth.js

## 4. Database Schema

### 4.1 Core Entities

#### User
```
- id: UUID (PK)
- email: String (unique)
- passwordHash: String
- firstName: String
- lastName: String
- role: Enum (CUSTOMER, RESTAURANT_STAFF, ADMIN)
- addresses: Address[] (relation)
- orders: Order[] (relation)
- createdAt: DateTime
- updatedAt: DateTime
```

#### Product
```
- id: UUID (PK)
- name: String
- description: String
- price: Decimal
- imageUrl: String
- category: Category (relation)
- isAvailable: Boolean
- ingredients: Ingredient[] (relation)
- allergens: Allergen[] (relation)
- createdAt: DateTime
- updatedAt: DateTime
```

#### Order
```
- id: UUID (PK)
- user: User (relation)
- items: OrderItem[] (relation)
- status: Enum (PENDING, PREPARING, DELIVERING, DELIVERED, CANCELLED)
- totalPrice: Decimal
- address: Address (relation)
- paymentIntentId: String
- createdAt: DateTime
- updatedAt: DateTime
```

#### Category
```
- id: UUID (PK)
- name: String
- description: String
- products: Product[] (relation)
- displayOrder: Int
```

### 4.2 Database Relationships
- One-to-many: User -> Orders
- One-to-many: Category -> Products
- Many-to-many: Product <-> Ingredients
- Many-to-many: Product <-> Allergens
- One-to-many: Order -> OrderItems

## 5. Feature Specifications

### 5.1 Customer Portal

#### 5.1.1 Menu Browsing
Users can browse the menu with filtering by:
- Categories (maki, sushi, bowl, etc.)
- Dietary restrictions (vegetarian, gluten-free)
- Price range
- Popularity/rating

#### 5.1.2 Shopping Cart
- Add/remove items
- Adjust quantities
- Apply discount codes
- View subtotal, taxes, and delivery fees

#### 5.1.3 Checkout Flow
1. Cart review
2. Address selection/input
3. Delivery time selection
4. Payment integration (Stripe)
5. Order confirmation

#### 5.1.4 User Account
- Order history and reordering
- Saved addresses
- Payment methods
- Preferences and dietary restrictions

### 5.2 Restaurant Back-Office

#### 5.2.1 Dashboard
- Daily orders summary
- Revenue metrics
- Popular items
- Inventory alerts

#### 5.2.2 Order Management
- View incoming orders
- Update order status
- Handle special requests
- Process refunds

#### 5.2.3 Menu Management
- Add/edit products
- Update prices
- Manage categories
- Set availability

#### 5.2.4 Inventory Control
- Track ingredient usage
- Set low-stock alerts
- Mark items as unavailable

## 6. UI/UX Design

### 6.1 Design Principles
- Clean, minimalist interface with focus on food photography
- Mobile-first responsive design
- Accessibility compliance (WCAG 2.1 AA)
- Consistent branding elements

### 6.2 Color Palette
- Primary: `#E94560` (vibrant red)
- Secondary: `#0F3460` (deep blue)
- Accent: `#16213E` (dark navy)
- Background: `#FFFFFF` (white)
- Text: `#1A1A2E` (near-black)

### 6.3 Typography
- Headings: Poppins (sans-serif)
- Body: Inter (sans-serif)
- Alternative/Accent: Noto Sans JP (for Japanese terms)

### 6.4 Key Interface Components
- Product cards with hover effects
- Sticky navigation
- Floating cart summary
- Order progress indicators
- Responsive tables for admin views

## 7. API Endpoints

### 7.1 Public API

#### Authentication
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/refresh-token`

#### Products
- `GET /api/products`
- `GET /api/products/:id`
- `GET /api/categories`
- `GET /api/categories/:id/products`

#### Orders
- `POST /api/orders`
- `GET /api/orders/:id`
- `GET /api/orders/current-user`

#### User
- `GET /api/user/profile`
- `PUT /api/user/profile`
- `GET /api/user/addresses`
- `POST /api/user/addresses`

### 7.2 Admin API

#### Products Management
- `POST /api/admin/products`
- `PUT /api/admin/products/:id`
- `DELETE /api/admin/products/:id`

#### Orders Management
- `GET /api/admin/orders`
- `PUT /api/admin/orders/:id/status`

#### Analytics
- `GET /api/admin/analytics/sales`
- `GET /api/admin/analytics/popular-items`

## 8. Non-Functional Requirements

### 8.1 Performance
- Page load < 2 seconds (LCP)
- API response < 300ms
- Support 1000+ concurrent users

### 8.2 Security
- HTTPS for all connections
- Input validation
- CSRF protection
- Rate limiting
- Data encryption at rest

### 8.3 Scalability
- Horizontal scaling of API servers
- Database connection pooling
- CDN for static assets
- Image optimization

### 8.4 Monitoring
- Error tracking with Sentry
- Performance monitoring with Core Web Vitals
- API health checks
- Database query performance

## 9. Implementation Roadmap

### Phase 1: MVP (2 months)
- Basic product catalog
- Simple cart and checkout
- User registration and login
- Basic restaurant dashboard
- Order placement and tracking

### Phase 2: Enhanced Features (1 month)
- Payment integration
- Reviews and ratings
- Advanced filtering
- Order history and reordering

### Phase 3: Advanced Operations (1 month)
- Inventory management
- Analytics dashboard
- Promotions and discounts
- Mobile optimizations

## 10. Risk Assessment

### Technical Risks
- Performance issues with large product catalogs
- Payment processing failures
- Database scalability challenges

### Mitigation Strategies
- Implement pagination and efficient queries
- Redundant payment processing flows
- Database optimization and monitoring