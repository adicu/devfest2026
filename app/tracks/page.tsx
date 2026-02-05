'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
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

// Prizes Data
const prizesData = [
    {
        id: 'first-overall',
        title: 'First Overall',
        winners: '1 winner',
        prize: 'PS5 for all team members',
        color: '#FFD700',
        description: null,
    },
    {
        id: 'second-overall',
        title: 'Second Overall',
        winners: '1 winner',
        prize: 'Nintendo Switches for all team members',
        color: '#C0C0C0',
        description: null,
    },
    {
        id: 'track-1-prize',
        title: 'Track 1 Prize',
        winners: '1 winner',
        prize: 'Smart Watch for all team members',
        color: '#95E7FC',
        description: null,
    },
    {
        id: 'track-2-prize',
        title: 'Track 2 Prize',
        winners: '1 winner',
        prize: 'Mechanical Keyboard for all team members',
        color: '#F374FF',
        description: null,
    },
    {
        id: 'track-3-prize',
        title: 'Track 3 Prize',
        winners: '1 winner',
        prize: 'Fujifilm Instant Camera for all team members',
        color: '#FAD0FE',
        description: null,
    },
    {
        id: 'track-4-prize',
        title: 'Track 4 Prize',
        winners: '1 winner',
        prize: 'Big SodaStream for all team members',
        color: '#85C8FF',
        description: null,
    },
    {
        id: 'best-beginner',
        title: 'Best Beginner',
        winners: '1 winner',
        prize: 'Drawing Tablets for all team members',
        color: '#98FB98',
        description: null,
    },
    {
        id: 'popular-vote',
        title: 'Popular Vote',
        winners: '1 winner',
        prize: 'Sony Headphones for all team members',
        color: '#FFB6C1',
        description: null,
    },
    {
        id: 'dedalus-labs',
        title: 'Best use of Dedalus Labs ADK',
        winners: '3 winners',
        prize: '$1,350 in cash',
        color: '#E82AFA',
        description: `Build a production agent using the Dedalus Labs ADK and the Dedalus Auth standard. Submissions must solve a real user need and be usable by someone other than the builder. Scope can be small, but it must demonstrate high-quality platform usage, correct auth integration, and a clear, practical workflow with measurable impact that solves a real problem.

Judging will be completed on the following criteria, scored 1-10: Need (Does this solve a real problem, and will people actually use this?), Dedalus Quality (Is this a strong, unique implementation of Dedalus' strengths and a good showcase of authentication?), Ship Quality (Is it reliable/Does the MVP work from end-to-end?)

1st prize: 750 USD + 250 API credits
2nd prize: 500 USD + 250 API credits
3rd prize: 100 USD + 250 API credits`,
    },
    {
        id: 'flowglad',
        title: 'Best use of Flowglad',
        winners: '3 winners',
        prize: '$875 in cash',
        color: '#4ADE80',
        description: `All three team winners include lunch at the Flowglad (YC) office with the Co-Founders and an optional YC application review.

1st Prize: $50k credits + $500 cash + 1st Edition Flowglad metal coin
2nd Prize: $25k credits + $250 cash + 1st Edition Flowglad metal coin
3rd Prize: $15k credits + $125 cash + 1st Edition Flowglad metal coin

To qualify, teams must complete a test mode payment and share their org ID for verification. Familiarize yourself with the repo: https://github.com/flowglad/flowglad

For real-time access, hit us up during the hackathon at our booth or in our Discord: https://discord.com/servers/flowglad-1273695198639161364`,
    },
    {
        id: 'k2-think',
        title: 'Best Use of K2 Think',
        winners: '1 winner',
        prize: 'reMarkable tablets',
        color: '#60A5FA',
        description: `Build with the world's fastest reasoning model. We'll particularly value projects that demonstrate:
• Meaningful use of K2 Think's advanced reasoning capabilities in real-world scenarios
• Creativity in how the K2 Think API is applied (beyond obvious or trivial use cases)
• The importance of K2 Think within the product—i.e., whether it plays a core role rather than a peripheral API call

Join requirements: We'll allocate one API key per team. To get K2 Think API access, please join our WhatsApp group and share the email address of your team leader. Contact: jane.zhang@mbzuai.ac.ae, WhatsApp or Discord (janezhang423).
WhatsApp group: https://chat.whatsapp.com/D0vXoctPvPq3rIMhvdn0il`,
    },
    {
        id: 'computer-use-safetykit',
        title: 'Best Use of Computer Use',
        winners: '1 winner',
        prize: "Arc'teryx Jackets for all team members",
        color: '#F97316',
        description: `Sponsored by SafetyKit

Highlight projects that use advanced computer-use capabilities. Show how AI can interact with software, tools, or digital environments to complete real tasks through automation, navigation, or end-to-end workflows.

Track requirements:
• Computer use must be a core part of the project
• The project should meaningfully interact with real software, tools, or interfaces`,
    },
    {
        id: 'elevenlabs',
        title: 'Best Use of ElevenLabs',
        winners: '1 winner',
        prize: '6 months of ElevenLabs Scale tier (equivalent to $330/month) for all team members',
        color: '#A78BFA',
        description: null,
    },
    {
        id: 'figma',
        title: 'Best Use of Figma',
        winners: '1 winner',
        prize: 'Figma Merch',
        color: '#F472B6',
        description: 'Enter Figma Link in Submission to participate!',
    },
    {
        id: 'featherless',
        title: 'Best use of Featherless',
        winners: '3 winners',
        prize: 'Featherless Scale Plans',
        color: '#34D399',
        description: `1st Prize: Featherless Scale Plan worth $300
2nd Prize: Featherless Scale Plan worth $150
3rd Prize: Featherless Scale Plan worth $75`,
    },
    {
        id: 'more-prizes',
        title: 'More prizes + sponsor prizes coming soon!',
        winners: '8 winners',
        prize: 'More prizes TBA',
        color: '#FCD34D',
        description: null,
    },
];

