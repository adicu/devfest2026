'use client';

import Sidebar from "@/components/sidebar";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Allerta_Stencil, Zen_Dots } from 'next/font/google';

const allertaStencil = Allerta_Stencil({
  weight: '400',
  subsets: ['latin'],
});

const zenDots = Zen_Dots({
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
        return "Explore our tracks and prizes! Click to see what you can win!";
      case 'judges-speakers':
        return "Meet our amazing judges and speakers!";
      default:
        return "Welcome to DevFest 2026! Click on the planets to explore!";
    }
  };

  return (
    <main className="relative w-screen overflow-auto lg:overflow-hidden" style={{ height: '100vh', cursor: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'17\' viewBox=\'0 0 73 51\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M-6.14341e-05 7.29999e-06L56.6044 3.95817L24.8743 51L-6.14341e-05 7.29999e-06Z\' fill=\'white\'/%3E%3Crect x=\'35.83\' y=\'17.8153\' width=\'40.3205\' height=\'15.1202\' transform=\'rotate(24 35.83 17.8153)\' fill=\'white\'/%3E%3C/svg%3E") 0 0, auto' }}>
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
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

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-20 w-full" style={{
        background: 'transparent',
        height: '95px',
        paddingTop: '30px'
      }}>
        <div className="flex items-center justify-between w-full px-4 lg:px-20 h-full">
          {/* Logo and Title */}
          <div className="flex items-center gap-2 lg:gap-4 ml-0 lg:ml-[100px]">
            <div className="w-12 h-12 lg:w-20 lg:h-20 rounded-lg overflow-hidden">
              <Image
                src="/logo.svg"
                alt="DevFest Logo"
                width={80}
                height={80}
                className="w-12 h-12 lg:w-20 lg:h-20"
              />
            </div>
            <h1 className="font-zen-dots text-white text-xl lg:text-4xl" style={{ fontFamily: 'var(--font-zen-dots), "Zen Dots", sans-serif' }}>Devfest 2026</h1>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 text-white font-zen-dots text-xl lg:text-3xl hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'var(--font-zen-dots), "Zen Dots", sans-serif' }}
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
            <a
              href="https://docs.google.com/spreadsheets/d/1sSDcNFrFrXo1Hk3-0M5JQBzCOKoNsQynivQOTraLfCU/edit?gid=0#gid=0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="text-white font-zen-dots text-2xl hover:text-purple-300 transition-colors"
              style={{ fontFamily: 'var(--font-zen-dots), "Zen Dots", sans-serif' }}
            >
              Schedule
            </a>
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

      {/* Sidebar - fixed to left on large screens */}
      <Sidebar />

      {/* Main Content Area - Flex container on large screens */}
      <div className="relative z-10 px-4 lg:pl-0 lg:pr-20" style={{ marginTop: '120px' }}>

        {/* Mobile Planets Grid - visible only on small screens */}
        <div className="lg:hidden flex flex-col items-center gap-6 pb-8">
          {/* Welcome message with character */}
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/roarie-character-40dcfd.png"
              alt="Roarie Character"
              width={60}
              height={72}
              className="w-[60px] h-auto"
            />
            <div className="bg-white rounded-2xl shadow-lg p-3 max-w-[200px]">
              <p className={`${allertaStencil.className} text-black text-xs`}>
                {getSpeechBubbleText()}
              </p>
            </div>
          </div>

          {/* Planets Grid - 2 columns on mobile */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-[400px]">
            {/* Schedule Planet */}
            <a
              href="https://docs.google.com/spreadsheets/d/1sSDcNFrFrXo1Hk3-0M5JQBzCOKoNsQynivQOTraLfCU/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center transition-transform hover:scale-105 animate-float-up"
              onMouseEnter={() => setHoveredPlanet('schedule')}
              onMouseLeave={() => setHoveredPlanet(null)}
            >
              <div className="relative w-[140px] h-[140px]">
                <Image
                  src={planets[0].image}
                  alt={planets[0].name}
                  fill
                  sizes="140px"
                  className="object-contain"
                />
              </div>
              <span className={`${allertaStencil.className} text-white text-sm mt-2`}>Schedule</span>
            </a>

            {/* FAQ Planet */}
            <Link
              href="/faq"
              className="flex flex-col items-center transition-transform hover:scale-105 animate-float-down"
              onMouseEnter={() => setHoveredPlanet('faq')}
              onMouseLeave={() => setHoveredPlanet(null)}
            >
              <div className="relative w-[120px] h-[120px]">
                <Image
                  src="/planet-faq-57ae9d.png"
                  alt="FAQ Planet"
                  fill
                  sizes="120px"
                  className="object-contain"
                />
              </div>
              <span className={`${allertaStencil.className} text-white text-sm mt-2`}>FAQ</span>
            </Link>

            {/* Tracks Planet */}
            <Link
              href="/tracks"
              className="flex flex-col items-center transition-transform hover:scale-105 animate-float-down"
              onMouseEnter={() => setHoveredPlanet('tracks')}
              onMouseLeave={() => setHoveredPlanet(null)}
            >
              <div className="relative w-[140px] h-[140px]">
                <Image
                  src={planets[2].image}
                  alt={planets[2].name}
                  fill
                  sizes="140px"
                  className="object-contain"
                />
              </div>
              <span className={`${allertaStencil.className} text-white text-sm mt-2`}>Tracks</span>
            </Link>

            {/* Judges/Speakers Planet */}
            <Link
              href="/speakers"
              className="flex flex-col items-center transition-transform hover:scale-105 animate-float-up"
              onMouseEnter={() => setHoveredPlanet('judges-speakers')}
              onMouseLeave={() => setHoveredPlanet(null)}
            >
              <div className="relative w-[140px] h-[140px]">
                <Image
                  src={planets[3].image}
                  alt={planets[3].name}
                  fill
                  sizes="140px"
                  className="object-contain"
                />
              </div>
              <span className={`${allertaStencil.className} text-white text-sm mt-2`}>Judges/Speakers</span>
            </Link>
          </div>
        </div>

        {/* Desktop Planets Layout - hidden on mobile, visible on lg screens */}
        <div className="hidden lg:block relative lg:flex-1" style={{ minHeight: '460px' }}>
          {/* Main Section Container - matches Figma layout_9GODRF */}
          <div
            className="relative"
            style={{
              left: '0px',
              top: '62px',
              width: '1108px',
              height: '460px',
            }}
          >
            {/* Planets Group Container */}
            <div
              className="absolute left-[28%]"
              style={{
                top: '10%',
                width: '100%',
                height: '100%',
              }}
            >
              {/* Schedule Planet */}
              <a
                href="https://docs.google.com/spreadsheets/d/1sSDcNFrFrXo1Hk3-0M5JQBzCOKoNsQynivQOTraLfCU/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute transition-transform hover:scale-110 animate-float-up"
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
              </a>

              {/* FAQ Planet */}
              <Link
                href="/faq"
                className="absolute transition-transform hover:scale-110 z-20 animate-float-up"
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
                className="absolute transition-transform hover:scale-110 animate-float-down"
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
                className="absolute transition-transform hover:scale-110 animate-float-down"
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
            </div>

            {/* Character with Speech Bubble - Desktop only */}
            <div
              className="absolute"
              style={{
                left: '68%',
                top: '60%',
                width: '54.2%',
                height: '65.2%',
                zIndex: 10,
              }}
            >
              {/* Character Image */}
              <div className="absolute" style={{
				left: '33.3%',
                top: '-5%',
                width: '30.7%',
                zIndex: 10,
              }}>
                <Image
                  src="/roarie-character-40dcfd.png"
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
                  top: '33.3%',
                  width: '33.3%',
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

      {/* Sponsors Section - Fixed on right side */}
      <div
        className="hidden lg:block fixed z-10 overflow-y-auto"
        style={{
          right: '20px',
          top: '120px',
          bottom: '20px',
          width: '320px',
          backgroundColor: 'rgba(27, 16, 76, 0.95)',
          borderRadius: '20px',
          padding: '24px',
        }}
      >
        <h2 className={`${zenDots.className} text-white text-2xl mb-6`} style={{ lineHeight: '1.2em' }}>
          Sponsors
        </h2>

        {/* Platinum Sponsor */}
        <div className="mb-6">
          <h3 className={`${zenDots.className} text-white text-sm mb-3 opacity-80`}>
            Platinum
          </h3>
          <div className="flex justify-center items-center">
            <a href="https://www.dedaluslabs.ai/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image
                src="/dedalus-labs-logo.png"
                alt="Dedalus Labs"
                width={150}
                height={150}
                className="object-contain"
                style={{ maxHeight: '80px', width: 'auto' }}
              />
            </a>
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-6">
          <h3 className={`${zenDots.className} text-white text-sm mb-3 opacity-80`}>
            Gold
          </h3>
          <div className="flex justify-center items-center flex-wrap gap-4">
            <a href="https://www.flowglad.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image
                src="/flowglad.png"
                alt="Flowglad"
                width={120}
                height={60}
                className="object-contain"
                style={{ maxHeight: '50px', width: 'auto' }}
              />
            </a>
            <a href="https://ifm.ai/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity bg-white rounded-lg p-1">
              <Image
                src="/ifm.png"
                alt="IFM"
                width={120}
                height={60}
                className="object-contain"
                style={{ maxHeight: '45px', width: 'auto' }}
              />
            </a>
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-6">
          <h3 className={`${zenDots.className} text-white text-sm mb-3 opacity-80`}>
            Silver
          </h3>
          <div className="flex justify-center items-center flex-wrap gap-3">
            <a href="https://www.safetykit.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image
                src="/safetykit.jpeg"
                alt="SafetyKit"
                width={100}
                height={50}
                className="object-contain"
                style={{ maxHeight: '40px', width: 'auto' }}
              />
            </a>
            <a href="https://scale.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image
                src="/scale.png"
                alt="Scale"
                width={100}
                height={50}
                className="object-contain"
                style={{ maxHeight: '40px', width: 'auto' }}
              />
            </a>
            <a href="https://www.sonarsource.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image
                src="/sonarsource.jpg"
                alt="SonarSource"
                width={100}
                height={50}
                className="object-contain"
                style={{ maxHeight: '40px', width: 'auto' }}
              />
            </a>
            <a href="https://www.columbia.edu/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image
                src="/columbia.jpg"
                alt="Columbia"
                width={100}
                height={50}
                className="object-contain"
                style={{ maxHeight: '40px', width: 'auto' }}
              />
            </a>
          </div>
        </div>

        {/* Bronze Sponsors */}
        <div>
          <h3 className={`${zenDots.className} text-white text-sm mb-3 opacity-80`}>
            Bronze
          </h3>
          <div className="flex justify-center items-center flex-wrap gap-3">
            <a href="https://elevenlabs.io/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity bg-white rounded p-1">
              <Image
                src="/elevenlabs.png"
                alt="ElevenLabs"
                width={80}
                height={40}
                className="object-contain"
                style={{ maxHeight: '30px', width: 'auto' }}
              />
            </a>
            <a href="https://balsamiq.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity bg-white rounded p-1">
              <Image
                src="/balsamiq.png"
                alt="Balsamiq"
                width={80}
                height={40}
                className="object-contain"
                style={{ maxHeight: '30px', width: 'auto' }}
              />
            </a>
            <a href="https://figma.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity bg-white rounded p-1">
              <Image
                src="/figma.png"
                alt="Figma"
                width={80}
                height={40}
                className="object-contain"
                style={{ maxHeight: '30px', width: 'auto' }}
              />
            </a>
            <a href="https://featherless.ai/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity bg-white rounded p-1">
              <Image
                src="/featherless.png"
                alt="Featherless"
                width={80}
                height={40}
                className="object-contain"
                style={{ maxHeight: '30px', width: 'auto' }}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Sponsors Section - scrollable below content */}
      <div className="lg:hidden relative z-10 px-4 pb-16" style={{ marginTop: '40px' }}>
        <div
          style={{
            backgroundColor: '#1B104C',
            borderRadius: '25px',
            padding: '24px',
          }}
        >
          <h2 className={`${zenDots.className} text-white text-2xl mb-6`} style={{ lineHeight: '1.2em' }}>
            Sponsors
          </h2>

          {/* Platinum */}
          <div className="mb-6">
            <h3 className={`${zenDots.className} text-white text-base mb-4`}>Platinum Sponsor</h3>
            <div className="flex justify-center">
              <a href="https://www.dedaluslabs.ai/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/dedalus-labs-logo.png" alt="Dedalus Labs" width={150} height={100} className="object-contain" style={{ maxHeight: '100px' }} />
              </a>
            </div>
          </div>

          {/* Gold */}
          <div className="mb-6">
            <h3 className={`${zenDots.className} text-white text-base mb-4`}>Gold Sponsors</h3>
            <div className="flex justify-center flex-wrap gap-4">
              <a href="https://www.flowglad.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/flowglad.png" alt="Flowglad" width={120} height={70} className="object-contain" style={{ maxHeight: '70px' }} />
              </a>
              <a href="https://ifm.ai/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity bg-white rounded-lg p-2">
                <Image src="/ifm.png" alt="IFM" width={120} height={70} className="object-contain" style={{ maxHeight: '60px' }} />
              </a>
            </div>
          </div>

          {/* Silver */}
          <div className="mb-6">
            <h3 className={`${zenDots.className} text-white text-base mb-4`}>Silver Sponsors</h3>
            <div className="flex justify-center flex-wrap gap-4">
              <a href="https://www.safetykit.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/safetykit.jpeg" alt="SafetyKit" width={100} height={60} className="object-contain" style={{ maxHeight: '60px' }} />
              </a>
              <a href="https://scale.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/scale.png" alt="Scale" width={100} height={60} className="object-contain" style={{ maxHeight: '60px' }} />
              </a>
              <a href="https://www.sonarsource.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/sonarsource.jpg" alt="SonarSource" width={100} height={60} className="object-contain" style={{ maxHeight: '60px' }} />
              </a>
              <a href="https://www.columbia.edu/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/columbia.jpg" alt="Columbia" width={100} height={60} className="object-contain" style={{ maxHeight: '60px' }} />
              </a>
            </div>
          </div>

          {/* Bronze */}
          <div>
            <h3 className={`${zenDots.className} text-white text-base mb-4`}>Bronze Sponsors</h3>
            <div className="flex justify-center flex-wrap gap-4">
              <a href="https://elevenlabs.io/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity bg-white rounded-lg p-2">
                <Image src="/elevenlabs.png" alt="ElevenLabs" width={100} height={50} className="object-contain" style={{ maxHeight: '50px' }} />
              </a>
              <a href="https://balsamiq.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity bg-white rounded-lg p-2">
                <Image src="/balsamiq.png" alt="Balsamiq" width={100} height={50} className="object-contain" style={{ maxHeight: '50px' }} />
              </a>
              <a href="https://figma.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity bg-white rounded-lg p-2">
                <Image src="/figma.png" alt="Figma" width={100} height={50} className="object-contain" style={{ maxHeight: '50px' }} />
              </a>
              <a href="https://featherless.ai/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity bg-white rounded-lg p-2">
                <Image src="/featherless.png" alt="Featherless" width={100} height={50} className="object-contain" style={{ maxHeight: '50px' }} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-up {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-down {
          0% { transform: translateY(0px); }
          50% { transform: translateY(15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-up {
          animation: float-up 6s ease-in-out infinite;
        }
        .animate-float-down {
          animation: float-down 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
