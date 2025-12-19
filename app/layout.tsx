import type { Metadata } from "next";
import { Geist, Geist_Mono, Russo_One, Pixelify_Sans, Zen_Dots, Allerta_Stencil } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Setup Russo_One font
const russoOne = Russo_One({
  subsets: ["latin"],
  variable: '--font-russo-one', // CSS variable
  weight: ['400'], // Russo One only has 400 weight
});

// Setup Pixelify Sans font
const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  variable: '--font-pixelify-sans',
  weight: ['400'],
});

// Setup Zen Dots font
const zenDots = Zen_Dots({
  subsets: ["latin"],
  variable: '--font-zen-dots',
  weight: ['400'],
});

// Setup Allerta Stencil font
const allertaStencil = Allerta_Stencil({
  subsets: ["latin"],
  variable: '--font-allerta-stencil',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: "Columbia DevFest Countdown",
  description: "Countdown to the Columbia DevFest Hackathon on Feb 8th, 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${russoOne.variable} ${pixelifySans.variable} ${zenDots.variable} ${allertaStencil.variable} font-sans antialiased overflow-hidden`}
      >
        {/* MLH Trust Badge */}
        <a 
          id="mlh-trust-badge" 
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white" 
          target="_blank" 
          style={{
            display: 'block',
            maxWidth: '100px',
            minWidth: '60px',
            position: 'fixed',
            left: '24px', // Sticking to the left edge
            top: '0',  // Sticking to the top edge
            width: '10%',
            zIndex: 10000
          }}
        >
          <img 
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg" 
            alt="Major League Hacking 2026 Hackathon Season" 
            style={{ width: '100%' }} 
          />
        </a>
        {children}
      </body>
    </html>
  );
}
