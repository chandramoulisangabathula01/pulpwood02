'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import Image from 'next/image'

// Product data
const categories = [
  {
    id: 'paper-plates',
    name: 'Paper Plates',
    description: 'High-quality disposable paper plates for all occasions',
    image: '/images/pulpwood images/plain paper plates 7in 50p.webp',
    products: [
      {
        id: 'plates-5inch',
        name: 'Plain Paper Plates - 5 inches (50 pieces)',
        description: 'Eco-friendly 5-inch paper plates, perfect for snacks and appetizers',
        image: '/images/pulpwood images/plain paper plates 5in 50p.webp',
        features: ['50 pieces per pack', 'Eco-friendly material', 'Suitable for light snacks', 'Barcode: 8906156960316', 'Price: Rs. 65/-']
      },
      {
        id: 'plates-6inch',
        name: 'Plain Paper Plates - 6 inches (50 pieces)',
        description: 'Versatile 6-inch paper plates for everyday use',
        image: '/images/pulpwood images/plain paper plates 6in 50p.webp',
        features: ['50 pieces per pack', 'Biodegradable material', 'Ideal for small meals', 'Barcode: 8906156960330', 'Price: Rs. 80/-']
      },
      {
        id: 'plates-7inch',
        name: 'Plain Paper Plates - 7 inches (50 pieces)',
        description: 'Medium-sized paper plates perfect for regular meals',
        image: '/images/pulpwood images/plain paper plates 7in 50p.webp',
        additionalImages: [
          '/images/pulpwood images/plain paper plates 5in 50p.webp',
          '/images/pulpwood images/plain paper plates 6in 50p.webp'
        ],
        features: ['50 pieces per pack', 'Sturdy construction', 'Perfect for regular meals', 'Barcode: 8906156960354', 'Price: Rs. 99/-']
      },
      {
        id: 'plates-8inch',
        name: 'Plain Paper Plates - 8 inches (50 pieces)',
        description: 'Durable 8-inch paper plates for larger meals',
        image: '/images/pulpwood images/plain paper plates 8in 50p.webp',
        features: ['50 pieces per pack', 'Strong and durable', 'Suitable for full meals', 'Barcode: 8906156960378', 'Price: Rs. 128/-']
      },
      {
        id: 'plates-9inch',
        name: 'Plain Paper Plates - 9 inches (50 pieces)',
        description: 'Large 9-inch paper plates for generous portions',
        image: '/images/pulpwood images/plain paper plates 9in 50p.webp',
        features: ['50 pieces per pack', 'Extra-strong material', 'Ideal for large meals', 'Barcode: 8906156960392', 'Price: Rs. 150/-']
      },
      {
        id: 'plates-12inch',
        name: 'Plain Paper Plates - 12 inches (50 pieces)',
        description: 'Extra-large 12-inch paper plates for parties and special occasions',
        image: '/images/pulpwood images/plain paper plates 12in 50p.webp',
        features: ['50 pieces per pack', 'Premium quality', 'Perfect for parties and gatherings', 'Barcode: 8906156960415', 'Price: Rs. 225/-']
      }
    ]
  },
  {
    id: 'household-cleaners',
    name: 'Household Cleaners & Phenyl',
    description: 'Effective cleaning solutions for a fresh and hygienic home',
    image: '/images/pulpwood images/strong phenyl pack of 3.webp',
    products: [
      {
        id: 'rose-phenyl-1l',
        name: '1L Rose Perfumed Phenyl',
        description: 'Rose-scented phenyl for a pleasant fragrance while cleaning',
        image: '/images/pulpwood images/strong phenyl rose.webp',
        additionalImages: [
          '/images/pulpwood images/strong phenyl pack of 3.webp',
          '/images/pulpwood images/strong phenyl lemon.webp',
          '/images/pulpwood images/strong phenyl sandal.webp'
        ],
        features: ['1 Liter bottle', 'Rose fragrance', 'Effective disinfectant', 'Barcode: 8906156960231', 'Price: Rs. 109/-']
      },
      {
        id: 'sandal-phenyl-1l',
        name: '1L Sandal Perfumed Phenyl',
        description: 'Sandal-scented phenyl for long-lasting freshness',
        image: '/images/pulpwood images/strong phenyl sandal.webp',
        features: ['1 Liter bottle', 'Sandal fragrance', 'Kills germs and bacteria', 'Barcode: 8906156960255', 'Price: Rs. 109/-']
      },
      {
        id: 'lemon-phenyl-1l',
        name: '1L Lemon Perfumed Phenyl',
        description: 'Lemon-scented phenyl for a refreshing clean',
        image: '/images/pulpwood images/strong phenyl lemon.webp',
        features: ['1 Liter bottle', 'Lemon fragrance', 'Removes odors', 'Barcode: 8906156960248', 'Price: Rs. 109/-']
      },
      {
        id: 'jasmine-phenyl-1l',
        name: '1L Jasmine Perfumed Phenyl',
        description: 'Jasmine-scented phenyl for a soothing atmosphere',
        image: '/images/pulpwood images/strong phenyl jasmine.webp',
        features: ['1 Liter bottle', 'Jasmine fragrance', 'Long-lasting scent', 'Barcode: 8906156960545', 'Price: Rs. 109/-']
      },
      {
        id: 'black-floor-cleaner-1l',
        name: '1L Black Floor Cleaner',
        description: 'Specialized black floor cleaner for deep cleaning',
        image: '/images/pulpwood images/black floor cleaner.webp',
        features: ['1 Liter bottle', 'Specially formulated for dark floors', 'Removes tough stains', 'Barcode: 8906156960552', 'Price: Rs. 129/-']
      },
      {
        id: 'lemon-phenyl-5l',
        name: '5L Lemon Perfumed Phenyl',
        description: 'Bulk lemon-scented phenyl for commercial use',
        image: '/images/pulpwood images/floor cleaners.webp',
        features: ['5 Liter container', 'Lemon fragrance', 'Economical bulk pack', 'Barcode: 8906156960514', 'Price: Rs. 499/-']
      },
      {
        id: 'rose-phenyl-5l',
        name: '5L Rose Perfumed Phenyl',
        description: 'Bulk rose-scented phenyl for extended use',
        image: '/images/pulpwood images/floor cleaners.webp',
        features: ['5 Liter container', 'Rose fragrance', 'Value for money', 'Barcode: 8906156960507', 'Price: Rs. 499/-']
      },
      {
        id: 'sandal-phenyl-5l',
        name: '5L Sandal Perfumed Phenyl',
        description: 'Bulk sandal-scented phenyl for large areas',
        image: '/images/pulpwood images/floor cleaners.webp',
        features: ['5 Liter container', 'Sandal fragrance', 'Industrial strength', 'Barcode: 8906156960521', 'Price: Rs. 499/-']
      },
      {
        id: 'jasmine-phenyl-5l',
        name: '5L Jasmine Perfumed Phenyl',
        description: 'Bulk jasmine-scented phenyl for institutional use',
        image: '/images/pulpwood images/floor cleaners.webp',
        features: ['5 Liter container', 'Jasmine fragrance', 'Perfect for large spaces', 'Barcode: 8906156960538', 'Price: Rs. 499/-']
      },
      {
        id: 'black-floor-cleaner-5l',
        name: '5L Black Floor Cleaner',
        description: 'Bulk black floor cleaner for professional cleaning',
        image: '/images/pulpwood images/black floor cleaner.webp',
        features: ['5 Liter container', 'Professional grade', 'Ideal for commercial spaces', 'Barcode: 8906156960569', 'Price: Rs. 599/-']
      }
    ]
  },
  {
    id: 'napkins-tissues',
    name: 'Napkins & Tissues',
    description: 'Premium quality napkins and tissues for everyday comfort',
    image: '/images/pulpwood images/epic premium napkins.webp',
    products: [
      {
        id: 'table-top-napkins-100',
        name: 'Table Top Napkins (27x30, 1ply, 100 pieces)',
        description: 'High-quality table napkins for dining and everyday use',
        image: '/images/pulpwood images/napkins 100p.webp',
        features: ['100 pieces per pack', '27x30 cm size', 'Single-ply softness', 'Barcode: 8906156960002', 'Price: Rs. 89/-']
      },
      {
        id: 'table-top-napkins-50',
        name: 'Table Top Napkins (27x30, 1ply, 50 pieces)',
        description: 'Convenient pack of table napkins for smaller households',
        image: '/images/pulpwood images/napkins 50p.webp',
        features: ['50 pieces per pack', '27x30 cm size', 'Single-ply softness', 'Barcode: 8906156960019', 'Price: Rs. 49/-']
      },
      {
        id: 'value-pack-napkins',
        name: 'Value Pack Napkins (27x30, 1ply, 100 pieces)',
        description: 'Economical pack of napkins for budget-conscious consumers',
        image: '/images/pulpwood images/value pack soft napkins.webp',
        features: ['100 pieces per pack', '27x30 cm size', 'Great value for money', 'Barcode: 8906156960026', 'Price: Rs. 85/-'],
        additionalImages: [
          '/images/pulpwood images/value pack soft napkins top.webp',
          '/images/pulpwood images/value pack soft napkins side 2.webp',
          '/images/pulpwood images/value pack soft napkins side.webp',
        ],
      },
      {
        id: 'ultra-soft-napkin',
        name: 'Ultra Soft Napkin (9x9, 1ply)',
        description: 'Extra soft napkins for gentle use',
        image: '/images/pulpwood images/value pack soft napkins side.webp',
        features: ['Compact 9x9 cm size', 'Ultra-soft material', 'Single-ply comfort', 'Barcode: 8906156960262', 'Price: Rs. 59/-']
      },
      {
        id: 'epic-premium-napkin-large',
        name: 'Epic Premium Napkin (80 pieces, 27x30)',
        description: 'Premium quality large napkins for special occasions',
        image: '/images/pulpwood images/epic premium napkins.webp',
        additionalImages: [
          '/images/pulpwood images/epic premium napkins top.webp',
          '/images/pulpwood images/epic premium napkins left.webp',
          '/images/pulpwood images/epic premium napkins bottom.webp',
          '/images/pulpwood images/epic premium napkins pyramid.webp',
          '/images/pulpwood images/epic premium napkins 2.webp',
          '/images/pulpwood images/epic premium napkins 3.webp',
          
        ],
        features: ['80 pieces per pack', 'Large 27x30 cm size', 'Premium quality', 'Barcode: 8906156960293', 'Price: Rs. 60/-']
      },
      {
        id: 'epic-premium-napkin-small',
        name: 'Epic Premium Napkin (80 pieces, 22x22)',
        description: 'Premium quality medium-sized napkins for everyday use',
        image: '/images/pulpwood images/epic premium napkins pyramid.webp',
        features: ['80 pieces per pack', 'Medium 22x22 cm size', 'Premium quality', 'Barcode: 8906156960309', 'Price: Rs. 45/-'],
        additionalImages: [
          '/images/pulpwood images/epic premium napkins top.webp',
          '/images/pulpwood images/epic premium napkins left.webp',
          '/images/pulpwood images/epic premium napkins bottom.webp',
          '/images/pulpwood images/epic premium napkins pyramid.webp',
          '/images/pulpwood images/epic premium napkins 2.webp',
          '/images/pulpwood images/epic premium napkins 3.webp',
          
        ],
      },
      {
        id: 'face-tissue-box-100',
        name: 'Face Tissue Box (100 Pulls/200 Sheets)',
        description: 'Convenient box of facial tissues for home and office',
        image: '/images/pulpwood images/premium tissues  front.webp',
        features: ['100 pulls (200 sheets)', '20x20 cm size', 'Two-ply softness', 'Barcode: 8906156960484', 'Price: Rs. 89/-']
      },
      {
        id: 'face-tissue-box-200',
        name: 'Face Tissue Box (200 Pulls/400 Sheets)',
        description: 'Large box of facial tissues for extended use',
        image: '/images/pulpwood images/premium tissues  front 2.webp',
        features: ['200 pulls (400 sheets)', '20x20 cm size', 'Two-ply softness', 'Barcode: 8906156960491', 'Price: Rs. 169/-']
      }
    ]
  },
  {
    id: 'toilet-rolls',
    name: 'Toilet Rolls',
    description: 'Soft and durable toilet paper for everyday comfort',
    image: '/images/pulpwood images/tissue roll 6in1.webp',
    products: [
      {
        id: 'toilet-roll-4pack',
        name: 'Toilet Rolls (4 in 1 Pack, 360 Pulls x 4)',
        description: 'Premium 3-ply toilet paper in a convenient 4-pack',
        image: '/images/pulpwood images/tissue roll 6in1.webp',
        features: ['4 rolls per pack', '360 pulls per roll', 'Triple-ply softness', 'Barcode: 8906156960033', 'Price: Rs. 369/-']
      },
      {
        id: 'toilet-roll-6pack',
        name: 'Toilet Rolls (6 in 1 Pack, 160 Pulls x 6)',
        description: 'Premium 3-ply toilet paper in a value 6-pack',
        image: '/images/pulpwood images/tissue roll 6in1.webp',
        features: ['6 rolls per pack', '160 pulls per roll', 'Triple-ply softness', 'Barcode: 8906156960040', 'Price: Rs. 279/-']
      },
      {
        id: 'toilet-roll-12pack',
        name: 'Toilet Rolls (12 in 1 Pack, 160 Pulls x 12)',
        description: 'Premium 3-ply toilet paper in an economical 12-pack',
        image: '/images/pulpwood images/tissue roll 6in1.webp',
        features: ['12 rolls per pack', '160 pulls per roll', 'Triple-ply softness', 'Barcode: 8906156960057', 'Price: Rs. 529/-']
      },
      {
        id: 'toilet-roll-single-400',
        name: 'Toilet Roll (Single, 400 Pulls)',
        description: 'Large single roll of 2-ply toilet paper',
        image: '/images/pulpwood images/tissue roll 6in1.webp',
        features: ['Single roll', '400 pulls', 'Double-ply softness', 'Barcode: 8906156960118', 'Price: Rs. 89/-']
      },
      {
        id: 'toilet-roll-single-200',
        name: 'Toilet Roll (Single, 200 Pulls)',
        description: 'Standard single roll of 2-ply toilet paper',
        image: '/images/pulpwood images/tissue roll 6in1.webp',
        features: ['Single roll', '200 pulls', 'Double-ply softness', 'Barcode: 8906156960101', 'Price: Rs. 49/-']
      }
    ]
  },
  {
    id: 'bleaching-naphthalene',
    name: 'Bleaching Powder & Naphthalene Balls',
    description: 'Effective cleaning and pest control solutions',
    image: '/images/pulpwood images/bleaching powder 1kg.webp',
    products: [
      {
        id: 'naphthalene-balls-500g',
        name: 'Naphthalene Balls (500g)',
        description: 'Effective naphthalene balls for moth and insect control',
        image: '/images/pulpwood images/napthalene balls 500g.webp',
        features: ['500g pack', 'Long-lasting protection', 'Prevents moth damage', 'Barcode: 8906156960170', 'Price: Rs. 229/-']
      },
      {
        id: 'naphthalene-balls-200g',
        name: 'Naphthalene Balls (200g)',
        description: 'Compact pack of naphthalene balls for smaller spaces',
        image: '/images/pulpwood images/napthalene balls 200g.webp',
        features: ['200g pack', 'Effective insect repellent', 'Ideal for wardrobes', 'Barcode: 8906156960163', 'Price: Rs. 99/-']
      },
      {
        id: 'bleaching-powder-1kg',
        name: 'Bleaching Powder (1Kg)',
        description: 'Powerful bleaching powder for deep cleaning and disinfection',
        image: '/images/pulpwood images/bleaching powder 1kg.webp',
        features: ['1kg pack', 'Strong disinfectant', 'Removes tough stains', 'Barcode: 8906156960200', 'Price: Rs. 129/-']
      },
      {
        id: 'bleaching-powder-500g',
        name: 'Bleaching Powder (500g)',
        description: 'Convenient pack of bleaching powder for regular cleaning',
        image: '/images/pulpwood images/bleaching powder 500g.webp',
        features: ['500g pack', 'Effective sanitizer', 'Whitens surfaces', 'Barcode: 8906156960194', 'Price: Rs. 69/-']
      }
    ]
  },
  {
    id: 'paper-cups',
    name: 'Disposable Paper Cups',
    description: 'Eco-friendly disposable cups for hot and cold beverages',
    image: '/images/pulpwood images/paper cups 150ml 100p.webp',
    products: [
      {
        id: 'paper-cups-70ml',
        name: 'Paper Cups (70ml, 100 pieces)',
        description: 'Small paper cups ideal for espresso and sampling',
        image: '/images/pulpwood images/paper cups 90ml 100p.webp', // Note: image seems to be 90ml one
        features: ['100 pieces per pack', '70ml capacity', 'Food-grade material', 'Barcode: 8906156960439', 'Price: Rs. 120/-']
      },
      {
        id: 'paper-cups-90ml',
        name: 'Paper Cups (90ml, 100 pieces)',
        description: 'Compact paper cups for small servings',
        image: '/images/pulpwood images/paper cups 90ml 100p.webp',
        features: ['100 pieces per pack', '90ml capacity', 'Eco-friendly design', 'Barcode: 8906156960071', 'Price: Rs. 150/-']
      },
      {
        id: 'paper-cups-110ml',
        name: 'Paper Cups (110ml, 100 pieces)',
        description: 'Medium-sized paper cups for tea and coffee',
        image: '/images/pulpwood images/paper cups 110ml 100p.webp',
        features: ['100 pieces per pack', '110ml capacity', 'Leak-resistant', 'Barcode: 8906156960187', 'Price: Rs. 179/-']
      },
      {
        id: 'paper-cups-150ml',
        name: 'Paper Cups (150ml, 100 pieces)',
        description: 'Standard paper cups for hot and cold beverages',
        image: '/images/pulpwood images/paper cups 150ml 100p.webp',
        features: ['100 pieces per pack', '150ml capacity', 'Heat-resistant', 'Barcode: 8906156960132', 'Price: Rs. 199/-']
      },
      {
        id: 'paper-cups-210ml',
        name: 'Paper Cups (210ml, 100 pieces)',
        description: 'Large paper cups for generous servings',
        image: '/images/pulpwood images/paper cups 210ml 100p.webp',
        features: ['100 pieces per pack', '210ml capacity', 'Sturdy construction', 'Barcode: 8906156960149', 'Price: Rs. 239/-']
      },
      {
        id: 'paper-cups-250ml-100',
        name: 'Paper Cups (250ml, 100 pieces)',
        description: 'Extra-large paper cups for cold drinks and shakes',
        image: '/images/pulpwood images/paper cups 250ml 100p.webp',
        features: ['100 pieces per pack', '250ml capacity', 'Premium quality', 'Barcode: 8906156960156', 'Price: Rs. 279/-']
      },
      {
        id: 'paper-cups-250ml-50',
        name: 'Paper Cups (250ml, 50 pieces)',
        description: 'Convenient pack of extra-large paper cups',
        image: '/images/pulpwood images/paper cups 250ml 50p.webp',
        features: ['50 pieces per pack', '250ml capacity', 'Ideal for parties', 'Barcode: 8906156960217', 'Price: Rs. 149/-']
      }
    ]
  },
  {
    id: 'kitchen-towels',
    name: 'Kitchen Towels',
    description: 'Absorbent and durable kitchen towels for everyday cleaning',
    image: '/images/pulpwood images/kitchen towel.webp',
    products: [
      {
        id: 'kitchen-towel-single',
        name: 'Kitchen Towel (Single Pack, 60 Pulls)',
        description: '5-in-1 air freshener pyramid for long-lasting fragrance and freshness',
        image: '/images/pulpwood images/kitchen towel.webp',
        features: ['Single roll', '60 pulls', 'Super absorbent', 'Barcode: 8906156960088', 'Price: Rs. 89/-']
      },
      {
        id: 'kitchen-towel-2pack',
        name: 'Kitchen Towel (2 in 1 Pack, 60 Pulls)',
        description: 'Convenient 2-pack of kitchen towels for extended use',
        image: '/images/pulpwood images/kitchen towel 2in1.webp',
        features: ['2 rolls per pack', '60 pulls per roll', 'Strong when wet', 'Barcode: 8906156960064', 'Price: Rs. 169/-']
      },
      {
        id: 'kitchen-towel-4pack',
        name: 'Kitchen Towel (4 in 1 Pack, 60 Pulls)',
        description: 'Economical 4-pack of kitchen towels for family use',
        image: '/images/pulpwood images/kitchen towel 4in1.webp',
        features: ['4 rolls per pack', '60 pulls per roll', 'Value for money', 'Barcode: 8906156960125', 'Price: Rs. 329/-']
      }
    ]
  },
  {
    id: 'Air Fresher',
    name: 'Air Fresher ',
    description: 'Air Fresher for Cardboard, Bedroom, kitchen, Car, Room, etc ',
    image: '/images/pulpwood images/air freshner 5in1 pyramid.webp',
    products: [
      {
        id: 'Air-Fresher-5in1',
        name: 'Air Fresher 5in1 Multi Fragrance Cubes',
        description: '5-in-1 air freshener cubes for long-lasting fragrance and freshness',
        image: '/images/pulpwood images/air freshner 5in1 pyramid.webp',
        additionalImages: [
          '/images/pulpwood images/air freshner 5in1.webp',
        ],
        features: ['5-in-1 fragrance technology', 'Long-lasting freshness', 'Compact design', 'Barcode: 8906156960835', 'Price: Rs. 169/-']
      },
      {
        id: 'air freshner balls',
        name: 'Air Fresher Balls Multi Fragrance ',
        description: 'air freshener balls for long-lasting fragrance and freshness',
        image: '/images/pulpwood images/air freshner balls.webp',
        features: ['easy to use', 'Long-lasting freshness', 'Compact design', 'Barcode: 8906156960859', 'Price: Rs. 129/-']
      },
      {
        id: 'air freshner round assorted fragrance',
        name: 'air freshner round assorted fragrance',
        description: 'air freshener round assorted fragrance for long-lasting fragrance and freshness',
        image: '/images/pulpwood images/air freshner round assorted fragrance.webp',
        features: ['easy to use', 'Long-lasting freshness', 'Compact design', 'Barcode: 8906156960842', 'Price: Rs. 79/-']

      }
    ]
  },
  {
    id: 'Wooden Products',
    name: 'Wooden Products',
    description: 'Air Fresher for Cardboard, Bedroom, kitchen, Car, Room, etc ',
    image: '/images/pulpwood images/air freshner 5in1 pyramid.webp',
    products: [
      {
        id: "disposable-Brich-wooden-spoon",
        name: "disposable Brich wooden spoon",
        description: "disposable Brich wooden spoon 16 cm 50\'s ",
        image: "/images/pulpwood images/disposable birch wooden spoons 16cm 50's rs99.webp",
        features: ['easy to use', 'durable', 'Compact design', 'Barcode: 8906156960729', 'Price: Rs. 99/-'],
        additionalImages: [
          '/images/pulpwood images/disposable spoons.webp',
        ],
      },
      {
        id: 'premium wooden toothstick',
        name: 'premium wooden toothstick',
        description: 'premium wooden toothstick 16 cm 50\'s ',
        image: '/images/pulpwood images/toothstick pyramid.webp',
        features: [ 'easy to use', 'durable', 'Compact design', 'Barcode: 8906156960729', 'Price: Rs. 99/-'],
        additionalImages: [
          '/images/pulpwood images/toothstick front.webp',
          '/images/pulpwood images/toothstick top.webp',
        ],
      },
      
      
    ]
  },
  {
    id: 'Reusable-Food-Containers',
    name: 'Reusable Food Containers',
    description: 'Eco-friendly and durable food containers for everyday use',
    image: '/images/pulpwood images/reusable container.png',
    products: [
      {
        id: '100ml-container',
        name: '100ml Container (40 Pieces)',
        description: 'Compact 100ml reusable food containers',
        image: '/images/pulpwood images/reusable food containers 100ml 40p.webp',
        features: ['40 pieces per pack', 'Eco-friendly material', 'Durable construction','Barcode: 8906156960866',  'Microwave safe', 'Price: Rs. ___/-']
      },
      {
        id: '250ml-container',
        name: '250ml Container (20 Pieces)',
        description: 'Medium 250ml reusable food containers',
        image: '/images/pulpwood images/reusable food containers 250ml 20p.webp',
        features: ['20 pieces per pack', 'Durable construction', 'Microwave safe',  'Barcode: 8906156960873', 'Price: Rs. ___/-']
      },
      {
        id: '500ml-container',
        name: '500ml Container (20 Pieces)',
        description: 'Large 500ml reusable food containers',
        image: '/images/pulpwood images/reusable food containers 500ml 20p.webp',
        features: ['20 pieces per pack', 'Leak-proof design',  'Freezer safe','Barcode: 8906156960880', 'Price: Rs. ___/-']
      },
      {
        id: '750ml-container',
        name: '750ml Container (12 Pieces)',
        description: 'Extra large 750ml reusable food containers',
        image: '/images/pulpwood images/reusable food containers 750ml 12p.webp',
        features: ['12 pieces per pack', 'Microwave safe', 'Durable construction','Barcode: 8906156960897', 'Price: Rs. ___/-']
      },
      {
        id: '1000ml-container',
        name: '1000ml Container (12 Pieces)',
        description: 'Jumbo 1000ml reusable food containers',
        image: '/images/pulpwood images/reusable food containers 1000ml 12p.webp',
        features: ['12 pieces per pack', 'Freezer safe', 'Eco-friendly material','Barcode: 8906156960903', 'Price: Rs. ___/-']
      }
    ]
  }
]

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  additionalImages?: string[];
  features: string[];
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all-products')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([])
  const [page, setPage] = useState(1)
  const productsPerPage = 12

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setCurrentImageIndex(0)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackClick = () => {
    setSelectedProduct(null)
  }
  
  const handleNextImage = () => {
    if (!selectedProduct) return
    const imageCount = selectedProduct.additionalImages ? selectedProduct.additionalImages.length + 1 : 1
    setCurrentImageIndex((prev) => (prev + 1) % imageCount)
  }
  
  const handlePrevImage = () => {
    if (!selectedProduct) return
    const imageCount = selectedProduct.additionalImages ? selectedProduct.additionalImages.length + 1 : 1
    setCurrentImageIndex((prev) => (prev - 1 + imageCount) % imageCount)
  }
  
  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index)
  }

  // Update visible products based on pagination
  useEffect(() => {
    if (!selectedCategory || selectedCategory === 'all-products') {
      // Calculate all products inside the effect to avoid dependency issues
      const allProducts = categories.flatMap(category => category.products)
      const endIndex = page * productsPerPage
      setVisibleProducts(allProducts.slice(0, endIndex))
    } else {
      const categoryProducts = categories.find(cat => cat.id === selectedCategory)?.products || []
      setVisibleProducts(categoryProducts)
    }
  }, [page, productsPerPage, selectedCategory])
  
  // Load more products - increments the page which triggers useEffect to append more products
  const loadMore = () => {
    setPage(prevPage => prevPage + 1)
  }

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section (commented out as in original) */}
      {/* <section className="py-24 bg-gradient-to-b from-gray-50 to-white"> ... </section> */}

      {selectedProduct ? (
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <Button 
              variant="ghost" 
              onClick={handleBackClick} 
              className="mb-6"
            >
              ← Back to Products
            </Button>
            
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-lg relative"
                >
                  <Image 
                    src={currentImageIndex === 0 ? selectedProduct.image : 
                      (selectedProduct.additionalImages && selectedProduct.additionalImages[currentImageIndex - 1]) || selectedProduct.image} 
                    alt={`${selectedProduct.name} - Image ${currentImageIndex + 1}`} 
                    className="w-full h-full object-contain"
                    width={500}
                    height={500}
                  />
                  {selectedProduct.additionalImages && selectedProduct.additionalImages.length > 0 && (
                    <>
                      <button 
                        onClick={handlePrevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
                        aria-label="Previous image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                      </button>
                      <button 
                        onClick={handleNextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
                        aria-label="Next image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                      </button>
                    </>
                  )}
                </motion.div>
                
                {selectedProduct.additionalImages && selectedProduct.additionalImages.length > 0 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    <button 
                      onClick={() => handleThumbnailClick(0)}
                      className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${currentImageIndex === 0 ? 'border-primary' : 'border-transparent'}`}
                    >
                      <Image 
                        src={selectedProduct.image} 
                        alt={`${selectedProduct.name} - Thumbnail 1`} 
                        className="w-full h-full object-cover"
                        width={64}
                        height={64}
                      />
                    </button>
                    {selectedProduct.additionalImages.map((img, idx) => (
                      <button 
                        key={idx}
                        onClick={() => handleThumbnailClick(idx + 1)}
                        className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${currentImageIndex === idx + 1 ? 'border-primary' : 'border-transparent'}`}
                      >
                        <Image 
                          src={img} 
                          alt={`${selectedProduct.name} - Thumbnail ${idx + 2}`} 
                          className="w-full h-full object-cover"
                          width={64}
                          height={64}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl font-bold">{selectedProduct.name}</h2>
                  <p className="text-gray-500 mt-2">{selectedProduct.description}</p>
                  {selectedProduct.features.find(f => f.includes('Price:')) && (
                    <p className="text-xl font-semibold text-primary mt-3">
                      {selectedProduct.features.find(f => f.includes('Price:'))}
                    </p>
                  )}
                  {selectedProduct.features.find(f => f.includes('Barcode:')) && (
                    <p className="text-sm text-gray-500 mt-1">
                      {selectedProduct.features.find(f => f.includes('Barcode:'))}
                    </p>
                  )}
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProduct.features
                      .filter(feature => !feature.includes('Price:') && !feature.includes('Barcode:'))
                      .map((feature: string, index: number) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                          className="flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4">
                  <Button size="lg">Request Information</Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ) : (
        /* Product Categories and Listings */
        <section className="py-12">
          <div className="container px-4 md:px-6">
            {/* --- Mobile View: Horizontal Tabs on Top --- */}
            <div className="md:hidden">
              <Tabs
                defaultValue={categories[0].id}
                value={selectedCategory}
                onValueChange={setSelectedCategory}
                className="w-full"
              >
                {/* MODIFIED LINE BELOW: Removed 'flex-wrap' */}
                <TabsList className="flex overflow-x-scroll justify-start gap-2 pb-2 mx-auto bg-transparent mb-8">
                  <TabsTrigger
                    key="all-products-mobile"
                    value="all-products"
                    className="text-sm px-3 py-2 rounded-full bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-primary/10 data-[state=active]:hover:bg-primary transition-colors duration-300 whitespace-nowrap flex-shrink-0"
                  >
                    All Products
                  </TabsTrigger>
                  {categories.map((category) => (
                    <TabsTrigger
                      key={`${category.id}-mobile`}
                      value={category.id}
                      className="text-sm px-3 py-2 rounded-full  bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-primary/10 data-[state=active]:hover:bg-primary transition-colors duration-300 whitespace-nowrap flex-shrink-0"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent key="all-products-mobile-content" value="all-products" className="space-y-8 mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <h2 className="text-3xl font-bold">All Products</h2>
                    <p className="text-gray-500">Browse our complete collection of high-quality products</p>
                  </motion.div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {visibleProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="cursor-pointer"
                        onClick={() => handleProductClick(product)}
                      >
                        <Card className="overflow-hidden h-full">
                          <div className="aspect-video overflow-hidden">
                            <Image 
                              src={product.image} 
                              alt={product.name} 
                              className="w-full h-full object-contain transition-transform hover:scale-105 duration-300"
                              width={400}
                              height={300}
                            />
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                            <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                            {product.features.find(f => f.includes('Price:')) && (
                              <p className="text-lg font-semibold text-primary mb-4">
                                {product.features.find(f => f.includes('Price:'))}
                              </p>
                            )}
                            <Button variant="outline" size="sm">View Details</Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                  
                  {selectedCategory === 'all-products' && visibleProducts.length < categories.flatMap(category => category.products).length && (
  <div className="mt-8 text-center">
    <Button onClick={loadMore} variant="outline" size="lg">
      Load More Products
    </Button>
  </div>
)}
                </TabsContent>
                
                {categories.map((category) => (
                  <TabsContent key={`${category.id}-mobile-content`} value={category.id} className="space-y-8 mt-0">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4"
                    >
                      <h2 className="text-3xl font-bold">{category.name}</h2>
                      <p className="text-gray-500">{category.description}</p>
                    </motion.div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      {category.products.map((product, index) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                          className="cursor-pointer"
                          onClick={() => handleProductClick(product)}
                        >
                          <Card className="overflow-hidden h-full">
                            <div className="aspect-video overflow-hidden">
                              <Image 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-full object-contain transition-transform hover:scale-105 duration-300"
                                width={400}
                                height={300}
                              />
                            </div>
                            <CardContent className="p-6">
                              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                              <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                              {product.features.find(f => f.includes('Price:')) && (
                                <p className="text-lg font-semibold text-primary mb-4">
                                  {product.features.find(f => f.includes('Price:'))}
                                </p>
                              )}
                              <Button variant="outline" size="sm">View Details</Button>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            {/* --- Desktop View: Vertical Tabs on Left --- */}
            <div className="hidden md:block relative z-45">
              {/* <h3 className="text-xl font-semibold mb-4 px-1 text-gray-800">Categories</h3> */}
              <Tabs
                defaultValue={categories[0].id}
                value={selectedCategory}
                onValueChange={setSelectedCategory}
                orientation="vertical"
                className="flex gap-x-8 lg:gap-x-12" 
              >
                <TabsList
                  className="md:w-1/4 lg:w-1/5 xl:w-1/7 bg-transparent p-0 sticky top-24 self-start"
                >
                  <div className="space-y-1 max-h-[calc(160vh-20rem)] overflow-y-auto pr-2">
                    <TabsTrigger
                      key="all-products-desktop"
                      value="all-products"
                      className="w-full  mt-96 text-left justify-start text-gray-600 hover:text-primary hover:bg-gray-50 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:font-semibold rounded-md px-3 py-2.5 transition-all duration-200"
                    >
                      All Products
                    </TabsTrigger>
                    {categories.map((category) => (
                      <TabsTrigger
                        key={`${category.id}-desktop`}
                        value={category.id}
                        className="w-full text-left justify-start text-gray-600 hover:text-primary hover:bg-gray-50 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:font-semibold rounded-md px-3 py-2.5 transition-all duration-200"
                      >
                        {category.name}
                      </TabsTrigger>
                    ))}
                  </div>
                </TabsList>

                <div className="flex-grow min-w-0">
                  <TabsContent key="all-products-desktop-content" value="all-products" className="space-y-8 mt-0">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4"
                    >
                      <h2 className="text-3xl font-bold">All Products</h2>
                      <p className="text-gray-500">Browse our complete collection of high-quality products</p>
                    </motion.div>

                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                      {visibleProducts.map((product, index) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                          className="cursor-pointer"
                          onClick={() => handleProductClick(product)}
                        >
                          <Card className="overflow-hidden h-full">
                            <div className="aspect-video overflow-hidden">
                              <Image 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-full object-contain transition-transform hover:scale-105 duration-300"
                                width={400}
                                height={300}
                              />
                            </div>
                            <CardContent className="p-6">
                              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                              <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                              {product.features.find(f => f.includes('Price:')) && (
                                <p className="text-lg font-semibold text-primary mb-4">
                                  {product.features.find(f => f.includes('Price:'))}
                                </p>
                              )}
                              <Button variant="outline" size="sm">View Details</Button>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                    
                    {selectedCategory === 'all-products' && visibleProducts.length < categories.flatMap(category => category.products).length && (
                      <div className="mt-8 text-center">
                        <Button onClick={loadMore} variant="outline" size="lg">
                          Load More Products
                        </Button>
                      </div>
                    )}
                  </TabsContent>
                  
                  {categories.map((category) => (
                    <TabsContent key={`${category.id}-desktop-content`} value={category.id} className="space-y-8 mt-0">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                      >
                        <h2 className="text-3xl font-bold">{category.name}</h2>
                        <p className="text-gray-500">{category.description}</p>
                      </motion.div>

                      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                        {category.products.map((product, index) => (
                          <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="cursor-pointer"
                            onClick={() => handleProductClick(product)}
                          >
                            <Card className="overflow-hidden h-full">
                              <div className="aspect-video overflow-hidden">
                                <Image 
                                  src={product.image} 
                                  alt={product.name} 
                                  className="w-full h-full object-contain transition-transform hover:scale-105 duration-300"
                                  width={400}
                                  height={300}
                                />
                              </div>
                              <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                                <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                                {product.features.find(f => f.includes('Price:')) && (
                                  <p className="text-lg font-semibold text-primary mb-4">
                                    {product.features.find(f => f.includes('Price:'))}
                                  </p>
                                )}
                                <Button variant="outline" size="sm">View Details</Button>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </div>
              </Tabs>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative z-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Interested in Our Products?</h2>
            <p className="mt-4 text-xl opacity-90">
              Contact us for pricing, samples, or to become a distributor
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">Request Catalog</Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white hover:text-primary">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}