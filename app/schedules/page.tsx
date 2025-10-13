'use client';

import { motion } from 'framer-motion';
import { Russo_One } from 'next/font/google';
import { Instagram } from 'lucide-react';
import Link from 'next/link';

// Load Russo One font
const russo = Russo_One({
  weight: '400',
  subsets: ['latin'],
});

export default function Schedules() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        duration: 0.8 
      }
    },
  };

  const schedule = [
    {
      day: "Day 1 - February 8th",
      events: [
        { time: "9:00 AM", title: "Registration & Check-in", description: "Welcome! Get your badge and settle in." },
        { time: "10:00 AM", title: "Opening Ceremony", description: "Keynote speakers and event kickoff." },
        { time: "11:00 AM", title: "Team Formation", description: "Find your teammates or form new teams." },
        { time: "12:00 PM", title: "Hacking Begins!", description: "Let's start building something amazing!" },
        { time: "1:00 PM", title: "Lunch", description: "Fuel up for the coding marathon ahead." },
        { time: "3:00 PM", title: "Workshop: Web Development", description: "Learn the latest in web technologies." },
        { time: "5:00 PM", title: "Workshop: AI/ML", description: "Introduction to machine learning concepts." },
        { time: "7:00 PM", title: "Dinner", description: "Take a break and network with fellow hackers." },
        { time: "9:00 PM", title: "Midnight Snacks", description: "Late night coding fuel!" },
      ]
    },
    {
      day: "Day 2 - February 9th",
      events: [
        { time: "12:00 AM", title: "Late Night Coding", description: "Keep building through the night!" },
        { time: "8:00 AM", title: "Breakfast", description: "Start the day with some energy." },
        { time: "10:00 AM", title: "Workshop: Mobile Development", description: "Build apps for iOS and Android." },
        { time: "12:00 PM", title: "Lunch", description: "Almost there! Final push ahead." },
        { time: "2:00 PM", title: "Project Submissions Due", description: "Time to submit your amazing projects!" },
        { time: "3:00 PM", title: "Judging & Demos", description: "Show off what you've built." },
        { time: "5:00 PM", title: "Closing Ceremony", description: "Awards, prizes, and celebration!" },
        { time: "6:00 PM", title: "Event Ends", description: "Thanks for an amazing weekend!" },
      ]
    }
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start pt-10 p-8 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/space-bg.png')] bg-cover bg-center bg-no-repeat z-0"
        aria-hidden="true"
      />

      {/* Navigation */}
      <nav className="relative z-20 mb-8">
        <Link 
          href="/" 
          className={`${russo.className} text-2xl font-bold text-white hover:text-purple-300 transition-colors`}
        >
          ← Back to Home
        </Link>
      </nav>

      {/* Animated Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center w-full text-center max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.h1
          className={`${russo.className} text-5xl sm:text-6xl md:text-7xl font-bold mb-12 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]`}
          variants={itemVariants}
        >
          SCHEDULE
        </motion.h1>

        {/* Schedule Days */}
        {schedule.map((day, dayIndex) => (
          <motion.div 
            key={dayIndex}
            className="w-full mb-8"
            variants={itemVariants}
          >
            {/* Day Header */}
            <h2 className={`${russo.className} text-2xl font-bold mb-6 text-purple-300`}>
              {day.day}
            </h2>

            {/* Events Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-blue-400"></div>

              {/* Events */}
              <div className="space-y-6">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="relative flex items-start">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-purple-400 rounded-full border-2 border-white"></div>
                    
                    {/* Event Content */}
                    <div className="ml-16 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <span className="text-purple-300 font-semibold text-sm mb-1 md:mb-0">
                          {event.time}
                        </span>
                        <h3 className={`${russo.className} text-lg font-bold`}>
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Important Notice */}
        <motion.div
          className="mt-8 p-6 bg-yellow-600/20 backdrop-blur-sm rounded-lg border border-yellow-400/30"
          variants={itemVariants}
        >
          <h3 className={`${russo.className} text-lg font-bold mb-2 text-yellow-300`}>
            ⚠️ Schedule Subject to Change
          </h3>
          <p className="text-gray-300 text-sm">
            This schedule is tentative and may be updated as we get closer to the event. 
            Please check back regularly for the most current information.
          </p>
        </motion.div>
      </motion.div>

      {/* Container for bottom-left links */}
      <div className="absolute bottom-8 left-8 z-30 flex items-center space-x-4">
        {/* Instagram Link */}
        <a
          href="https://www.instagram.com/adicolumbia/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ADI Columbia Instagram"
          className="text-white/70 hover:text-white/90 transition-colors cursor-pointer"
        >
          <Instagram size={28} />
        </a>

        {/* Code of Conduct Link */}
        <a
          href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="MLH Code of Conduct"
          className="text-sm font-sans text-white/70 hover:text-white/90 hover:underline transition-colors cursor-pointer"
        >
          Code of Conduct
        </a>
      </div>
    </main>
  );
}
