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
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Interested in becoming a distributor or learning more about our products? Contact us today.
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
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
            </div>
            <Input placeholder="Company" />
            <Textarea placeholder="Message" className="h-32" />
            <Button size="lg" className="w-full">Send Message</Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

