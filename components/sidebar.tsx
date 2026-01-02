'use client';

import { Zen_Dots } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const zenDots = Zen_Dots({
  weight: '400',
  subsets: ['latin'],
});

export default function Sidebar() {
  return (
    <div className={`absolute left-[24px] top-[190px] z-30 w-[253px] h-[648px] ${zenDots.className} rounded-[20px] overflow-hidden`}>
      {/* Background Images */}
      {/* Group 13 - Top section background */}
      <div className="absolute top-0 left-0 w-[253px] h-[260px] rounded-[20px] overflow-hidden pointer-events-none">
        <Image
          src="/sidebar-group-13.svg"
          alt="Sidebar background top"
          fill
          className="object-cover"
        />
      </div>

      {/* Group 12 - Bottom section background */}
      <div className="absolute top-[280px] left-0 w-[253px] h-[250px] rounded-[20px] overflow-hidden pointer-events-none">
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
          className="absolute left-[19px] w-[216px] text-[15px] text-[#000000]"
          style={{ 
            top: '17px',
            height: '266px',
            textAlign: 'left',
            overflow: 'hidden',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            paddingBottom: '17px',
            boxSizing: 'border-box',
            lineHeight: '100%',
            letterSpacing: '0%',
          }}
        >
          <div className="mb-3">
            <Link 
              href="https://forms.gle/WEepULcHQo5GCefK7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#E82AFA] underline break-words text-[15px]"
            >
              REGISTER NOW
            </Link>
          </div>

          <div className="mb-3">
            <h4 className="mb-1 underline">DEVPOST</h4>
            <p className="break-words">
              Checkout the <Link href="https://devfest-2026.devpost.com/?ref_feature=challenge&ref_medium=discover" target="_blank" rel="noopener noreferrer" className="text-[#E82AFA] underline">DevPost</Link> for prizes and submissions.
            </p>
          </div>

          <div className="mb-3">
            <h4 className="mb-1 underline">SCHEDULE</h4>
            <Link 
              href="https://calendar.google.com/calendar/u/0/r" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E82AFA] underline break-words"
            >
              Google Calendar
            </Link>
          </div>

          <div>
            <h4 className="mb-1 underline">DEVFEST DISCORD</h4>
            <p className="break-words">
              Join our devfest <Link href="https://discord.com" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#E82AFA' }}>discord</Link> community to ask questions, find teammates, and more!
            </p>
          </div>
        </div>
      </div>

      {/* Clipping container for bottom section text */}
      <div 
        className="absolute top-[280px] left-0 w-[253px] h-[250px] rounded-[20px] overflow-hidden pointer-events-auto"
        style={{ 
          zIndex: 15,
          clipPath: 'inset(0)',
        }}
      >
        {/* WHO IS ADI Section - Bottom (constrained to Group 12 box) */}
        <div 
          className="absolute left-[19px] top-[17px] w-[216px] text-[16px] text-[#000000]"
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
            lineHeight: '100%',
            letterSpacing: '0%',
          }}
        >
          <h3 className="underline" style={{ 
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
            <Link href="https://www.adicu.com/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#E82AFA' }}>ADI</Link> (Application Development Initiative) is a student group at Columbia University that aims to foster a community of students interested in tech.
          </p>
          <p style={{ 
            wordBreak: 'break-word', 
            margin: '0',
            marginTop: '8px',
            paddingBottom: '0',
            flexShrink: 0,
            overflow: 'hidden',
          }}>
            Stay in touch: <Link href="https://www.instagram.com/adicolumbia/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#E82AFA' }}>Instagram</Link>, <Link href="https://www.tiktok.com/@adicolumbia" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#E82AFA' }}>Tiktok</Link>, <Link href="https://discord.com" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#E82AFA' }}>Discord</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
