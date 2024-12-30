/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from 'framer-motion'
// import { Card, CardContent } from '@/components/ui/card'
import { Card, CardContent } from './ui/card'
// import { Button } from '@/components/ui/button'
import { Button } from './ui/button'

const products = [
  {
    name: "Premium Disposables",
    description: "High-quality disposable products for everyday luxury",
    image: "/images/fold tissues.png?height=300&width=400"
  },
  {
    name: "Household Essentials",
    description: "Essential items that combine functionality with elegance",
    image: "/images/reusable container.png?height=300&width=400"
  },
  {
    name: "Eco-Friendly Collection",
    description: "Sustainable products that don't compromise on quality",
    image: "/images/AIR FRESHNER.png?height=300&width=400"
  }
]

export default function ProductShowcase() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Product Lines</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Explore our extensive catalog of premium products
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">{product.description}</p>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

