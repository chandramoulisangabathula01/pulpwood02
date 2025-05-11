'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Leaf, Recycle, Award } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen bg-background pt-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-forest-green/5 to-earth-brown/5" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#22543D_0%,transparent_50%)]" />
      </div>
      

      {/* Our Story Section */}
      <section className="py-24 px-16 relative">
        {/* Decorative leaf pattern */}
        <div className="absolute top-0 right-0 text-forest-green/10 transform rotate-180">
          <Leaf className="w-32 h-32" />
        </div>
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-5 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8 lg:col-span-3"
            >
              <div className="relative inline-block">
                {/* <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-forest-green to-earth-brown">Our Story</h2> */}
                <h2 className="text-4xl font-bold tracking-normal sm:text-5xl bg-clip-text text-transparent bg-black">Our Story</h2>

                {/* <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-forest-green to-earth-brown rounded-full"></div> */}

              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Founded with a vision to revolutionize the household products industry, PULPWOOD has grown from a small family business to a global manufacturer of premium disposable and household essentials.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                For over a decade, we&#39;ve ben committed to creating products that combine quality, sustainability, and innovation. Our journey has been defined by our dedication to excellence and our passion for creating products that enhance everyday living.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="pt-4"
              >
                <Link href="/contact">
                  <Button
                    className="bg-forest-green hover:bg-forest-green/90 text-white"
                    size="lg"
                  >
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-shadow duration-300 lg:col-span-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-forest-green/10 to-earth-brown/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image 
                src="/images/pulpwood aboutus.png" 
                alt="Our Story - Pulpwood's Journey" 
                className="object-cover w-full h-[500px] transform group-hover:scale-105 transition-transform duration-300"
                width={800}
                height={500}
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 px-16 bg-gradient-to-br from-forest-green/5 via-transparent to-earth-brown/5">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-forest-green to-earth-brown">Our Values</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Quality Excellence",
                description: "We are committed to creating products of the highest quality, using premium materials and rigorous quality control processes."
              },
              {
                title: "Sustainability",
                description: "Environmental responsibility is at the heart of our operations, from sourcing materials to manufacturing processes."
              },
              {
                title: "Innovation",
                description: "We continuously strive to innovate and improve our products to meet the evolving needs of our customers."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-forest-green/10 hover:border-forest-green/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  {index === 0 && <Award className="w-6 h-6 text-forest-green" />}
                  {index === 1 && <Recycle className="w-6 h-6 text-forest-green" />}
                  {index === 2 && <Leaf className="w-6 h-6 text-forest-green" />}
                  <h3 className="text-xl font-bold text-forest-green">{value.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-16 relative">
        {/* Decorative leaf pattern */}
        <div className="absolute top-0 right-0 text-forest-green/10 transform rotate-180">
          <Leaf className="w-48 h-48" />
        </div>
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Leadership Team</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Meet the experts behind our success
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "John Smith",
                role: "CEO & Founder",
                image: "/images/pic.webp",
                quote: "Leading the way in sustainable tissue manufacturing."
              },
              {
                name: "Sarah Johnson",
                role: "Chief Operations Officer",
                image: "/images/pic.webp",
                quote: "Optimizing processes for environmental responsibility."
              },
              {
                name: "Michael Chen",
                role: "Head of Product Development",
                image: "/images/pic.webp",
                quote: "Innovating for a greener tomorrow."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-forest-green/10 hover:border-forest-green/20 transition-all duration-300 hover:transform hover:scale-105 text-center relative group"
              >
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-forest-green to-earth-brown rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-forest-green/20 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-100">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                        width={160}
                        height={160}
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-forest-green mb-2">{member.name}</h3>
                <p className="text-earth-brown font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 italic text-sm">{member.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-16 bg-gradient-to-br from-forest-green to-earth-brown text-white relative overflow-hidden">
        {/* Manufacturing Process Showcase */}
        <section className="py-24 relative overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-white">Our Manufacturing Excellence</h2>
              <p className="mt-4 text-white leading-relaxed max-w-2xl mx-auto">
                Experience our state-of-the-art manufacturing process that combines innovation with environmental responsibility.
              </p>
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  title: "Raw Material Selection",
                  description: "Carefully sourced sustainable materials",
                  image: "/images/Raw Material Selection.jpeg"
                },
                {
                  title: "Processing",
                  description: "Advanced eco-friendly processing techniques",
                  image: "/images/Processing.jpeg"
                },
                {
                  title: "Quality Control",
                  description: "Rigorous testing at every stage",
                  image: "/images/Quality Control.jpeg"
                },
                {
                  title: "Packaging",
                  description: "Sustainable packaging solutions",
                  image: "/images/Packaging.jpeg"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <Image
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      width={300}
                      height={200}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                      <p className="text-white/80 text-sm">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Fix: Added -z-10 to these overlays */}
        <div className="absolute inset-0 bg-[url('/images/texture-pattern.svg')] opacity-10 -z-10" />
        <div className="absolute inset-0 bg-black/20 -z-10" />
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Journey</h2>
            <p className="mt-4 text-xl opacity-90">
              Become a part of our growing network of distributors and partners
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Contact Us
                </Button>
              </Link>
              <Link href="/gallery">
                <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white hover:text-primary">
                  View Gallery
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-24 px-16 relative">
        {/* Decorative leaf pattern */}
        <div className="absolute top-0 right-0 text-forest-green/10 transform rotate-180">
          <Leaf className="w-48 h-48" />
        </div>
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter text-forest-green">Frequently Asked Questions</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Find quick answers to common questions about our eco-friendly tissue and hygiene products.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What makes Pulpwood's tissue products eco-friendly?",
                answer: "Our products are made from responsibly sourced pulp, are biodegradable, and manufactured using environmentally conscious processes."
              },
              {
                question: "Do you offer bulk or B2B supply for hotels, offices, or institutions?",
                answer: "Yes, we specialize in supplying eco-friendly tissue and hygiene products in bulk for businesses, hotels, offices, and institutions. Contact us for tailored solutions."
              },
              {
                question: "Are Pulpwood products safe for sensitive skin?",
                answer: "Absolutely. Our products are dermatologically tested and free from harsh chemicals, making them safe for all skin types."
              },
              {
                question: "How can I become a distributor or partner with Pulpwood?",
                answer: "Simply fill out our contact form or call us. Our team will reach out to discuss partnership opportunities and next steps."
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-forest-green"
              >
                <h3 className="text-lg font-bold mb-2 text-forest-green">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}