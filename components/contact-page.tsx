'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Mail, Phone, MapPin, Globe, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Contact Us</h1>
            <p className="mt-4 text-xl text-gray-500">
              We&apos;re here to help with any questions about our products or services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Get in Touch</h2>
                <p className="text-gray-500 mb-8">
                  Have questions about our products, distribution opportunities, or anything else? Our team is ready to assist you.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: Mail, title: 'Email Us', content: 'info@pulpwood.com', href: 'mailto:info@pulpwood.com' },
                  { icon: Phone, title: 'Call Us', content: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                  { icon: MapPin, title: 'Visit Us', content: '123 Business Avenue, Suite 100, New York, NY 10001', href: 'https://maps.google.com' },
                  { icon: Globe, title: 'Global Presence', content: 'We serve customers worldwide with distribution centers across major regions', href: null },
                  { icon: Clock, title: 'Business Hours', content: 'Monday - Friday: 9:00 AM - 5:00 PM EST', href: null },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-2 bg-primary/10 rounded-full">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-gray-500 hover:text-primary transition-colors"
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-500">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">Company</label>
                  <Input id="company" placeholder="Your company" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="Message subject" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter">Our Location</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Visit our headquarters or one of our distribution centers
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg"
          >
            {/* Placeholder for map - in a real implementation, you would integrate Google Maps or another mapping service */}
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">PULPWOOD Headquarters</h3>
                <p className="text-gray-500">123 Business Avenue, Suite 100, New York, NY 10001</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Find quick answers to common questions
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How can I become a distributor?",
                answer: "To become a distributor, please fill out our contact form with your company details and distribution interests. Our team will reach out to discuss partnership opportunities and provide you with our distributor information package."
              },
              {
                question: "Do you offer product samples?",
                answer: "Yes, we offer product samples to qualified businesses. Please contact our sales team with your specific requirements, and we'll arrange for samples to be sent to you."
              },
              {
                question: "What are your minimum order quantities?",
                answer: "Minimum order quantities vary by product line. We offer flexible options for both small businesses and large distributors. Contact our sales team for specific information about the products you're interested in."
              },
              {
                question: "Do you ship internationally?",
                answer: "Yes, we ship to customers worldwide. Shipping costs and delivery times vary by location. Please contact us for specific information about shipping to your region."
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                <p className="text-gray-500">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}