'use client';

import { useState, useEffect } from 'react';
import { Barlow_Condensed } from 'next/font/google';

// Load Barlow Condensed font
const barlowCondensed = Barlow_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2026-02-08T00:00:00Z');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className={`${barlowCondensed.className} text-center mt-4 w-full`}>
      <div className="flex justify-center items-start space-x-2 md:space-x-6">
        {/* Days */}
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-6xl font-bold text-white tabular-nums">
            {formatNumber(timeLeft.days)}
          </div>
          <p className="text-xs md:text-sm text-[#E9C3FF] font-medium uppercase tracking-wider mt-1">
            Days
          </p>
        </div>

        {/* Colon */}
        <div className="text-4xl md:text-6xl font-bold text-[#E9C3FF]">:</div>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-6xl font-bold text-white tabular-nums">
            {formatNumber(timeLeft.hours)}
          </div>
          <p className="text-xs md:text-sm text-[#E9C3FF] font-medium uppercase tracking-wider mt-1">
            Hours
          </p>
        </div>

        {/* Colon */}
        <div className="text-4xl md:text-6xl font-bold text-[#E9C3FF]">:</div>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-6xl font-bold text-white tabular-nums">
            {formatNumber(timeLeft.minutes)}
          </div>
          <p className="text-xs md:text-sm text-[#E9C3FF] font-medium uppercase tracking-wider mt-1">
            Minutes
          </p>
        </div>

        {/* Colon */}
        <div className="text-4xl md:text-6xl font-bold text-[#E9C3FF]">:</div>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-6xl font-bold text-white tabular-nums">
            {formatNumber(timeLeft.seconds)}
          </div>
          <p className="text-xs md:text-sm text-[#E9C3FF] font-medium uppercase tracking-wider mt-1">
            Seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
