import type { Metadata } from "next";
import { Geist, Geist_Mono, Russo_One } from "next/font/google";
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
        className={`${geistSans.variable} ${geistMono.variable} ${russoOne.variable} font-sans antialiased overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
