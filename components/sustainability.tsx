'use client'

import { motion } from 'framer-motion'
import { Recycle, TreePine, Droplets } from 'lucide-react'

const initiatives = [
  {
    icon: Recycle,
    title: "Recyclable Materials",
    description: "Our products are designed with recyclability in mind"
  },
  {
    icon: TreePine,
    title: "Sustainable Production",
    description: "Energy-efficient manufacturing processes"
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Minimizing water usage in our production"
  }
]

export default function Sustainability() {
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Commitment to Sustainability</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Leading the industry in environmentally conscious manufacturing and product design
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-full">
                <initiative.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{initiative.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{initiative.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

