
"use client"

import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


export default function About() {
  const teamMembers = [
    {
      name: "Chandan Das",
      role: "Founder & Lead Technician",
      bio: "With over 10 years of experience in the tech industry, Chandan specializes in hardware repairs and network solutions.",
      image: "/img/team-1.jpg"
    },
    {
      name: "Suman Roy",
      role: "CCTV Specialist",
      bio: "Suman has installed hundreds of CCTV systems across Kolkata and is certified in surveillance technology.",
      image: "/img/team-2.jpg"
    },
    {
      name: "Priya Sharma",
      role: "Mobile Repair Expert",
      bio: "Priya handles all mobile device repairs with precision and care, from screen replacements to motherboard repairs.",
      image: "/img/team-3.jpg"
    }
  ];

  const milestones = [
    { year: "2012", event: "Founded as a small computer repair shop in Laketown" },
    { year: "2015", event: "Expanded to offer CCTV installation services" },
    { year: "2017", event: "Added mobile repair division" },
    { year: "2019", event: "Moved to current location on Dakhindari Road" },
    { year: "2021", event: "Became authorized service provider for multiple brands" },
    { year: "2023", event: "Launched drone sales and service division" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About Us | CS IT Tech Support - Kolkata's Trusted Tech Repair Service</title>
        <meta name="description" content="Learn about CS IT Tech Support - Kolkata's premier computer, CCTV, and mobile repair service with 10+ years of trusted service." />
      </Head>

      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About CS IT Tech Support</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your trusted technology partner in Kolkata for over a decade
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
              <p className="text-gray-600 mb-6">
                Founded in 2012, CS IT Tech Support began as a small computer repair shop in Laketown, Kolkata. What started as a one-person operation has grown into a full-service technology solutions provider serving both residential and commercial clients across the city.
              </p>
              <p className="text-gray-600 mb-6">
                Our founder, Chandan Das, recognized the need for reliable, affordable tech support in the local community. With a passion for technology and problem-solving, he built a team of skilled technicians who share his commitment to quality service.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be one of Kolkata's most trusted names in computer repair, CCTV installation, and mobile device services. Our journey has been guided by one simple principle: treat every customer's device as if it were our own.
              </p>
            </motion.div>
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image 
                src="/img/img (9).jpeg" 
                alt="Our workshop" 
                width={600} 
                height={400} 
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg max-w-xs">
                <h3 className="text-xl font-bold mb-2">10+ Years</h3>
                <p>Of trusted service in Kolkata</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Approach</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with old-fashioned customer service to deliver solutions that work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                ),
                title: "Speed",
                description: "Most repairs completed within 24 hours because we know you can't afford downtime."
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                ),
                title: "Quality",
                description: "We use only genuine parts and follow manufacturer guidelines for all repairs."
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                ),
                title: "Value",
                description: "Competitive pricing with no hidden fees and a warranty on all services."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our certified technicians bring years of experience and specialized training to every repair.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="h-64 relative overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    layout="fill" 
                    objectFit="cover" 
                    className="transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth and development over the years.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-full md:w-1/2 p-6 rounded-xl shadow-md bg-white ${index % 2 === 0 ? 'ml-0 md:ml-6' : 'mr-0 md:mr-6'}`}>
                    {/* <div className={`absolute top-6 w-6 h-6 rounded-full bg-blue-600 border-4 border-white ${index % 2 === 0 ? '-left-3 md:-left-12' : '-right-3 md:-right-12'}`}></div> */}
                    <h3 className="text-xl font-bold text-blue-600 mb-2">{milestone.year}</h3>
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Our Service?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Join thousands of satisfied customers who trust us with their technology needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/#contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Contact Us
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:9800810334"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
}