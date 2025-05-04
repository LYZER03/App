"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layouts/container";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, ProductCard } from "@/components/ui/card";
import { Badge, FoodBadge, AllergenBadge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog } from "@/components/ui/dialog";
import { ShoppingCart, Plus, Info } from "lucide-react";

/**
 * Test page to demonstrate all UI components
 * Required for validation of Step 6 in the implementation plan
 */
export default function UITestPage() {
  // State for form elements
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("tuna");
  const [checkboxValue, setCheckboxValue] = useState(false);
  
  // State for dialog
  const [dialogOpen, setDialogOpen] = useState(false);
  const [productDialogOpen, setProductDialogOpen] = useState(false);

  // Example product data
  const exampleProduct = {
    id: "1",
    title: "Salmon Nigiri",
    price: 12.99,
    description: "Fresh salmon on a bed of seasoned rice. Served with wasabi and soy sauce.",
    image: "/images/hero-sushi.jpg"
  };

  return (
    <div className="py-12">
      <Container>
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-heading font-bold">UI Components</h1>
            <p className="text-muted-foreground">
              This page showcases all the UI components built for the Sushi Shop application.
            </p>
          </div>

          {/* Buttons Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-heading font-semibold">Button Component</h2>
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium mb-4">Button Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>

              <h3 className="text-lg font-medium mt-8 mb-4">Button Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon"><ShoppingCart className="h-4 w-4" /></Button>
              </div>

              <h3 className="text-lg font-medium mt-8 mb-4">Button States</h3>
              <div className="flex flex-wrap gap-4">
                <Button disabled>Disabled</Button>
                <Button className="cursor-not-allowed opacity-50">Loading...</Button>
                <Button variant="outline" className="border-dashed">Dashed</Button>
              </div>
            </div>
          </section>

          {/* Cards Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-heading font-semibold">Card Component</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Basic Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Basic Card</CardTitle>
                  <CardDescription>A simple card with header, content and footer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is the content area of the card. You can put any content here including text, images, or other components.</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost" size="sm">Cancel</Button>
                  <Button size="sm">Submit</Button>
                </CardFooter>
              </Card>

              {/* Product Card Example */}
              <ProductCard
                title="Tuna Sashimi"
                price="$14.99"
                description="Fresh tuna slices served with wasabi and soy sauce. A delicacy for sashimi lovers."
                imageSrc="/images/category-sashimi.jpg"
                imageAlt="Tuna Sashimi"
                badges={
                  <div className="flex flex-wrap gap-1">
                    <FoodBadge variant="glutenFree">Gluten Free</FoodBadge>
                  </div>
                }
                actions={
                  <>
                    <Button variant="outline" size="sm">
                      <Info className="h-4 w-4 mr-1" /> Details
                    </Button>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-1" /> Add to Cart
                    </Button>
                  </>
                }
              />

              {/* Another Product Card */}
              <ProductCard
                title="California Roll"
                price="$9.99"
                description="Crab, avocado and cucumber wrapped in seaweed and rice. Perfect for beginners."
                imageSrc="/images/category-sushi.jpg"
                imageAlt="California Roll"
                badges={
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary">Popular</Badge>
                  </div>
                }
                actions={
                  <Button size="sm" className="w-full">
                    <ShoppingCart className="h-4 w-4 mr-1" /> Add to Cart
                  </Button>
                }
              />
            </div>
          </section>

          {/* Badges Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-heading font-semibold">Badge Component</h2>
            <div className="p-6 bg-white rounded-lg shadow-sm border space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Standard Badges</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="accent">Accent</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="danger">Danger</Badge>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Food Badges</h3>
                <div className="flex flex-wrap gap-2">
                  <FoodBadge variant="vegan">Vegan</FoodBadge>
                  <FoodBadge variant="vegetarian">Vegetarian</FoodBadge>
                  <FoodBadge variant="glutenFree">Gluten Free</FoodBadge>
                  <FoodBadge variant="spicy">Spicy</FoodBadge>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Allergen Badges</h3>
                <div className="flex flex-wrap gap-2">
                  <AllergenBadge allergen="Shellfish" />
                  <AllergenBadge allergen="Gluten" />
                  <AllergenBadge allergen="Soy" />
                  <AllergenBadge allergen="Sesame" />
                </div>
              </div>
            </div>
          </section>

          {/* Form Components Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-heading font-semibold">Form Components</h2>
            <div className="p-6 bg-white rounded-lg shadow-sm border space-y-8">
              {/* Input */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Input Component</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="standard-input" className="block text-sm font-medium mb-1">
                      Standard Input
                    </label>
                    <Input
                      id="standard-input"
                      placeholder="Enter your name"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="error-input" className="block text-sm font-medium mb-1">
                      Input with Error
                    </label>
                    <Input
                      id="error-input"
                      placeholder="Enter your email"
                      error={true}
                      errorMessage="Please enter a valid email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="disabled-input" className="block text-sm font-medium mb-1">
                      Disabled Input
                    </label>
                    <Input
                      id="disabled-input"
                      placeholder="This input is disabled"
                      disabled
                    />
                  </div>
                  <div>
                    <label htmlFor="icon-input" className="block text-sm font-medium mb-1">
                      Input with Icon
                    </label>
                    <div className="relative">
                      <Input
                        id="icon-input"
                        placeholder="Search..."
                        className="pl-9"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Select */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Select Component</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Select
                    label="Choose a Sushi Type"
                    options={[
                      { value: "", label: "Select a type", disabled: true },
                      { value: "tuna", label: "Tuna" },
                      { value: "salmon", label: "Salmon" },
                      { value: "yellowtail", label: "Yellowtail" },
                      { value: "eel", label: "Eel" },
                    ]}
                    value={selectValue}
                    onChange={setSelectValue}
                  />
                  <Select
                    label="Select with Error"
                    options={[
                      { value: "", label: "Select a quantity", disabled: true },
                      { value: "1", label: "1 piece" },
                      { value: "2", label: "2 pieces" },
                      { value: "3", label: "3 pieces" },
                    ]}
                    error={true}
                    errorMessage="Please select a quantity"
                  />
                </div>
              </div>

              {/* Checkbox */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Checkbox Component</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Checkbox
                      label="Simple checkbox"
                      checked={checkboxValue}
                      onChange={(e) => setCheckboxValue(e.target.checked)}
                    />
                    <Checkbox
                      label="With description"
                      description="This is additional information about the checkbox"
                      checked={true}
                    />
                  </div>
                  <div className="space-y-4">
                    <Checkbox
                      label="Disabled checkbox"
                      description="This checkbox cannot be toggled"
                      disabled
                    />
                    <Checkbox
                      label="Checkbox with error"
                      error={true}
                      errorMessage="This field is required"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dialog Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-heading font-semibold">Dialog Component</h2>
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => setDialogOpen(true)}>
                  Open Basic Dialog
                </Button>
                <Button variant="secondary" onClick={() => setProductDialogOpen(true)}>
                  Open Product Dialog
                </Button>
              </div>

              {/* Basic Dialog */}
              <Dialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                title="Confirmation"
                description="Please confirm your action"
                footer={
                  <>
                    <Button variant="outline" onClick={() => setDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setDialogOpen(false)}>
                      Confirm
                    </Button>
                  </>
                }
              >
                <p className="mb-4">
                  Are you sure you want to continue? This action cannot be undone.
                </p>
              </Dialog>

              {/* Product Dialog */}
              <Dialog
                open={productDialogOpen}
                onClose={() => setProductDialogOpen(false)}
                title={exampleProduct.title}
                maxWidth="lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative aspect-square rounded-md overflow-hidden bg-slate-100">
                    <div 
                      className="h-full w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${exampleProduct.image})` }}
                      role="img"
                      aria-label={exampleProduct.title}
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-heading font-bold">{exampleProduct.title}</h3>
                        <p className="text-muted-foreground">{exampleProduct.description}</p>
                      </div>
                      <span className="text-xl font-bold text-primary">${exampleProduct.price}</span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Dietary Information</h4>
                      <div className="flex flex-wrap gap-2">
                        <FoodBadge variant="glutenFree">Gluten Free</FoodBadge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Allergens</h4>
                      <div className="flex flex-wrap gap-2">
                        <AllergenBadge allergen="Fish" />
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button className="w-full">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </Dialog>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
