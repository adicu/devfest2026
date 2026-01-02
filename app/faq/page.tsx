'use client';

import { motion } from 'framer-motion';
import { Zen_Dots } from 'next/font/google';
import { Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Sidebar from "@/components/sidebar";

// Load fonts
const zenDots = Zen_Dots({
  weight: '400',
  subsets: ['latin'],
});

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <main className="relative min-h-screen w-full overflow-hidden text-white bg-black" style={{ cursor: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'17\' viewBox=\'0 0 73 51\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M-6.14341e-05 7.29999e-06L56.6044 3.95817L24.8743 51L-6.14341e-05 7.29999e-06Z\' fill=\'white\'/%3E%3Crect x=\'35.83\' y=\'17.8153\' width=\'40.3205\' height=\'15.1202\' transform=\'rotate(24 35.83 17.8153)\' fill=\'white\'/%3E%3C/svg%3E") 0 0, auto' }}>
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background-purple.png"
          alt="Purple Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Navigation Bar */}
      <nav className="relative z-20 w-full" style={{
        background: 'transparent',
        height: '95px',
        paddingTop: '50px'
      }}>
        <div className="flex items-center justify-between px-20 h-full">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center gap-4 ml-16 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-20 h-20 rounded-lg overflow-hidden">
              <Image
                src="/logo.svg"
                alt="DevFest Logo"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </div>
            <h1 className={`${zenDots.className} text-white text-4xl`}>Devfest 2026</h1>
          </Link>

          {/* Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex items-center gap-2 text-white ${zenDots.className} text-3xl hover:opacity-80 transition-opacity`}
          >
            <div className="flex flex-col gap-1.5">
              <div className="w-10 h-1 bg-white"></div>
              <div className="w-10 h-1 bg-white"></div>
              <div className="w-10 h-1 bg-white"></div>
            </div>
            <span>MENU</span>
          </button>
        </div>
      </nav>

      {/* Menu Overlay */}
      <div 
        className={`fixed inset-0 z-30 bg-black transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-70' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 h-full w-80 bg-purple-900 shadow-2xl p-8 transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-6 mt-20">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`text-white ${zenDots.className} text-2xl hover:text-purple-300 transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/schedules"
              onClick={() => setIsMenuOpen(false)}
              className={`text-white ${zenDots.className} text-2xl hover:text-purple-300 transition-colors`}
            >
              Schedule
            </Link>
            <Link
              href="/tracks"
              onClick={() => setIsMenuOpen(false)}
              className={`text-white ${zenDots.className} text-2xl hover:text-purple-300 transition-colors`}
            >
              Tracks
            </Link>
            <Link
              href="/speakers"
              onClick={() => setIsMenuOpen(false)}
              className={`text-white ${zenDots.className} text-2xl hover:text-purple-300 transition-colors`}
            >
              Judges/Speakers
            </Link>
            <Link
              href="/faq"
              onClick={() => setIsMenuOpen(false)}
              className={`text-white ${zenDots.className} text-2xl hover:text-purple-300 transition-colors`}
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-20 py-10">
        {/* Animated Content */}
        <motion.div
          className="relative z-20 flex flex-col items-center w-full text-center max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.h1
            className={`${zenDots.className} text-5xl sm:text-6xl md:text-7xl font-bold mb-12 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]`}
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
                    <h3 className={`${zenDots.className} text-lg font-bold pr-4`}>
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
                    <p className={`${zenDots.className} text-gray-300 leading-relaxed`}>
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
            <h3 className={`${zenDots.className} text-xl font-bold mb-2`}>Still have questions?</h3>
            <p className={`${zenDots.className} text-gray-300`}>
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
            className={`text-sm ${zenDots.className} text-white/70 hover:text-white/90 hover:underline transition-colors cursor-pointer`}
          >
            Code of Conduct
          </a>
        </div>
      </div>
    </main>
  );
}