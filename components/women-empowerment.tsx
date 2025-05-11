'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

export default function WomenEmpowerment() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-soft-beige/30">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-coral-orange to-earth-brown rounded-3xl blur-3xl opacity-20" />
            <Image
              src="/images/logos/womenemp.png"
              alt="Women Empowerment"
              className="relative z-10 rounded-xl w-full"
              width={600}
              height={600}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-forest-green font-montserrat">
              Women Empowerment
            </h2>
            <p className="text-earth-brown mb-6 font-open-sans">
              Founded in 2022 by three women entrepreneurs, Pulp Wood Tissue Pvt. Ltd. emphasizes innovation, sustainability, and women empowerment—especially among economically weaker sections.
            </p>
            <p className="text-earth-brown mb-8 font-open-sans">
              Our commitment to women&apos;s empowerment extends throughout our operations, from leadership to manufacturing. We focus on providing employment opportunities, fair wages, and safe working conditions for women from all backgrounds.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-forest-green mb-2">Women-Led Leadership</h3>
                <p className="text-sm text-earth-brown">Our company is proudly founded and directed by three women entrepreneurs.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-forest-green mb-2">Employment Opportunities</h3>
                <p className="text-sm text-earth-brown">We prioritize hiring women, especially from economically weaker sections.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-forest-green mb-2">Fair Wages</h3>
                <p className="text-sm text-earth-brown">We ensure all employees receive fair compensation for their valuable work.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-forest-green mb-2">Community Initiatives</h3>
                <p className="text-sm text-earth-brown">We actively participate in local community initiatives supporting women.</p>
              </div>
            </div>
            <Button asChild size="lg" className="bg-forest-green hover:bg-forest-green/90 text-white font-montserrat">
              <Link href="/about">About Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}