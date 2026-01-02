'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Russo_One, Zen_Dots, Space_Mono } from 'next/font/google';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from "@/components/sidebar";

// Load fonts
const russo = Russo_One({
  weight: '400',
  subsets: ['latin'],
});

const zenDots = Zen_Dots({
  weight: '400',
  subsets: ['latin'],
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
});

// Track Data
const tracksData = [
    {
        id: 'health',
        title: 'HEALTH',
        icon: '🏥',
        shortDesc: 'Improve physical, mental, and emotional well-being.',
        fullDesc: 'The HEALTH track invites participants to explore how technology can improve physical, mental, and emotional well-being across diverse communities.\n\nThis track encourages teams to think holistically about what "health" means in the modern world and rethink what being health-conscious means.\n\nProjects may range from apps that help individuals build healthier habits, to systems that make medical data more accessible, to tools that support clinicians in making informed decisions.\n\nThis track also welcomes projects that engage with broader public health questions: How can we increase access to care? How can technology reduce disparities in health outcomes? What innovations could help individuals better understand their health?',
    },
    {
        id: 'business',
        title: 'BUSINESS AND ENTERPRISE',
        icon: '💼',
        shortDesc: 'Transform how organizations operate digitally.',
        fullDesc: 'The BUSINESS AND ENTERPRISE track encourages teams to design software and systems that transform how organizations of all scales operate in an increasingly digital environment. These ideas are permeated through a wide range of themes, including finance, productivity, workflow automation, emerging technologies, blockchain, business intelligence, and organizational strategy.\n\nProjects may range from products that streamline day-to-day operations, to platforms that re-imagine the future of commerce, to AI-powered advisors for entrepreneurs. These solutions can draw upon analytics, AI, modern web infrastructure, or creative business models to solve real pain points faced by companies and customers alike.\n\nThis track encourages teams to think beyond just the technical build and consider the broader business implications including scalability, sustainability, and accessibility.',
    },
    {
        id: 'entertainment',
        title: 'ENTERTAINMENT',
        icon: '🎮',
        shortDesc: 'Blend artistry, storytelling, and interactivity.',
        fullDesc: 'The ENTERTAINMENT track is a creative playground that invites participants to blend artistry, storytelling, and interactivity. Projects in this track includes everything from game development and immersive media, to interactive art and music technology, to educational entertainment.\n\nTeams are challenged to build and curate digital experiments that spark curiosity, deepen engagement, and bring people together. These projects where entertainment meets impact can take the form of gamified education tools, creative platforms for self-expression, systems that foster community, or new forms of storytelling that push technical boundaries.\n\nThis track invites teams to let imagination lead, delivering memorable, meaningful experiments and engagement. The goal is to create something playful, surprising, and inspiring.',
    },
    {
        id: 'social-impact',
        title: 'SOCIAL IMPACT/\nSUSTAINABILITY',
        icon: '🌱',
        shortDesc: 'Make communities safer, more equitable, and sustainable.',
        fullDesc: 'The SOCIAL IMPACT & SUSTAINABILITY track challenges teams to develop solutions that make communities safer, more equitable, and more environmentally responsible. Projects may span transportation, maps and mobility, climate and environment, civic technology, community health, and data-driven policy insights.\n\nTeams are encouraged to address real-world challenges, varying from the reduction of carbon footprints, to the improvement of access to sustainable transportation, to the identification of environmental hazards, to the empowerment of individuals to make greener and more informed choices.\n\nThis track particularly welcomes projects that make complex environmental or social data intuitive. To do so, teams can draw from mobility data, climate datasets, community metrics, or public policy resources to design applications that are both actionable and accessible.',
    },
];

