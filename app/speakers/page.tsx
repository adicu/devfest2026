'use client';

import { Zen_Dots, Pixelify_Sans } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Sidebar from "@/components/sidebar";

// Load fonts
const zenDots = Zen_Dots({
  weight: '400',
  subsets: ['latin'],
});

const pixelify = Pixelify_Sans({
  weight: '400',
  subsets: ['latin'],
});

export default function Speakers() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Placeholder data for judges - replace with actual data
  const judges = [
    { id: 1, name: 'First Last', info: 'INFO' },
    { id: 2, name: 'First Last', info: 'INFO' },
    { id: 3, name: 'First Last', info: 'INFO' },
    { id: 4, name: 'First Last', info: 'INFO' },
    { id: 5, name: 'First Last', info: 'INFO' },
    { id: 6, name: 'First Last', info: 'INFO' },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
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
          <Link href="/" className="flex items-center gap-4 ml-16 cursor-pointer hover:opacity-80 transition-opacity">
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

      {/* Main Content Frame */}
      <div 
        className="absolute z-10"
        style={{
          left: '390px',
          top: '190px',
          width: '1030px',
          height: 'calc(100vh - 210px)',
          maxHeight: 'calc(100vh - 210px)',
          backgroundColor: '#1B104C',
          borderRadius: '25px',
          overflowY: 'auto',
          padding: '0',
        }}
      >
        {/* Judges Section */}
        <div className="relative" style={{ padding: '47px 78px 0 78px' }}>
          <h2 className={`${zenDots.className} text-white text-4xl mb-8`} style={{ fontSize: '40px', lineHeight: '1.2em' }}>
            Judges
          </h2>

          {/* Judges Grid */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            {judges.map((judge, index) => (
              <div
                key={judge.id}
                className="relative"
                style={{
                  width: '272px',
                  height: '213px',
                }}
              >
                {/* Judge Card Background/Frame */}
                <div className="absolute inset-0">
                  <Image
                    src="/judge-card-frame.svg"
                    alt="Judge card frame"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Image Placeholder */}
                <div
                  className="absolute"
                  style={{
                    left: '6.74px',
                    top: '33.68px',
                    width: '120.42px',
                    height: '144.81px',
                    backgroundColor: '#ccc',
                    borderRadius: '4px',
                  }}
                >
                  {/* Placeholder for judge image */}
                </div>

                {/* Name and Info Text */}
                <div
                  className={`absolute ${pixelify.className} text-white`}
                  style={{
                    left: '138.95px',
                    top: '30.31px',
                    width: '125.47px',
                    height: '148.17px',
                    fontSize: '14px',
                    lineHeight: '1.2em',
                  }}
                >
                  <span
                    style={{
                      color: '#77EAFF',
                      textDecoration: 'underline',
                      textDecorationColor: '#77EAFF',
                      textUnderlineOffset: '2px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                    }}
                  >
                    {judge.name}
                  </span>
                  <br />
                  {judge.info}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="relative" style={{ padding: '0 78px 50px 78px', zIndex: 1 }}>
          <h2 className={`${zenDots.className} text-white text-4xl mb-8`} style={{ fontSize: '40px', lineHeight: '1.2em' }}>
            Sponsors
          </h2>

          {/* Dedalus Labs Logo - positioned between row 1 and 2 */}
          <div 
            className="flex justify-center items-center mb-6" 
            style={{ 
              marginTop: '-30px', 
              position: 'relative', 
              zIndex: 2, 
              backgroundColor: '#1B104C',
              backgroundImage: 'url(/sponsor-row-1.svg)',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left top',
              width: '910px',
              height: '218px',
              marginLeft: '-6px'
            }}
          >
            <Image
              src="/dedalus-labs-logo.png"
              alt="Dedalus Labs"
              width={149}
              height={149}
              style={{ 
                width: '149px', 
                height: '149px', 
                display: 'block',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Sponsor Logos Row 2 - with frame container */}
          <div 
            className="mb-6" 
            style={{ 
              height: '166px', 
              width: '910px', 
              marginLeft: '-6px', 
              position: 'relative',
              backgroundColor: '#1B104C',
              backgroundImage: 'url(/sponsor-row-2.svg)',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left top',
              border: '2px solid transparent'
            }}
          />

          {/* Sponsor Logos Row 3 - with frame container */}
          <div 
            className="mb-6 flex items-center justify-center" 
            style={{ 
              height: '143px', 
              width: '910px', 
              marginLeft: '-6px',
              marginTop: '-20px',
              position: 'relative',
              backgroundColor: '#1B104C',
              backgroundImage: 'url(/sponsor-row-3.svg)',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left top',
              border: '2px solid transparent',
              gap: '40px'
            }}
          >
            {/* Sonar Logo */}
            <Image
              src="/logo-left.png"
              alt="Sonar"
              width={131}
              height={93}
              style={{ 
                width: '131px', 
                height: '93px', 
                display: 'block',
                objectFit: 'contain'
              }}
            />
            {/* Three Interlocking Circles Logo */}
            <Image
              src="/logo-right.png"
              alt="Sponsor"
              width={94}
              height={94}
              style={{ 
                width: '94px', 
                height: '94px', 
                display: 'block',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Sponsor Logos Row 4 - with frame container */}
          <div 
            className="mb-6" 
            style={{ 
              height: '126px', 
              width: '910px', 
              marginLeft: '-6px', 
              position: 'relative',
              backgroundColor: '#1B104C',
              backgroundImage: 'url(/sponsor-row-4.svg)',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left top',
              border: '2px solid transparent'
            }}
          />

        </div>
      </div>
    </main>
  );
}
