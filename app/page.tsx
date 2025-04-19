'use client'; // Add use client for animations

import Countdown from "@/components/countdown";
import { motion } from 'framer-motion'; // Import motion

export default function Home() {
  // Animation variants for staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Start slightly lower and invisible
    visible: { 
      opacity: 1, 
      y: 0, // End at original position and visible
      transition: { 
        type: "spring", // Optional: Use spring physics
        stiffness: 100,
        duration: 0.8 
      }
    },
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-8 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/space-bg.jpg')] bg-cover bg-center bg-no-repeat z-0"
        aria-hidden="true"
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 z-10"
        aria-hidden="true"
      />
      {/* Animated Content Area */}
      <motion.div 
        className="relative z-20 flex flex-col items-center justify-center w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated h1 */}
        <motion.h1 
          className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-center text-primary-foreground opacity-95"
          variants={itemVariants}
        >
          Columbia DevFest 2026
        </motion.h1>
        {/* Animated h2 */}
        <motion.h2 
          className="font-orbitron text-2xl md:text-3xl font-semibold mb-12 text-center text-muted-foreground opacity-85"
          variants={itemVariants}
        >
          February 8th, 2026
        </motion.h2>

        {/* Animated Countdown */}  
        <motion.div variants={itemVariants}>
          <Countdown />
        </motion.div>

        {/* You can add more sections here later */}
      </motion.div>
    </main>
  );
}
