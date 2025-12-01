'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Russo_One } from 'next/font/google';
import { X, Menu } from 'lucide-react';
import Image from 'next/image';

// Load Russo One font
const russo = Russo_One({
  weight: '400',
  subsets: ['latin'],
});

// Track Data
const tracksData = [
    {
        id: 'web',
        title: 'Web Development',
        icon: '🌐',
        shortDesc: 'Build modern web apps.',
        fullDesc: 'Build modern web applications using the latest technologies and frameworks like React, Next.js, and Full-stack development patterns.',
    },
    {
        id: 'ai',
        title: 'AI & Machine Learning',
        icon: '🤖',
        shortDesc: 'Explore AI & ML applications.',
        fullDesc: 'Explore artificial intelligence applications including Neural networks, Computer vision, NLP, and Data science analytics.',
    },
    {
        id: 'mobile',
        title: 'Mobile Development',
        icon: '📱',
        shortDesc: 'Create iOS & Android apps.',
        fullDesc: 'Create mobile applications for iOS and Android using React Native, Flutter, and cross-platform solutions.',
    },
    {
        id: 'blockchain',
        title: 'Blockchain & Web3',
        icon: '⛓️',
        shortDesc: 'Decentralized applications.',
        fullDesc: 'Build decentralized applications, Smart contracts, DeFi applications, and explore NFT projects.',
    },
];

