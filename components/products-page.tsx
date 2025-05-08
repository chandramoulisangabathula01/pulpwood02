'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import Image from 'next/image'

// Product data
const categories = [
  {
    id: 'tissues',
    name: 'Tissues & Paper Products',
    description: 'Premium quality tissues and paper products for everyday use',
    image: '/images/fold tissues.png',
    products: [
      {
        id: 'facial-tissues',
        name: 'Facial Tissues',
        description: 'Soft and gentle facial tissues for everyday comfort',
        image: '/images/fold tissues.png',
        features: ['Ultra-soft material', 'Dermatologically tested', 'Eco-friendly packaging']
      },
      {
        id: 'paper-towels',
        name: 'Paper Towels',
        description: 'Absorbent and durable paper towels for kitchen use',
        image: '/images/tissues.png',
        features: ['Super absorbent', 'Strong when wet', 'Suitable for all surfaces']
      },
      {
        id: 'napkins',
        name: 'Premium Napkins',
        description: 'Elegant napkins for dining and special occasions',
        image: '/images/fold tissues.png',
        features: ['Elegant design', 'Soft texture', 'Available in multiple colors']
      }
    ]
  },
  {
    id: 'containers',
    name: 'Containers & Storage',
    description: 'Durable and practical containers for food storage and organization',
    image: '/images/reusable container.png',
    products: [
      {
        id: 'food-containers',
        name: 'Food Containers',
        description: 'Leak-proof containers for food storage and meal prep',
        image: '/images/reusable container.png',
        features: ['BPA-free', 'Microwave safe', 'Dishwasher safe']
      },
      {
        id: 'storage-boxes',
        name: 'Storage Boxes',
        description: 'Versatile storage solutions for home organization',
        image: '/images/containers.png',
        features: ['Stackable design', 'Durable construction', 'Various sizes available']
      },
      {
        id: 'lunch-boxes',
        name: 'Lunch Boxes',
        description: 'Practical and stylish lunch boxes for work and school',
        image: '/images/reusable container.png',
        features: ['Leak-proof seal', 'Multiple compartments', 'Insulated options available']
      }
    ]
  },
  {
    id: 'fresheners',
    name: 'Air Fresheners',
    description: 'Long-lasting air fresheners for a pleasant home environment',
    image: '/images/AIR FRESHNER.png',
    products: [
      {
        id: 'spray-fresheners',
        name: 'Spray Fresheners',
        description: 'Instant freshness with our premium spray fresheners',
        image: '/images/AIR FRESHNER.png',
        features: ['Long-lasting fragrance', 'No harmful chemicals', 'Various scents available']
      },
      {
        id: 'gel-fresheners',
        name: 'Gel Fresheners',
        description: 'Continuous fragrance release with our gel fresheners',
        image: '/images/AIR FRESHNER.png',
        features: ['Up to 30 days of freshness', 'Subtle, consistent scent', 'Decorative designs']
      },
      {
        id: 'car-fresheners',
        name: 'Car Fresheners',
        description: 'Keep your vehicle smelling fresh with our car fresheners',
        image: '/images/AIR FRESHNER.png',
        features: ['Designed for vehicles', 'Clip-on design', 'Premium long-lasting scents']
      }
    ]
  }
]

// Define the Product interface to match the structure in our data
interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackClick = () => {
    setSelectedProduct(null)
  }

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      {/* <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Products</h1>
            <p className="mt-4 text-xl text-gray-500">
              Explore our premium range of household essentials
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Product Detail View */}
      {selectedProduct ? (
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <Button 
              variant="ghost" 
              onClick={handleBackClick} 
              className="mb-6"
            >
              ← Back to Products
            </Button>
            
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-lg"
              >
                <Image 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                  width={250}
                  height={500}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl font-bold">{selectedProduct.name}</h2>
                  <p className="text-gray-500 mt-2">{selectedProduct.description}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature: string, index: number) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4">
                  <Button size="lg">Request Information</Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ) : (
        /* Product Categories and Listings */
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <Tabs 
              defaultValue={categories[0].id} 
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              className="w-full"
            >
              <div className="mb-8 ">
                <TabsList className="flex justify-center gap-2 pb-2 mx-auto bg-transparent">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                       value={category.id}
                      className="text-sm md:text-base px-6 py-3 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <h2 className="text-3xl font-bold">{category.name}</h2>
                    <p className="text-gray-500">{category.description}</p>
                  </motion.div>
                  
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.products.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="cursor-pointer"
                        onClick={() => handleProductClick(product)}
                      >
                        <Card className="overflow-hidden h-full">
                          <div className="aspect-video overflow-hidden">
                            <Image 
                              src={product.image} 
                              alt={product.name} 
                              className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                              width={400}
                              height={300}
                            />
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                            <p className="text-gray-500 mb-4">{product.description}</p>
                            <Button variant="outline" size="sm">View Details</Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Interested in Our Products?</h2>
            <p className="mt-4 text-xl opacity-90">
              Contact us for pricing, samples, or to become a distributor
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">Request Catalog</Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white hover:text-primary">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