export default function TracksPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedTrack, setSelectedTrack] = useState<typeof tracksData[0] | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handlePlanetClick = () => setIsPopupOpen(true);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            setIsPopupOpen(false);
            setSelectedTrack(null);
        }
  };

  return (
      <main className={`relative min-h-screen w-full overflow-hidden text-white bg-black ${russo.className}`} style={{ cursor: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'17\' viewBox=\'0 0 73 51\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M-6.14341e-05 7.29999e-06L56.6044 3.95817L24.8743 51L-6.14341e-05 7.29999e-06Z\' fill=\'white\'/%3E%3Crect x=\'35.83\' y=\'17.8153\' width=\'40.3205\' height=\'15.1202\' transform=\'rotate(24 35.83 17.8153)\' fill=\'white\'/%3E%3C/svg%3E") 0 0, auto' }}>

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

          {/* Navigation Bar */}
          <nav className="relative z-20 w-full" style={{
            background: 'transparent',
            height: '95px',
            paddingTop: '50px'
          }}>
            <div className="flex items-center justify-between px-20 h-full">
              {/* Logo and Title */}
              <Link href="/" className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity" style={{ marginLeft: '100px' }}>
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

          {/* ---------------- INTERACTIVE PLANET LAYER ---------------- */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="relative w-[900px] h-[900px] left-[70px] top-[55px]">

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
                      className="fixed inset-0 z-50 flex items-center justify-center bg-transparent ml-50 mt-20"
                  >
                      {/* 4. Popup Frame Asset */}
                      <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.9, opacity: 0 }}
                          onClick={(e) => e.stopPropagation()}
                          className="relative w-[1207px] h-[729px] flex flex-col items-center justify-center p-12 md:p-20 text-white"
                      >
                          {/* Frame Background Image */}
                          <Image
                              src="/background_tracks.png"
                              alt="Popup Background"
                              fill
                              className="object-fill pointer-events-none"
                              style={{ zIndex: -1 }}
                          />

                          {/* X Button to cover the X in background image */}
                          <button
                              onClick={() => {
                                  if (selectedTrack) {
                                      setSelectedTrack(null);
                                  } else {
                                      setIsPopupOpen(false);
                                  }
                              }}
                              className="absolute flex items-center justify-center w-7 h-7 text-white cursor-pointer"
                              style={{ 
                                  top: '115.5px',
                                  left: '283px',
                                  zIndex: 100
                              }}
                          >
                              <X size={36} className="drop-shadow-2xl" strokeWidth={2} />
                          </button>

                          {!selectedTrack && (
                              <h2 className={`${zenDots.className} text-[24px] text-white ml-20 mt-14 mb-4 tracking-wider drop-shadow-md`} style={{ lineHeight: '1.2em' }}>
                              SCANNING TRACKS...
                          </h2>
                          )}

                          {/* Content Container */}
                          <div className="w-[695px] h-[470px] ml-20 relative flex items-center justify-center">

                              {!selectedTrack ? (
                                  // --- INITIAL GRID VIEW ---
                                  <motion.div
                                      initial={{ opacity: 0, x: 20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      className="flex items-center justify-center"
                                  >

                                      {/* Grid Layout - 2x2 grid matching Figma */}
                                      <div className="grid grid-cols-2 gap-4">
                                          {tracksData.map((track, index) => {
                                              // Map track IDs to match Figma order
                                              const trackOrder = ['health', 'business', 'entertainment', 'social-impact'];
                                              const trackNumber = trackOrder.indexOf(track.id) + 1;
                                              
                                              // Color mapping for each track
                                              const titleColors = {
                                                  1: '#95E7FC', // HEALTH - cyan
                                                  2: '#F374FF', // BUSINESS AND ENTERPRISE - pink
                                                  3: '#FAD0FE', // ENTERTAINMENT - light pink
                                                  4: '#85C8FF'  // SOCIAL IMPACT/SUSTAINABILITY - light blue
                                              };
                                              const titleColor = titleColors[trackNumber as keyof typeof titleColors] || '#FBF5FF';
                                              
                                              return (
                                              <motion.div
                                                  key={track.id}
                                                  onClick={() => setSelectedTrack(track)}
                                                  whileHover={{ scale: 1.03 }}
                                                  whileTap={{ scale: 0.97 }}
                                                      className="relative h-[220px] w-[320px] cursor-pointer group flex flex-col items-center justify-center p-0 text-center"
                                                      style={{ zIndex: 10 }}
                                              >
                                                      {/* Track Image Background */}
                                                  <Image
                                                      src="/track_tile.png"
                                                      alt="Track Tile Background"
                                                      fill
                                                          className="object-fill -z-10 rounded-lg"
                                                      />

                                                      {/* Track Title - Zen Dots, 20px, with color-coded titles */}
                                                      <h3 className={`${zenDots.className} text-[20px] drop-shadow-md text-center`} style={{ lineHeight: '1.2em', whiteSpace: 'pre-line' }}>
                                                          <span style={{ color: '#FBF5FF' }}>Track {trackNumber}:</span>
                                                          <br />
                                                          <span style={{ color: titleColor }}>{track.title}</span>
                                                      </h3>
                                              </motion.div>
                                              );
                                          })}
          </div>
        </motion.div>
                              ) : (
                                  // --- TRACK DETAILS VIEW ---
                                  <motion.div
                                      initial={{ opacity: 0, x: 20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      className="relative flex flex-col w-[683px] max-h-[447px] overflow-y-auto custom-scrollbar pr-2 mt-20"
                                  >
                                          <div className="space-y-6">
                                              {/* Track Title - Format: "Track X: TITLE" */}
                                              {(() => {
                                                  const trackOrder = ['health', 'business', 'entertainment', 'social-impact'];
                                                  const trackNumber = trackOrder.indexOf(selectedTrack.id) + 1;
                                                  
                                                  // Color mapping for track titles
                                                  const titleColors = {
                                                      1: '#95E7FC', // HEALTH - cyan
                                                      2: '#F374FF', // BUSINESS AND ENTERPRISE - pink
                                                      3: '#FAD0FE', // ENTERTAINMENT - light pink
                                                      4: '#85C8FF'  // SOCIAL IMPACT/SUSTAINABILITY - light blue
                                                  };
                                                  const titleColor = titleColors[trackNumber as keyof typeof titleColors] || '#FBF5FF';
                                                  
                                                  return (
                                                      <h2 className={`${zenDots.className} text-[28px] drop-shadow-lg`} style={{ lineHeight: '1.2em' }}>
                                                          <span style={{ color: '#FBF5FF' }}>Track {trackNumber}:</span>{' '}
                                                          <span style={{ color: titleColor }}>{selectedTrack.title}</span>
                                                  </h2>
                                                  );
                                              })()}

                                              {/* Description Text - Space Mono, 22px, #FBF5FF with highlighted phrases */}
                                              <div className={`${spaceMono.className} text-[22px]`} style={{ color: '#FBF5FF', lineHeight: '1.2em', textAlign: 'left' }}>
                                                  {(() => {
                                                      const trackOrder = ['health', 'business', 'entertainment', 'social-impact'];
                                                      const trackNumber = trackOrder.indexOf(selectedTrack.id) + 1;
                                                      
                                                      // Color mapping for each track
                                                      const trackColors = {
                                                          1: '#95E7FC', // HEALTH - cyan
                                                          2: '#F374FF', // BUSINESS AND ENTERPRISE - pink
                                                          3: '#FAD0FE', // ENTERTAINMENT - light pink
                                                          4: '#85C8FF'  // SOCIAL IMPACT/SUSTAINABILITY - light blue
                                                      };
                                                      const highlightColor = trackColors[trackNumber as keyof typeof trackColors] || '#FBF5FF';
                                                      
                                                      // Phrases to highlight for each track
                                                      const highlightPhrases: Record<string, string[]> = {
                                                          'health': [
                                                              'physical, mental, and emotional well-being',
                                                              'health-conscious'
                                                          ],
                                                          'business': [
                                                              'finance, productivity, workflow automation',
                                                              'emerging technologies, blockchain',
                                                              'business intelligence',
                                                              'organizational strategy',
                                                              'scalability, sustainability, and accessibility'
                                                          ],
                                                          'entertainment': [
                                                              'artistry, storytelling, and interactivity',
                                                              'game development and immersive media',
                                                              'interactive art and music technology',
                                                              'gamified education tools',
                                                              'playful, surprising, and inspiring'
                                                          ],
                                                          'social-impact': [
                                                              'transportation, maps and mobility',
                                                              'climate and environment',
                                                              'civic technology',
                                                              'carbon footprints',
                                                              'sustainable transportation',
                                                              'environmental hazards',
                                                              'greener and more informed choices'
                                                          ]
                                                      };
                                                      
                                                      const phrases = highlightPhrases[selectedTrack.id] || [];
                                                      let text = selectedTrack.fullDesc;
                                                      
                                                      // Highlight each phrase
                                                      phrases.forEach(phrase => {
                                                          const regex = new RegExp(`(${phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
                                                          text = text.replace(regex, (match) => {
                                                              return `<span style="color: ${highlightColor}">${match}</span>`;
                                                          });
                                                      });
                                                      
                                                      return <p style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: text }} />;
                                                  })()}
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