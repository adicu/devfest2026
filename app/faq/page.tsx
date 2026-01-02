'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Zen_Dots, Allerta_Stencil } from 'next/font/google';
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

const allertaStencil = Allerta_Stencil({
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
      question: "Is the hackathon online or in-person?",
      answer: "DevFest will be held in-person, on Columbia University's campus."
    },
    {
      question: "Who is eligible to participate?",
      answer: "DevFest is open to all college students ages 18 and older. Please be aware that travel is unfortunately NOT sponsored."
    },
    {
      question: "When is Devfest?",
      answer: "Devfest will be _______."
    },
    {
      question: "What is the team size limit?",
      answer: "Teams can be of 1-4 people. Individual participation is allowed."
    },
    {
      question: "Will there be mentorship or support given?",
      answer: "Yes, experienced students and industry professionals (ADI alumni!) will be in-person and online during the hackathon."
    },
    {
      question: "Who do I contact for questions or concerns?",
      answer: "If you have any questions or concerns, please don't hesitate to reach out to us via email at devfestorganizers@googlegroups.com or via our Discord server where you can ping any of the organizers. For more information, please refer to the MLH code of conduct.",
      answerWithLink: (
        <>
          If you have any questions or concerns, please don't hesitate to reach out to us via email at devfestorganizers@googlegroups.com or via our Discord server where you can ping any of the organizers. For more information, please refer to the{' '}
          <a 
            href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-300"
            style={{ color: '#1B104C' }}
          >
            MLH code of conduct
          </a>
          .
        </>
      )
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <main className="relative min-h-screen w-full text-white bg-black" style={{ cursor: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'17\' viewBox=\'0 0 73 51\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M-6.14341e-05 7.29999e-06L56.6044 3.95817L24.8743 51L-6.14341e-05 7.29999e-06Z\' fill=\'white\'/%3E%3Crect x=\'35.83\' y=\'17.8153\' width=\'40.3205\' height=\'15.1202\' transform=\'rotate(24 35.83 17.8153)\' fill=\'white\'/%3E%3C/svg%3E") 0 0, auto' }}>
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

      {/* Background Images Group - fixed position so it doesn't move with content */}
      <div className="fixed z-5 pointer-events-none" style={{ width: '1108px', height: '781px', top: '55%', left: '55%', transform: 'translate(-50%, -50%) scale(0.9)', transformOrigin: 'center' }}>
        {/* Union Circle Background (behind everything) - x: 115, y: -43 relative to Main section */}
        <div className="absolute" style={{ left: '115px', top: '-43px', width: '878.09px', height: '854.81px', zIndex: 1 }}>
          <Image
            src="/faq-union-circle-257af8.png"
            alt="FAQ Union Circle"
            fill
            className="object-contain"
            style={{ objectFit: 'fill' }}
          />
        </div>

        {/* Background Artwork (on top of circle, behind content) - x: 95, y: 105 relative to Main section */}
        <div className="absolute" style={{ left: '95px', top: '105px', width: '898px', height: '661px', opacity: 0.8, zIndex: 2 }}>
          <Image
            src="/faq-background-artwork-1237b6.png"
            alt="FAQ Background Artwork"
            fill
            className="object-contain"
            style={{ objectFit: 'fill' }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-20 py-10 ml-45" style={{ marginTop: '-28px' }}>

        {/* Animated Content */}
        <motion.div
          className="relative z-20 flex flex-col items-center w-full text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '530px' }}
        >
          {/* Title */}
          <motion.h1
            className={`${zenDots.className} text-3xl font-bold mb-8 text-white text-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]`}
            variants={itemVariants}
            style={{ lineHeight: '1.2em' }}
          >
            Frequently<br />Asked Questions
          </motion.h1>

          {/* FAQ Items */}
          <motion.div 
            className="w-full space-y-2 mt-25"
            variants={itemVariants}
          >
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="overflow-hidden"
                style={{
                  backgroundColor: openFAQ === index ? 'rgba(255, 255, 255, 0.86)' : 'transparent'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left transition-colors"
                  style={{
                    background: 'linear-gradient(0deg, rgba(27, 16, 76, 1) 35%, rgba(45, 104, 151, 1) 100%)',
                    color: '#FFFFFF',
                    padding: '10px 14px'
                  }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className={`${zenDots.className} font-normal pr-3`} style={{ lineHeight: '1.2em', fontSize: '13px' }}>
                      {faq.question}
                    </h3>
                    <motion.span 
                      className="flex-shrink-0"
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      style={{ 
                        color: '#94C5E6',
                        fontSize: '14px'
                      }}
                    >
                      ▼
                    </motion.span>
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.86)',
                        color: '#1B104C',
                        overflow: 'hidden'
                      }}
                    >
                      <div style={{ padding: '12px 14px' }}>
                        <p className={`${allertaStencil.className} leading-relaxed`} style={{ fontSize: '12px' }}>
                          {faq.answerWithLink || faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}