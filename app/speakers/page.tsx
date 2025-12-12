'use client';

import { motion } from 'framer-motion';
import { Russo_One } from 'next/font/google';
import { Instagram } from 'lucide-react';
import Link from 'next/link';
import Cards from '@/components/Judges-Cards/Cards';
import Panels from '@/components/Sponsor-Panels/Panels';
import { Zen_Dots } from "next/font/google";

const zenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
});


// Load Russo One font
const russo = Russo_One({
  weight: '400',
  subsets: ['latin'],
});



const speakers = [
  {
    name: "Speaker 1",
    intro: "Intro 1",
  },
  {
    name: "Speaker 2",
    intro: "Intro 2",
  },
  {
    name: "Speaker 3",
    intro: "Intro 3",
  },
  {
    name: "Speaker 4",
    intro: "Intro 4",
  },
  {
    name: "Speaker 5",
    intro: "Intro 5",
  },
  {
    name: "Speaker 6",
    intro: "Intro 6",
  }
];

const sponsors = [
  {
    frame: "/sponsor-frame-large.png",
    logos: ["/dedalus_labs_logo.png"]
  },
  { 
    frame: "/sponsor-frame-medium.png",
    logos: []
  },
  {
    frame: "/sponsor-frame-small-1.png",
    logos: ["/sonar_source_logo.png", "/1686960057216.png"]
  },
  {
    frame: "/sponsor-frame-small-2.png",
    logos: []
  }
];

export default function Speakers() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        duration: 0.8 
      }
    },
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start pt-10 p-8 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-[url('/space-speakers-bg.png')] bg-cover bg-center bg-no-repeat z-0"
        aria-hidden="true"
      />

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
        className="fixed w-[900px] h-[538px] left-[380px] top-[105px] bg-[#1B104C] rounded-[25px] overflow-y-scroll overflow-x-hidden hide-scrollbar"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Judges */}
        <motion.h1
          className={`
            ${zenDots.className}
            text-[40px]
            leading-[48px]
            text-white
            pl-[40px]
            pt-[47px]
            mb-[10px]
          `}
          variants={itemVariants}
        >
          Judges
        </motion.h1>

        {/* Judges Grid Placeholdser */}
        <motion.div
          className="
            pl-[60px]
            pt-[0px]
            grid 
            grid-cols-3"
          variants={itemVariants}
        >
        {speakers.map((speaker, index) => (
          <Cards
            key={`cyan-${index}`}
            frame="/cyan-card.png"
          />
        ))}
        </motion.div>

        {/* Sponsors */}
        <motion.h1
            className={`
              ${zenDots.className}
              text-[40px]
              leading-[48px]
              text-white
              pl-[40px]
              pt-[47px]
              mb-[10px]
            `}
            variants={itemVariants}
          >
            Sponsors
        </motion.h1>

        {/* Sponsor Panels */}
        <motion.div
          className="flex flex-col gap-[0px] pl-[60px] pr-[60px] pb-[10px]"
          variants={itemVariants}
        >
          {sponsors.map((row, index) => (
            <Panels 
              key={index}
              frame={row.frame}
              logos={row.logos}
            />
          ))}
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
