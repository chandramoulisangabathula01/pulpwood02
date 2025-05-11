/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'

const benefits = [
  "Exclusive territory rights",
  "Competitive pricing structure",
  "Marketing and sales support",
  "Flexible minimum order quantities",
  "Fast shipping and logistics",
  "Dedicated account manager"
]

export default function Distribution() {
  return (
    <section className="py-24 bg-soft-beige/30 ">
      <div className="max-w-screen-xl mx-auto px-4  md:px-12">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-forest-green font-montserrat">
              Become a Distributor
            </h2>
            <p className="text-earth-brown mb-8 font-open-sans">
              Join our network of successful distributors and gain access to our premium product lines. We offer comprehensive support and competitive advantages to help grow your business.
            </p>
            <ul className="grid gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-earth-brown font-open-sans"
                >
                  <CheckCircle className="text-forest-green w-5 h-5" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
            <Button size="lg" className="bg-forest-green hover:bg-forest-green/90 text-white font-montserrat" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-forest-green to-earth-brown rounded-3xl blur-3xl opacity-20" />
            <img
              src="/images/distributor.png?height=600&width=600"
              alt="Distribution Network"
              className="relative z-10 rounded-xl w-full"
              width={600}
              height={600}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