export default function TracksPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedTrack, setSelectedTrack] = useState<typeof tracksData[0] | null>(null);

    const handlePlanetClick = () => setIsPopupOpen(true);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            setIsPopupOpen(false);
            setSelectedTrack(null);
        }
  };

  return (
      <main className={`relative min-h-screen w-full overflow-hidden text-white bg-black ${russo.className}`}>

          {/* 1. Background Asset */}
          <div className="absolute inset-0 z-0">
              <Image
                  src="/background.png"
                  alt="Space Background"
                  fill
                  className="object-cover opacity-80"
                  priority
              />
          </div>

          {/* ---------------- UI LAYER (Static HUD) ---------------- */}
          <nav className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-20">
              <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center font-bold text-xl shadow-[0_0_10px_rgba(168,85,247,0.5)]">?</div>
                  <h1 className="text-2xl tracking-widest drop-shadow-md">DEVFEST 2026</h1>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-purple-300 transition-colors drop-shadow-md">
                  <span className="text-xl">MENU</span>
                  <Menu size={32} />
              </div>
      </nav>

          {/* Sidebar Info (Hidden on mobile for cleaner view) */}
          <div className="absolute left-8 top-32 z-20 hidden md:flex flex-col gap-6 max-w-[250px]">
              <InfoBlock title="DEVPOST" text="Checkout the Devpost for prizes and submissions." />
              <InfoBlock title="SCHEDULE" text="Google Calendar" link />
              <InfoBlock title="DEVFEST DISCORD" text="Join our devfest discord community to ask questions, find teammates, and more!" />
              <InfoBlock title="WHO IS ADI?" text="ADI (Application Development Initiative) is a student group at Columbia University that aims to foster a community of students interested in tech." />
          </div>

          {/* ---------------- INTERACTIVE PLANET LAYER ---------------- */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="relative w-[500px] h-[500px] md:w-[750px] md:h-[750px]">

                  {/* 2. Planet Asset */}
                  <div className="relative w-full h-full animate-float">
                      <Image
                          src="/track_planet.svg"
                          alt="Planet"
                          fill
                          className="object-contain drop-shadow-[0_0_50px_rgba(168,85,247,0.4)]"
                          priority
                      />
                  </div>

                  {/* 3. Flashing Light / Button */}
                  {/* Positioning adjusted to likely "crater" location on planet - adjust top/left percentages as needed */}
                  <div className="absolute top-[50%] left-[28%] pointer-events-auto z-20">
                      <motion.button
                          onClick={handlePlanetClick}
                          animate={{
                              scale: [1, 1.2, 1], // "Periodically grow bigger and smaller"
                          }}
                          transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                          }}
                          whileHover={{ scale: 1.3 }}
                          whileTap={{ scale: 0.9 }}
                          className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center cursor-pointer focus:outline-none"
                      >
                          {/* Star GIF Asset */}
                          <Image
                              src="/star.gif"
                              alt="Click to Scan"
                              fill
                              className="object-contain"
                              unoptimized // Required for GIFs in some Next.js configs to animate correctly
                          />
                      </motion.button>
                  </div>
              </div>
          </div>

          {/* ---------------- POPUP LAYER ---------------- */}
          <AnimatePresence>
              {isPopupOpen && (
                  <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={handleBackdropClick}
                      className="fixed inset-0 z-50 flex items-center justify-center **bg-transparent backdrop-blur-none** p-4"
                  >
                      {/* 4. Popup Frame Asset */}
                      <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.9, opacity: 0 }}
                          onClick={(e) => e.stopPropagation()}
                          className="relative w-[418px] h-[322px] md:w-[836px] md:h-[644px] max-w-5xl flex flex-col justify-center items-center p-12 md:p-20 text-white mt-[-150px] ml-[550px]"
                      >
                          {/* Frame Background Image */}
                          <Image
                              src="/track_popup_frame.png"
                              alt="Popup Frame"
                              fill
                              className="object-fill -z-10 pointer-events-none" // object-fill to stretch frame to container
                          />

                          <h2 className="text-2xl md:0 text-white-300 mb-8 tracking-wider item-start justify-start drop-shadow-md sticky top-0 backdrop-blur-none** p-0 rounded ml-[-300px] mt-[5px]">
                              SCANNING TRACKS...
                          </h2>

                          {/* Content Container (Scrollable) */}
                          <div className="w-[650px] h-full overflow-y-auto custom-scrollbar pr-2 relative ml-[50px]">

                              {!selectedTrack ? (
                                  // --- INITIAL GRID VIEW ---
                                  <motion.div
                                      initial={{ opacity: 0, x: 20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      className="h-full"
                                  >

                                      {/* Grid Layout */}
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-10">
                                          {tracksData.map((track) => (
                                              <motion.div
                                                  key={track.id}
                                                  onClick={() => setSelectedTrack(track)}
                                                  whileHover={{ scale: 1.03 }}
                                                  whileTap={{ scale: 0.97 }}
                                                  className="relative h-100 w-full cursor-pointer group flex flex-col items-center justify-center p-0 text-center"
                                              >
                                                  {/* 5. Track Tile Asset */}
                                                  <Image
                                                      src="/track_tile.png"
                                                      alt="Track Tile Background"
                                                      fill
                                                      className="object-fill -z-10 rounded-lg opacity-100 group-hover:opacity-100 transition-opacity"
                                                  />

                                                  <div className="text-4xl mb-2 drop-shadow-md">{track.icon}</div>
                                                  <h3 className="text-xl md:text-2xl font-bold mb-1 drop-shadow-md">{track.title}</h3>
                                                  <p className="text-sm font-sans text-gray-200 drop-shadow-sm">{track.shortDesc}</p>
                                              </motion.div>
                                          ))}
                                      </div>
                                  </motion.div>
                              ) : (
                                  // --- TRACK DETAILS VIEW ---
                                  <motion.div
                                      initial={{ opacity: 0, x: 20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      className="h-full relative flex flex-col"
                                  >
                                      {/* X Button */}
                                      <button
                                          onClick={() => setSelectedTrack(null)}
                                          className="absolute -top-2 -left-2 md:top-0 md:left-0 z-10 flex items-center gap-2 text-cyan-300 hover:text-white transition-colors group"
                                      >
                                          <X size={24} className="group-hover:rotate-90 transition-transform" />
                                          <span className="text-sm font-sans tracking-widest">RETURN</span>
                                      </button>

                                          <div className="mt-10 md:mt-12 space-y-6">
                                              <div className="flex items-center gap-4 border-b border-white/20 pb-4">
                                                  <span className="text-5xl">{selectedTrack.icon}</span>
                                                  <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                                                      {selectedTrack.title}
                                                  </h2>
                                              </div>

                                              <div className="font-sans text-lg md:text-xl leading-relaxed text-gray-200 space-y-4 max-w-3xl">
                                                  <p>{selectedTrack.fullDesc}</p>
                                                  <p className="opacity-70 text-base">
                                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                                  </p>
                                              </div>
                                          </div>
                                  </motion.div>
                              )}
                          </div>
                      </motion.div>
                  </motion.div>
              )}
          </AnimatePresence>

          <style jsx global>{`
        /* Hide scrollbar for Chrome/Safari/Opera */
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(103, 232, 249, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(103, 232, 249, 0.5);
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}

function InfoBlock({ title, text, link = false }: { title: string, text: string, link?: boolean }) {
    return (
        <div className="bg-purple-900/40 backdrop-blur-sm p-4 rounded-lg border-l-4 border-cyan-400 shadow-lg">
            <h3 className="text-cyan-300 font-bold mb-1 text-sm tracking-wide">{title}</h3>
            <p className={`font-sans text-xs text-white/90 leading-relaxed ${link ? 'underline cursor-pointer hover:text-cyan-200' : ''}`}>
                {text}
            </p>
        </div>
    )
}