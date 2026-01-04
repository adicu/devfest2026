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
    <main className="relative min-h-screen w-full overflow-hidden" style={{ cursor: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'17\' viewBox=\'0 0 73 51\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M-6.14341e-05 7.29999e-06L56.6044 3.95817L24.8743 51L-6.14341e-05 7.29999e-06Z\' fill=\'white\'/%3E%3Crect x=\'35.83\' y=\'17.8153\' width=\'40.3205\' height=\'15.1202\' transform=\'rotate(24 35.83 17.8153)\' fill=\'white\'/%3E%3C/svg%3E") 0 0, auto' }}>
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

      {/* Main Content Frame */}
      <div 
        className="absolute z-10 main-content-frame-responsive"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          top: '20%',
          width: '90%',
          height: '75%',
          maxHeight: '75%',
          backgroundColor: '#1B104C',
          borderRadius: '25px',
          overflowY: 'auto',
          padding: '0',
        }}
      >
        {/* Judges Section */}
        <div className="relative" style={{ padding: '3.1% 5.1% 0 5.1%' }}>
          <h2 className={`${zenDots.className} text-white text-4xl mb-8`} style={{ fontSize: '40px', lineHeight: '1.2em' }}>
            Judges
          </h2>

          {/* Judges Grid */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            {judges.map((judge, index) => (
              <div
                key={judge.id}
                className="relative w-full"
                style={{
                  aspectRatio: '272 / 213',
                  minHeight: '180px'
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
                    left: '2.5%',
                    top: '15.8%',
                    width: '44.3%',
                    height: '68%',
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
                    left: '51.1%',
                    top: '14.2%',
                    width: '46.1%',
                    height: '69.5%',
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
        <div className="relative" style={{ padding: '0', zIndex: 1, width: '100%' }}>
          <div style={{ padding: '0 5.1% 0 5.1%' }}>
            <h2 className={`${zenDots.className} text-white text-4xl mb-8`} style={{ fontSize: '40px', lineHeight: '1.2em' }}>
              Sponsors
            </h2>
          </div>

          {/* Sponsor Rows Wrapper - full width */}
          <div className="relative" style={{ width: '100%', paddingBottom: '3.3%' }}>
            {/* Dedalus Labs Logo - positioned between row 1 and 2 */}
            <div className="relative mb-6" style={{ marginTop: '-2%', height: '15%', zIndex: 2, width: '100%' }}>
            {/* Background Image - full width */}
            <div 
              style={{ 
                position: 'absolute',
                left: '0',
                right: '0',
                top: '0',
                bottom: '0',
                backgroundColor: '#1B104C',
                backgroundImage: 'url(/sponsor-row-1.svg)',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                width: '100%',
                height: '100%'
              }}
            />
            {/* Logo */}
            <div className="relative flex justify-center items-center" style={{ height: '100%', zIndex: 1 }}>
              <Image
                src="/dedalus-labs-logo.png"
                alt="Dedalus Labs"
                width={149}
                height={149}
                style={{ 
                  width: '12%', 
                  height: '55%', 
                  display: 'block',
                  objectFit: 'contain'
                }}
              />
            </div>
            </div>

            {/* Sponsor Logos Row 2 - with frame container */}
            <div className="relative mb-6" style={{ height: '120px', minHeight: '120px', zIndex: 2, width: '100%' }}>
              {/* Background Image - full width */}
              <div 
                style={{ 
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  top: '0',
                  bottom: '0',
                  backgroundColor: '#1B104C',
                  backgroundImage: 'url(/sponsor-row-2.svg)',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>

            {/* Sponsor Logos Row 3 - with frame container */}
            <div className="relative mb-6" style={{ marginTop: '-1.4%', height: '9.9%', zIndex: 2, width: '100%' }}>
              {/* Background Image - full width */}
              <div 
                style={{ 
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  top: '0',
                  bottom: '0',
                  backgroundColor: '#1B104C',
                  backgroundImage: 'url(/sponsor-row-3.svg)',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  width: '100%',
                  height: '100%'
                }}
              />
              {/* Logos */}
              <div className="relative flex items-center justify-center" style={{ height: '100%', zIndex: 1, gap: '2.8%' }}>
                {/* Sonar Logo */}
                <Image
                  src="/logo-left.png"
                  alt="Sonar"
                  width={131}
                  height={93}
                  style={{ 
                    width: '11%', 
                    height: '52%', 
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
                    width: '8%', 
                    height: '52%', 
                    display: 'block',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>

            {/* Sponsor Logos Row 4 - with frame container */}
            <div className="relative mb-6" style={{ height: '100px', minHeight: '100px', zIndex: 2, width: '100%' }}>
              {/* Background Image - full width */}
              <div 
                style={{ 
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  top: '0',
                  bottom: '0',
                  backgroundColor: '#1B104C',
                  backgroundImage: 'url(/sponsor-row-4.svg)',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
