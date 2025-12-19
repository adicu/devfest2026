'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Russo_One } from 'next/font/google';
import { X } from 'lucide-react';
import Image from 'next/image';
import Sidebar from "@/components/sidebar";

// Load Russo One font
const russo = Russo_One({
  weight: '400',
  subsets: ['latin'],
});

// Track Data
const tracksData = [
    {
        id: 'health',
        title: 'HEALTH',
        icon: '🏥',
        shortDesc: 'Improve physical, mental, and emotional well-being.',
        fullDesc: 'The HEALTH track invites participants to explore how technology can improve physical, mental, and emotional well-being across diverse communities. This track encourages teams to think holistically about what "health" means in the modern world and rethink what being health-conscious means. Projects may range from apps that help individuals build healthier habits, to systems that make medical data more accessible, to tools that support clinicians in making informed decisions. This track also welcomes projects that engage with broader public health questions: How can we increase access to care? How can technology reduce disparities in health outcomes? What innovations could help individuals better understand their health?',
    },
    {
        id: 'business',
        title: 'BUSINESS AND ENTERPRISE',
        icon: '💼',
        shortDesc: 'Transform how organizations operate digitally.',
        fullDesc: 'The BUSINESS AND ENTERPRISE track encourages teams to design software and systems that transform how organizations of all scales operate in an increasingly digital environment. These ideas are permeated through a wide range of themes, including finance, productivity, workflow automation, emerging technologies, blockchain, business intelligence, and organizational strategy. Projects may range from products that streamline day-to-day operations, to platforms that re-imagine the future of commerce, to AI-powered advisors for entrepreneurs. These solutions can draw upon analytics, AI, modern web infrastructure, or creative business models to solve real pain points faced by companies and customers alike. This track encourages teams to think beyond just the technical build and consider the broader business implications including scalability, sustainability, and accessibility.',
    },
    {
        id: 'entertainment',
        title: 'ENTERTAINMENT',
        icon: '🎮',
        shortDesc: 'Blend artistry, storytelling, and interactivity.',
        fullDesc: 'The ENTERTAINMENT track is a creative playground that invites participants to blend artistry, storytelling, and interactivity. Projects in this track includes everything from game development and immersive media, to interactive art and music technology, to educational entertainment. Teams are challenged to build and curate digital experiments that spark curiosity, deepen engagement, and bring people together. These projects where entertainment meets impact can take the form of gamified education tools, creative platforms for self-expression, systems that foster community, or new forms of storytelling that push technical boundaries. This track invites teams to let imagination lead, delivering memorable, meaningful experiments and engagement. The goal is to create something playful, surprising, and inspiring.',
    },
    {
        id: 'social-impact',
        title: 'SOCIAL IMPACT/SUSTAINABILITY',
        icon: '🌱',
        shortDesc: 'Make communities safer, more equitable, and sustainable.',
        fullDesc: 'The SOCIAL IMPACT & SUSTAINABILITY track challenges teams to develop solutions that make communities safer, more equitable, and more environmentally responsible. Projects may span transportation, maps and mobility, climate and environment, civic technology, community health, and data-driven policy insights. Teams are encouraged to address real-world challenges, varying from the reduction of carbon footprints, to the improvement of access to sustainable transportation, to the identification of environmental hazards, to the empowerment of individuals to make greener and more informed choices. This track particularly welcomes projects that make complex environmental or social data intuitive. To do so, teams can draw from mobility data, climate datasets, community metrics, or public policy resources to design applications that are both actionable and accessible.',
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
                  src="/Background.png"
                  alt="Space Background"
                  fill
                  className="object-cover opacity-80"
                  priority
              />
          </div>

          {/* Sidebar */}
          <Sidebar />

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
                      className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-none p-4"
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

                          <h2 className="text-2xl md:text-4xl text-white/70 mb-8 tracking-wider drop-shadow-md sticky top-0 p-0 rounded ml-[-300px] mt-[5px]">
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
                                                  className="relative h-[200px] w-full cursor-pointer group flex flex-col items-center justify-center p-0 text-center"
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