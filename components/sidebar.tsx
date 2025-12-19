'use client';

import { Pixelify_Sans } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const pixelify = Pixelify_Sans({
  weight: '400',
  subsets: ['latin'],
});

export default function Sidebar() {
  return (
    <div className={`absolute left-[77px] top-[162px] z-30 w-[253px] h-[648px] ${pixelify.className} rounded-[20px] overflow-hidden`}>
      {/* Background Images */}
      {/* Group 13 - Top section background */}
      <div className="absolute top-0 left-0 w-[253px] h-[270px] rounded-[20px] overflow-hidden pointer-events-none">
        <Image
          src="/sidebar-group-13.svg"
          alt="Sidebar background top"
          fill
          className="object-cover"
        />
      </div>

      {/* Group 12 - Bottom section background */}
      <div className="absolute top-[300px] left-0 w-[253px] h-[250px] rounded-[20px] overflow-hidden pointer-events-none">
        <Image
          src="/sidebar-group-12.svg"
          alt="Sidebar background bottom"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col overflow-hidden">
        {/* Links Section - Top (constrained to Group 13 box) */}
        <div 
          className="absolute left-[19px] top-[17px] w-[216px] h-[256px] text-[16px] leading-[1.2em] text-[#000000]"
          style={{ 
            textAlign: 'left',
            overflow: 'hidden',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          <div className="mb-3">
            <h4 className="font-bold mb-1">DEVPOST</h4>
            <p className="break-words">
              Checkout the <Link href="https://devpost.com" target="_blank" rel="noopener noreferrer" className="text-[#E82AFA] underline">DevPost</Link> for prizes and submissions.
            </p>
          </div>

          <div className="mb-3">
            <h4 className="font-bold mb-1">SCHEDULE</h4>
            <Link 
              href="/schedules" 
              className="text-[#E82AFA] underline break-words"
            >
              Google Calendar
            </Link>
          </div>

          <div>
            <h4 className="font-bold mb-1">DEVFEST DISCORD</h4>
            <p className="break-words">
              Join our devfest <Link href="https://discord.com" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#E82AFA' }}>discord</Link> community to ask questions, find teammates, and more!
            </p>
          </div>
        </div>
      </div>

      {/* Clipping container for bottom section text */}
      <div 
        className="absolute top-[300px] left-0 w-[253px] h-[250px] rounded-[20px] overflow-hidden pointer-events-auto"
        style={{ 
          zIndex: 15,
          clipPath: 'inset(0)',
        }}
      >
        {/* WHO IS ADI Section - Bottom (constrained to Group 12 box) */}
        <div 
          className="absolute left-[19px] top-[17px] w-[216px] text-[16px] leading-[1.2em] text-[#000000]"
          style={{
            overflow: 'hidden',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            maxWidth: '216px',
            maxHeight: '259px',
            boxSizing: 'border-box',
            padding: '0',
            paddingBottom: '0',
            display: 'flex',
            flexDirection: 'column',
            height: '259px',
          }}
        >
          <h3 className="font-bold" style={{ 
            wordBreak: 'break-word', 
            margin: '0 0 4px 0',
            flexShrink: 0,
            overflow: 'hidden',
          }}>
            WHO IS ADI?
          </h3>
          <p style={{ 
            wordBreak: 'break-word', 
            marginTop: '0',
            overflow: 'hidden',
            minHeight: 0,
          }}>
            ADI (Application Development Initiative) is a student group at Columbia University that aims to foster a community of students interested in tech.
          </p>
          <p style={{ 
            wordBreak: 'break-word', 
            margin: '0',
            marginTop: '8px',
            paddingBottom: '0',
            flexShrink: 0,
            overflow: 'hidden',
          }}>
            Stay in touch: <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#E82AFA' }}>Instagram</Link>, <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#E82AFA' }}>Tiktok</Link>, <Link href="https://discord.com" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#E82AFA' }}>Discord</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

