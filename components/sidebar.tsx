'use client';

import { Zen_Dots } from 'next/font/google';
import Link from 'next/link';

const zenDots = Zen_Dots({
  weight: '400',
  subsets: ['latin'],
});

export default function Sidebar() {
  return (
    <div className={`absolute left-[24px] top-[190px] z-30 w-[253px] ${zenDots.className} rounded-[20px] overflow-hidden`}>
      {/* Content Container */}
      <div className="relative z-10 flex flex-col">
        {/* Links Section - Top (constrained to Group 13 box) */}
        <div 
          className="left-0 top-0 w-[253px] text-[15px] text-[#000000] rounded-[20px]"
          style={{ 
            backgroundImage: 'url(/sidebar-group-13.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '17px 19px'
          }}
        >
          <div
            className="w-full"
            style={{ 
              textAlign: 'left',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
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

        {/* WHO IS ADI Section - Bottom (constrained to Group 12 box) */}
        <div 
          className="mt-5 left-0 w-[253px] text-[16px] text-[#000000] rounded-[20px]"
          style={{
            backgroundImage: 'url(/sidebar-group-12.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '17px 19px'
          }}
        >
          <div
            className="w-full"
            style={{
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
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
    </div>
  );
}
