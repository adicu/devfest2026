'use client';

import { motion } from 'framer-motion';
import { Russo_One } from 'next/font/google';
import { Instagram } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Sidebar from "@/components/sidebar";

// Load Russo One font
const russo = Russo_One({
  weight: '400',
  subsets: ['latin'],
});

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring" as const,
        stiffness: 100,
        duration: 0.8 
      }
    },
  };

  const faqs = [
    {
      question: "What is Columbia DevFest?",
      answer: "Columbia DevFest is a hackathon hosted by ADI Columbia at Columbia University. It's a weekend-long event where students come together to build innovative projects, learn new technologies, and network with industry professionals."
    },
    {
      question: "When and where is the event?",
      answer: "Columbia DevFest 2026 will take place on February 8th, 2026 at Columbia University in the City of New York. The exact venue details will be announced closer to the event date."
    },
    {
      question: "Who can participate?",
      answer: "The event is open to all college students, recent graduates, and high school students. You don't need to be a Columbia student to participate - we welcome students from all universities!"
    },
    {
      question: "Do I need to pay to participate?",
      answer: "No! Columbia DevFest is completely free to attend. We provide meals, snacks, and all the resources you'll need for the weekend."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, and any development tools you prefer. We'll provide Wi-Fi, power outlets, and other necessary infrastructure. Don't forget to bring your student ID!"
    },
    {
      question: "Can I work in a team?",
      answer: "Yes! You can work individually or in teams of up to 4 people. We encourage collaboration and will have team formation activities at the beginning of the event."
    },
    {
      question: "What are the prizes?",
      answer: "We'll have exciting prizes for the winning teams across different categories. Prize details will be announced closer to the event date."
    },
    {
      question: "Will there be mentors and workshops?",
      answer: "Absolutely! We'll have industry professionals, alumni, and experienced developers available as mentors throughout the event. We'll also host workshops on various technologies and development topics."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start pt-10 p-8 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/space-bg.png')] bg-cover bg-center bg-no-repeat z-0"
        aria-hidden="true"
      />

      {/* Sidebar */}
      <Sidebar />

      {/* Navigation */}
      <nav className="relative z-20 mb-8">
        <Link 
          href="/" 
          className={`${russo.className} text-2xl font-bold text-white hover:text-purple-300 transition-colors`}
        >
          ← Back to Home
        </Link>
      </nav>

      {/* Animated Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center w-full text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.h1
          className={`${russo.className} text-5xl sm:text-6xl md:text-7xl font-bold mb-12 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]`}
          variants={itemVariants}
        >
          FAQ
        </motion.h1>

        {/* FAQ Items */}
        <motion.div 
          className="w-full space-y-4"
          variants={itemVariants}
        >
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 hover:bg-white/5 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className={`${russo.className} text-lg font-bold pr-4`}>
                    {faq.question}
                  </h3>
                  <span className={`text-2xl transition-transform ${openFAQ === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </div>
              </button>
              
              {openFAQ === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="mt-12 p-6 bg-purple-600/20 backdrop-blur-sm rounded-lg border border-white/20"
          variants={itemVariants}
        >
          <h3 className={`${russo.className} text-xl font-bold mb-2`}>Still have questions?</h3>
          <p className="text-gray-300">
            Feel free to reach out to us on Instagram or email us at{' '}
            <a href="mailto:devfest@adicu.com" className="text-purple-300 hover:underline">
              devfest@adicu.com
            </a>
          </p>
        </motion.div>
      </motion.div>

      {/* Container for bottom-left links */}
      <div className="absolute bottom-8 left-8 z-30 flex items-center space-x-4">
        {/* Instagram Link */}
        <a
          href="https://www.instagram.com/adicolumbia/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ADI Columbia Instagram"
          className="text-white/70 hover:text-white/90 transition-colors cursor-pointer"
        >
          <Instagram size={28} />
        </a>

        {/* Code of Conduct Link */}
        <a
          href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="MLH Code of Conduct"
          className="text-sm font-sans text-white/70 hover:text-white/90 hover:underline transition-colors cursor-pointer"
        >
          Code of Conduct
        </a>
      </div>
    </main>
  );
}