export default function TracksPage() {
    const router = useRouter();
    const [isPopupOpen, setIsPopupOpen] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedPrize, setSelectedPrize] = useState<typeof prizesData[0] | null>(null);


    const handlePlanetClick = () => setIsPopupOpen(true);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            router.push('/');
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
            paddingTop: '30px'
          }}>
            <div className="flex items-center justify-between px-4 lg:px-20 h-full">
              {/* Logo and Title */}
              <Link href="/" className="flex items-center gap-2 lg:gap-4 cursor-pointer hover:opacity-80 transition-opacity ml-0 lg:ml-[100px]">
                <div className="w-12 h-12 lg:w-20 lg:h-20 rounded-lg overflow-hidden">
                  <Image
                    src="/logo.svg"
                    alt="DevFest Logo"
                    width={80}
                    height={80}
                    className="w-12 h-12 lg:w-20 lg:h-20"
                  />
                </div>
                <h1 className={`${zenDots.className} text-white text-xl lg:text-4xl`}>Devfest 2026</h1>
              </Link>

              {/* Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`flex items-center gap-2 text-white ${zenDots.className} text-xl lg:text-3xl hover:opacity-80 transition-opacity`}
              >
                <div className="flex flex-col gap-1">
                  <div className="w-6 lg:w-10 h-0.5 lg:h-1 bg-white"></div>
                  <div className="w-6 lg:w-10 h-0.5 lg:h-1 bg-white"></div>
                  <div className="w-6 lg:w-10 h-0.5 lg:h-1 bg-white"></div>
                </div>
                <span className="hidden lg:inline">MENU</span>
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
                <a
                  href="https://docs.google.com/spreadsheets/d/1sSDcNFrFrXo1Hk3-0M5JQBzCOKoNsQynivQOTraLfCU/edit?gid=0#gid=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-white ${zenDots.className} text-2xl hover:text-purple-300 transition-colors`}
                >
                  Schedule
                </a>
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
          <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="relative" style={{ width: '60%', height: '150%', left: '3.6%', top: '5.7%' }}>

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
                      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
                  >
                      {/* 4. Popup Frame Asset */}
                      <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.9, opacity: 0 }}
                          onClick={(e) => e.stopPropagation()}
                          className="relative flex flex-col items-center justify-start text-white w-full h-full"
                          style={{ padding: '3% 1% 0% 1%' }}
                      >

                          {/* Content Container */}
                          <div className="relative flex flex-col items-center justify-start w-[95%] lg:w-[85%] h-full" style={{ paddingBottom: '20px', paddingTop: '20px' }}>

                              {/* PRIZES VIEW */}
                              {!selectedPrize && (
                                  <motion.div
                                      initial={{ opacity: 0, x: 20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      className="flex flex-col items-center justify-start overflow-y-auto custom-scrollbar w-[95%] lg:w-[80%] h-full"
                                  >
                                      {/* Title with close button */}
                                      <div className="flex items-center justify-center gap-4 w-full mb-4">
                                          <h2 className={`${zenDots.className} text-[18px] md:text-[24px] text-white tracking-wider drop-shadow-md`} style={{ lineHeight: '1.2em' }}>
                                              PRIZES & AWARDS
                                          </h2>
                                          <button
                                              onClick={() => router.push('/')}
                                              className="flex items-center justify-center text-white cursor-pointer hover:opacity-70 transition-opacity"
                                          >
                                              <X size={24} className="drop-shadow-2xl" strokeWidth={2} />
                                          </button>
                                      </div>

                                      {/* Grid Layout - 2 columns like tracks */}
                                      <div className="grid grid-cols-2 gap-3 w-full pb-4">
                                          {prizesData.map((prize, index) => (
                                              <motion.div
                                                  key={prize.id}
                                                  onClick={() => setSelectedPrize(prize)}
                                                  whileHover={{ scale: 1.03 }}
                                                  whileTap={{ scale: 0.97 }}
                                                  className="relative cursor-pointer group flex flex-col items-center justify-center p-0 text-center"
                                                  style={{ height: '90px', width: '100%', zIndex: 10 }}
                                              >
                                                  {/* Prize Tile Background */}
                                                  <Image
                                                      src="/track_tile.png"
                                                      alt="Prize Tile Background"
                                                      fill
                                                      className="object-fill -z-10 rounded-lg"
                                                  />

                                                  {/* Prize Title and Info */}
                                                  <h3 className={`${zenDots.className} text-[12px] md:text-[16px] drop-shadow-md text-center px-2`} style={{ lineHeight: '1.2em' }}>
                                                      <span style={{ color: prize.color }}>{prize.title}</span>
                                                  </h3>
                                                  <p className={`${spaceMono.className} text-[10px] md:text-[13px] text-white/80 mt-1`}>
                                                      {prize.prize}
                                                  </p>
                                              </motion.div>
                                          ))}
                                      </div>
                                  </motion.div>
                              )}

                              {/* PRIZE DETAILS VIEW */}
                              {selectedPrize && (
                                  <motion.div
                                      initial={{ opacity: 0, x: 20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      className="flex flex-col items-start justify-start overflow-y-auto custom-scrollbar w-full"
                                      style={{ height: '100%', marginLeft: '2%', paddingRight: '2%' }}
                                  >
                                      <div className="space-y-4 w-full">
                                          <h2 className={`${zenDots.className} text-[16px] md:text-[24px] drop-shadow-lg`} style={{ color: selectedPrize.color, lineHeight: '1.2em' }}>
                                              {selectedPrize.title}
                                          </h2>
                                          <div className="flex gap-4 flex-wrap">
                                              <span className={`${spaceMono.className} text-[12px] md:text-[16px] px-3 py-1 rounded-full bg-white/10`} style={{ color: selectedPrize.color }}>
                                                  {selectedPrize.winners}
                                              </span>
                                              <span className={`${spaceMono.className} text-[12px] md:text-[16px] px-3 py-1 rounded-full bg-white/10 text-white`}>
                                                  {selectedPrize.prize}
                                              </span>
                                          </div>
                                          {selectedPrize.description && (
                                              <div className={`${spaceMono.className} text-[12px] md:text-[16px] text-white/90`} style={{ lineHeight: '1.5em', whiteSpace: 'pre-line' }}>
                                                  {selectedPrize.description}
                                              </div>
                                          )}
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