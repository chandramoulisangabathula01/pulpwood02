'use client'

import { motion } from 'framer-motion'
// import { Card, CardContent } from '@/components/ui/card'
import { Card, CardContent } from './ui/card'

const categories = [
  {
    name: "Air Fresher",
    description: "most popular air fresher",
    image: "/images/AIR FRESHNER.png?height=300&width=400",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    name: "Reusable Container",
    description: "durable reusable container",
    image: "/images/reusable container.png?height=300&width=400",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    name: "Fold Tissues",
    description: "most premium fold tissues",
    image: "/images/fold tissues.png?height=300&width=400",
    color: "from-orange-500/20 to-red-500/20"
  }
]

export default function ProductCategories() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Product Categories
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Explore our diverse range of premium products
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <Card className="overflow-hidden group cursor-pointer w-full">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

