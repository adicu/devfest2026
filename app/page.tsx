'use client';

import Sidebar from "@/components/sidebar";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Allerta_Stencil } from 'next/font/google';

const allertaStencil = Allerta_Stencil({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const planets = [
    {
      id: 'schedule',
      name: 'Schedule',
      image: '/planet-schedule-2cd6b3.png',
      link: '/schedules',
      position: { x: 305, y: 62 },
      size: { width: 468, height: 451 },
    },
    {
      id: 'faq',
      name: 'FAQ',
      image: '/planet-faq-57ae9d.png',
      link: '/faq',
      position: { x: 101, y: 70 },
      size: { width: 174, height: 170 },
    },
    {
      id: 'tracks',
      name: 'Tracks',
      image: '/track_planet.png',
      link: '/tracks',
      position: { x: 731, y: -36 },
      size: { width: 397.58, height: 392.61 },
    },
    {
      id: 'judges-speakers',
      name: 'Judges/Speakers',
      image: '/planet-judges-speakers-68abd5.png',
      link: '/speakers',
      position: { x: 3, y: 357 },
      size: { width: 336, height: 236 },
    },
  ];

  const getSpeechBubbleText = () => {
    switch (hoveredPlanet) {
      case 'faq':
        return "This is the FAQ page! Look into it to answer some of your questions!";
      case 'schedule':
        return "Check out the schedule to see when everything happens!";
      case 'tracks':
        return "Explore the different tracks available at DevFest!";
      case 'judges-speakers':
        return "Meet our amazing judges and speakers!";
      default:
        return "Welcome to DevFest 2026! Click on the planets to explore!";
    }
  };

  return (
    <main className="relative min-h-screen w-full overflow-auto" style={{ cursor: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'17\' viewBox=\'0 0 73 51\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M-6.14341e-05 7.29999e-06L56.6044 3.95817L24.8743 51L-6.14341e-05 7.29999e-06Z\' fill=\'white\'/%3E%3Crect x=\'35.83\' y=\'17.8153\' width=\'40.3205\' height=\'15.1202\' transform=\'rotate(24 35.83 17.8153)\' fill=\'white\'/%3E%3C/svg%3E") 0 0, auto' }}>
      {/* Background Layer */}
      <div className="fixed top-0 left-0 right-0 z-0" style={{ height: '782px', width: '100%' }}>
        <Image
          src="/background-purple.png"
          alt="Purple Background"
          fill
          className="object-cover"
          priority
          style={{
            objectPosition: 'center',
          }}
        />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Navigation Bar */}
      <nav className="relative z-20 w-full" style={{
        background: 'transparent',
        height: '95px',
        paddingTop: '50px',
        minWidth: '1512px'
      }}>
        <div className="flex items-center justify-between px-20 h-full">
          {/* Logo and Title */}
          <div className="flex items-center gap-4 ml-16">
            <div className="w-20 h-20 rounded-lg overflow-hidden">
              <Image
                src="/logo.svg"
                alt="DevFest Logo"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </div>
            <h1 className="font-zen-dots text-white text-4xl" style={{ fontFamily: 'var(--font-zen-dots), "Zen Dots", sans-serif' }}>Devfest 2026</h1>
          </div>

          {/* Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 text-white font-zen-dots text-3xl hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'var(--font-zen-dots), "Zen Dots", sans-serif' }}
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
        className={`fixed top-0 left-0 right-0 z-30 bg-black transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-70' : 'opacity-0 pointer-events-none'
        }`}
        style={{ height: '782px' }}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 w-80 bg-purple-900 shadow-2xl p-8 transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ height: '782px' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-6 mt-20">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-white font-zen-dots text-2xl hover:text-purple-300 transition-colors"
              style={{ fontFamily: 'var(--font-zen-dots), "Zen Dots", sans-serif' }}
            >
              Home
            </Link>
            <Link
              href="/schedules"
              onClick={() => setIsMenuOpen(false)}
              className="text-white font-zen-dots text-2xl hover:text-purple-300 transition-colors"
              style={{ fontFamily: 'var(--font-zen-dots), "Zen Dots", sans-serif' }}
            >
              Schedule
            </Link>
            <Link
              href="/tracks"
              onClick={() => setIsMenuOpen(false)}
              className="text-white font-zen-dots text-2xl hover:text-purple-300 transition-colors"
              style={{ fontFamily: 'var(--font-zen-dots), "Zen Dots", sans-serif' }}
            >
              Tracks
            </Link>
            <Link
              href="/speakers"
              onClick={() => setIsMenuOpen(false)}
              className="text-white font-zen-dots text-2xl hover:text-purple-300 transition-colors"
              style={{ fontFamily: 'var(--font-zen-dots), "Zen Dots", sans-serif' }}
            >
              Judges/Speakers
            </Link>
            <Link
              href="/faq"
              onClick={() => setIsMenuOpen(false)}
              className="text-white font-zen-dots text-2xl hover:text-purple-300 transition-colors"
              style={{ fontFamily: 'var(--font-zen-dots), "Zen Dots", sans-serif' }}
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 min-h-[calc(100vh-95px)]" style={{ minWidth: '1512px' }}>
        {/* Main Section with Planets */}
        <div className="relative" style={{ minHeight: '506px' }}>
          {/* Main Section Container - matches Figma layout_9GODRF */}
          <div 
            className="absolute"
            style={{
              left: '327px',
              top: '62px',
              width: '1108px',
              height: '506px',
            }}
          >
            {/* Schedule Planet - position relative to main section */}
          <Link 
            href="/schedules" 
              className="absolute transition-transform hover:scale-110"
              style={{
                left: '305px',
                top: '0px',
                width: '330px',
                height: '320px',
                cursor: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'17\' viewBox=\'0 0 73 51\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M-6.14341e-05 7.29999e-06L56.6044 3.95817L24.8743 51L-6.14341e-05 7.29999e-06Z\' fill=\'white\'/%3E%3Crect x=\'35.83\' y=\'17.8153\' width=\'40.3205\' height=\'15.1202\' transform=\'rotate(24 35.83 17.8153)\' fill=\'white\'/%3E%3C/svg%3E") 0 0, auto',
              }}
              onMouseEnter={() => setHoveredPlanet('schedule')}
              onMouseLeave={() => setHoveredPlanet(null)}
            >
              <Image
                src={planets[0].image}
                alt={planets[0].name}
                fill
                sizes="330px"
                className="object-contain"
              />
          </Link>

            {/* FAQ Planet */}
            <Link
              href="/faq"
              className="absolute transition-transform hover:scale-110 z-20"
              style={{
                left: '70px',
                top: '0px',
                width: '174px',
                height: '170px',
                cursor: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'17\' viewBox=\'0 0 73 51\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M-6.14341e-05 7.29999e-06L56.6044 3.95817L24.8743 51L-6.14341e-05 7.29999e-06Z\' fill=\'white\'/%3E%3Crect x=\'35.83\' y=\'17.8153\' width=\'40.3205\' height=\'15.1202\' transform=\'rotate(24 35.83 17.8153)\' fill=\'white\'/%3E%3C/svg%3E") 0 0, auto',
              }}
              onMouseEnter={() => setHoveredPlanet('faq')}
              onMouseLeave={() => setHoveredPlanet(null)}
            >
              <img
                src="/planet-faq-57ae9d.png"
                alt="FAQ Planet"
                className="w-full h-full object-contain"
                style={{
                  display: 'block',
                }}
              />
            </Link>

            {/* Tracks Planet */}
            <Link
              href="/tracks"
              className="absolute transition-transform hover:scale-110"
              style={{
                left: '600px',
                top: '-36px',
                width: '300px',
                height: '200px',
                cursor: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'17\' viewBox=\'0 0 73 51\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M-6.14341e-05 7.29999e-06L56.6044 3.95817L24.8743 51L-6.14341e-05 7.29999e-06Z\' fill=\'white\'/%3E%3Crect x=\'35.83\' y=\'17.8153\' width=\'40.3205\' height=\'15.1202\' transform=\'rotate(24 35.83 17.8153)\' fill=\'white\'/%3E%3C/svg%3E") 0 0, auto',
              }}
              onMouseEnter={() => setHoveredPlanet('tracks')}
              onMouseLeave={() => setHoveredPlanet(null)}
            >
              <Image
                src={planets[2].image}
                alt={planets[2].name}
                fill
                sizes="300px"
                className="object-contain"
              />
            </Link>

            {/* Judges/Speakers Planet */}
            <Link
              href="/speakers"
              className="absolute transition-transform hover:scale-110"
              style={{
                left: '3px',
                top: '200px',
                width: '300px',
                height: '300px',
                cursor: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'17\' viewBox=\'0 0 73 51\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M-6.14341e-05 7.29999e-06L56.6044 3.95817L24.8743 51L-6.14341e-05 7.29999e-06Z\' fill=\'white\'/%3E%3Crect x=\'35.83\' y=\'17.8153\' width=\'40.3205\' height=\'15.1202\' transform=\'rotate(24 35.83 17.8153)\' fill=\'white\'/%3E%3C/svg%3E") 0 0, auto',
              }}
              onMouseEnter={() => setHoveredPlanet('judges-speakers')}
              onMouseLeave={() => setHoveredPlanet(null)}
            >
              <Image
                src={planets[3].image}
                alt={planets[3].name}
                fill
                sizes="300px"
                className="object-contain"
              />
            </Link>

            {/* Character with Speech Bubble */}
            <div
              className="absolute"
              style={{
                left: '480px',
                top: '239px',
                width: '600px',
                height: '300px',
                zIndex: 10,
              }}
            >
              {/* Character Image */}
              <div className="absolute" style={{  
				left: '170px',
                top: '0',
                width: '220px', 
                zIndex: 10,
              }}>
                <Image
                  src="/roarie-character-629497.png"
                  alt="Roarie Character"
                  width={93}
                  height={111}
                  className="w-full h-auto"
                  style={{
                    display: 'block',
                  }}
                />
              </div>

              {/* Speech Bubble */}
              <div
                className="absolute bg-white rounded-full shadow-lg transition-opacity"
                style={{
                  left: '0',
                  top: '100px',
                  width: '200px',
                  padding: '12px 20px',
                }}
              >
                <div className="relative w-full h-full flex items-center">
                  <p className={`${allertaStencil.className} text-black text-xs`}>
                    {getSpeechBubbleText()}
                  </p>
                  {/* Speech bubble tail */}
                  <div
                    className="absolute"
                    style={{
                      right: '-7px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '0',
                      height: '0',
                      borderTop: '5px solid transparent',
                      borderBottom: '5px solid transparent',
                      borderLeft: '7px solid white',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
