'use client'

import { motion } from 'framer-motion'

export default function Partners() {
  return (
    <section className="py-12 bg-gray-50 ">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold">Trusted by Industry Leaders</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-75">
          {[1, 2, 3, 4].map((_, index) => (
            <motion.img
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              src="/images/Dmart.png?height=60&width=120"
              alt={`Partner ${index + 1}`}
              className="h-12 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

