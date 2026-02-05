'use client';

import { Zen_Dots, Pixelify_Sans } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { User } from 'lucide-react';
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

  // Judges data
  const judges = [
    { id: 1, name: 'William Nafack', info: 'JP Morgan Chase', image: null },
    { id: 2, name: 'Alper Canberk', info: 'Sunday', image: null },
    { id: 3, name: 'Euphie Zhou', info: 'CRIO', image: null },
    { id: 4, name: 'Gabor Csapo', info: 'Google', image: '/Gabor.png' },
    { id: 5, name: 'Ahsaas Bajaj', info: 'Instacart', image: '/ahsaas.png' },
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
        <div className="relative" style={{ padding: '3.1% 5.1% 3.3% 5.1%' }}>
          <h2 className={`${zenDots.className} text-white text-4xl mb-8`} style={{ fontSize: '40px', lineHeight: '1.2em' }}>
            Judges
          </h2>

          {/* Judges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {judges.map((judge) => (
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

                {/* Image or NA */}
                <div
                  className="absolute flex items-center justify-center"
                  style={{
                    left: '2.5%',
                    top: '15.8%',
                    width: '44.3%',
                    height: '68%',
                    backgroundColor: 'transparent',
                    borderRadius: '4px',
                  }}
                >
                  {judge.image ? (
                    <div className="relative w-full h-full" style={{ borderRadius: '4px', overflow: 'hidden' }}>
                      <Image
                        src={judge.image}
                        alt={judge.name}
                        fill
                        className="object-cover"
                        style={{ borderRadius: '4px' }}
                      />
                    </div>
                  ) : (
                    <User className="text-white" size={48} style={{ opacity: 0.7 }} />
                  )}
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
                  Working at {judge.info}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
