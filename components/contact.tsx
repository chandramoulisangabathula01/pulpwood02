'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <section className="py-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-forest-green">PULP WOOD TISSUE PVT LTD
          </h2>
          <p className="mt-4 text-earth-brown dark:text-earth-brown/80">
            Pulp Wood Tissue Pvt. Ltd. is a Bangalore-based leading manufacturer of premium tissue products, eco-friendly disposable tableware, and high-quality household cleaning solutions. Founded in 2022 by three women entrepreneurs, the company emphasizes innovation, sustainability, and women empowerment—especially among economically weaker sections.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-12"
        >
          <form className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="Name" className="border-forest-green focus:border-forest-green focus:ring-forest-green rounded-md py-3" />
              <Input type="email" placeholder="Email" className="border-forest-green focus:border-forest-green focus:ring-forest-green rounded-md py-3" />
            </div>
            <Input placeholder="Company / Organization" className="border-forest-green focus:border-forest-green focus:ring-forest-green rounded-md py-3" />
            <Textarea placeholder="How can we help you?" className="h-32 border-forest-green focus:border-forest-green focus:ring-forest-green rounded-md" />
            <Button size="lg" className="w-full bg-gradient-to-r from-forest-green to-earth-brown hover:from-forest-green/90 hover:to-earth-brown/90 text-white py-3 rounded-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">Send Inquiry</Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

