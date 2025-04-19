'use client';

import { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateDaysLeft = () => {
    const targetDate = new Date('2026-02-08T00:00:00Z'); // Set target date to Feb 8, 2026 UTC
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    // Calculate days, ensuring we round up correctly
    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

    return daysLeft > 0 ? daysLeft : 0; // Return 0 if the date has passed
  };

  const [days, setDays] = useState(0);

  useEffect(() => {
    // Calculate initial days on client mount
    setDays(calculateDaysLeft());

    // Optional: Set up an interval to update the countdown daily if needed,
    // though for just days, it might not be necessary unless the app stays open for days.
    // const interval = setInterval(() => {
    //   setDays(calculateDaysLeft());
    // }, 1000 * 60 * 60 * 24); // Update once a day
    // return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <div className="font-orbitron text-8xl md:text-9xl font-bold text-primary-foreground tabular-nums">
        {days}
      </div>
      <p className="font-orbitron mt-2 text-xl md:text-2xl text-muted-foreground font-medium tracking-wider">
        days to launch
      </p>
    </div>
  );
};

export default Countdown; 