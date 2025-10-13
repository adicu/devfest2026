'use client';

import { motion } from 'framer-motion';
import { Russo_One } from 'next/font/google';
import { Instagram } from 'lucide-react';
import Link from 'next/link';

// Load Russo One font
const russo = Russo_One({
  weight: '400',
  subsets: ['latin'],
});

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
        className="absolute inset-0 bg-[url('/space-bg.png')] bg-cover bg-center bg-no-repeat z-0"
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
        className="relative z-20 flex flex-col items-center w-full text-center max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.h1
          className={`${russo.className} text-5xl sm:text-6xl md:text-7xl font-bold mb-12 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]`}
          variants={itemVariants}
        >
          SPEAKERS
        </motion.h1>

        {/* Speakers Grid Placeholder */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          variants={itemVariants}
        >
          {/* Speaker Card 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full mx-auto mb-4"></div>
            <h3 className={`${russo.className} text-xl font-bold mb-2`}>Speaker Name</h3>
            <p className="text-sm text-gray-300 mb-2">Company/Title</p>
            <p className="text-xs text-gray-400">Bio and expertise description will go here.</p>
          </div>

          {/* Speaker Card 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4"></div>
            <h3 className={`${russo.className} text-xl font-bold mb-2`}>Speaker Name</h3>
            <p className="text-sm text-gray-300 mb-2">Company/Title</p>
            <p className="text-xs text-gray-400">Bio and expertise description will go here.</p>
          </div>

          {/* Speaker Card 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-purple-500 rounded-full mx-auto mb-4"></div>
            <h3 className={`${russo.className} text-xl font-bold mb-2`}>Speaker Name</h3>
            <p className="text-sm text-gray-300 mb-2">Company/Title</p>
            <p className="text-xs text-gray-400">Bio and expertise description will go here.</p>
          </div>
        </motion.div>

        {/* Coming Soon Notice */}
        <motion.p
          className="text-lg text-white/70 mt-12 font-sans"
          variants={itemVariants}
        >
          More speakers will be announced soon!
        </motion.p>
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
