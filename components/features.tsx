'use client'

import { motion } from 'framer-motion'
import { Shield, Leaf, Award } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "Our products meet the highest standards of quality and durability"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable materials and environmentally conscious manufacturing"
  },
  {
    icon: Award,
    title: "Certified Excellence",
    description: "International certifications and quality assurance guarantees"
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-soft-beige/30">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-forest-green font-montserrat">Why Choose Our Products</h2>
          <p className="mt-4 text-earth-brown font-open-sans">
            Discover the advantages of partnering with a leader in premium disposable and household products
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="p-3 bg-forest-green/10 rounded-full mb-4">
                <feature.icon className="w-6 h-6 text-forest-green" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-forest-green font-montserrat">{feature.title}</h3>
              <p className="text-earth-brown font-open-sans">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

