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

export default function Tracks() {
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
          TRACKS
        </motion.h1>

        {/* Tracks Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
          variants={itemVariants}
        >
          {/* Track 1 - Web Development */}
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className={`${russo.className} text-2xl font-bold mb-4`}>Web Development</h3>
            <p className="text-gray-300 mb-4">Build modern web applications using the latest technologies and frameworks.</p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• React & Next.js</li>
              <li>• Full-stack development</li>
              <li>• API design</li>
              <li>• UI/UX best practices</li>
            </ul>
          </div>

          {/* Track 2 - AI/ML */}
          <div className="bg-gradient-to-br from-green-500/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className={`${russo.className} text-2xl font-bold mb-4`}>AI & Machine Learning</h3>
            <p className="text-gray-300 mb-4">Explore artificial intelligence and machine learning applications.</p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Neural networks</li>
              <li>• Computer vision</li>
              <li>• Natural language processing</li>
              <li>• Data science</li>
            </ul>
          </div>

          {/* Track 3 - Mobile Development */}
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="text-4xl mb-4">📱</div>
            <h3 className={`${russo.className} text-2xl font-bold mb-4`}>Mobile Development</h3>
            <p className="text-gray-300 mb-4">Create mobile applications for iOS and Android platforms.</p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• React Native</li>
              <li>• Flutter</li>
              <li>• Native development</li>
              <li>• Cross-platform solutions</li>
            </ul>
          </div>

          {/* Track 4 - Blockchain */}
          <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="text-4xl mb-4">⛓️</div>
            <h3 className={`${russo.className} text-2xl font-bold mb-4`}>Blockchain & Web3</h3>
            <p className="text-gray-300 mb-4">Build decentralized applications and explore blockchain technology.</p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Smart contracts</li>
              <li>• DeFi applications</li>
              <li>• NFT projects</li>
              <li>• Cryptocurrency</li>
            </ul>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.p
          className="text-lg text-white/70 mt-12 font-sans"
          variants={itemVariants}
        >
          Choose your track and start building something amazing!
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
