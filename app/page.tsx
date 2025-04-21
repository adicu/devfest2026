'use client';

import Countdown from "@/components/countdown";
import { motion } from 'framer-motion';
import { Russo_One } from 'next/font/google';

// Load Russo One font
const russo = Russo_One({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
        duration: 0.8,
      },
    },
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start pt-10 p-8 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/space-bg.png')] bg-cover bg-center bg-no-repeat z-0"
        aria-hidden="true"
      />

      {/* Animated Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.h1
          className={`${russo.className} text-6xl sm:text-7xl md:text-8xl font-bold mb-4`}
          variants={itemVariants}
        >
          CU DevFest 2026
        </motion.h1>

        {/* Countdown */}
        <motion.div
          className={`text-2xl sm:text-3xl md:text-4xl text-[#E9C3FF] drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]`}
          variants={itemVariants}
        >
          <Countdown />
        </motion.div>
      </motion.div>
    </main>
  );
}
