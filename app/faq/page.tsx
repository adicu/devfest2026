'use client';

import { motion } from 'framer-motion';
import { Russo_One, Allerta_Stencil, Zen_Dots } from 'next/font/google';
import { Instagram } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Font configurations
const russo = Russo_One({
  weight: '400',
  subsets: ['latin'],
});

const allertaStencil = Allerta_Stencil({
  weight: '400',
  subsets: ['latin'],
});

const zenDots = Zen_Dots({
  weight: '400',
  subsets: ['latin'],
});

// Animation variants
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

// FAQ data
const faqs = [
  {
    question: "Is the hackathon online or in-person?",
    answer: "DevFest will be held in-person, on Columbia University's campus."
  },
  {
    question: "Who is eligible to participate?",
    answer: "DevFest is open to all college students ages 18 and older. Please be aware that travel is unfortunately NOT sponsored."
  },
  {
    question: "When is Devfest?",
    answer: "Devfest will be _______."
  },
  {
    question: "What is the team size limit?",
    answer: "Teams can be of 1-4 people. Individual participation is allowed."
  },
  {
    question: "Will there be mentorship or support given?",
    answer: "Yes, experienced students and industry professionals (ADI alumni!) will be in-person and online during the hackathon."
  },
  {
    question: "Who do I contact for questions or concerns?",
    answer: "If you have any questions or concerns, feel free to reach out to us via email at devfestorganizers@googlegroups.com or on our Discord server, where you can ping any of the organizers. For additional guidance, please refer to the MLH Code of Conduct."
  }
];

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Constants for accordion layout
  const CONTAINER_HEIGHT = 258;
  const BASE_ROW_HEIGHT = CONTAINER_HEIGHT / 6; // 43px per row
  const EXPANDED_ROW_HEIGHT = BASE_ROW_HEIGHT * 3; // (3x base)

  // Calculate how many rows fit below the expanded row
  const getRowsBelowExpanded = (expandedIndex: number) => {
    if (openFAQ === null) return 0;
    const spaceUsed = (expandedIndex + 1) * BASE_ROW_HEIGHT + BASE_ROW_HEIGHT; // rows above + expanded row
    const spaceRemaining = CONTAINER_HEIGHT - spaceUsed;
    return Math.floor(spaceRemaining / BASE_ROW_HEIGHT);
  };

  // Calculate offset to push rows up if answer doesn't fit
  const getUpwardOffset = (expandedIndex: number) => {
    if (openFAQ === null || openFAQ !== expandedIndex) return 0;
    
    const spaceNeeded = EXPANDED_ROW_HEIGHT;
    const spaceBelow = CONTAINER_HEIGHT - (expandedIndex + 1) * BASE_ROW_HEIGHT;
    const overflow = spaceNeeded - spaceBelow;
    
    if (overflow > 0) {
      // Calculate how many full rows we need to push up
      const rowsToPush = Math.ceil(overflow / BASE_ROW_HEIGHT);
      return rowsToPush * BASE_ROW_HEIGHT;
    }
    return 0;
  };

  // Calculate top position for each row
  const getRowTop = (index: number) => {
    if (openFAQ === null) {
      return index * BASE_ROW_HEIGHT;
    }

    const expandedIndex = openFAQ;
    const upwardOffset = getUpwardOffset(expandedIndex);
    
    if (index < expandedIndex) {
      // Rows above expanded row - push up if needed
      return index * BASE_ROW_HEIGHT - upwardOffset;
    } else if (index === expandedIndex) {
      // Expanded row
      return expandedIndex * BASE_ROW_HEIGHT - upwardOffset;
    } else {
      // Rows below expanded row
      const rowsBelow = getRowsBelowExpanded(expandedIndex);
      if (index <= expandedIndex + rowsBelow) {
        return expandedIndex * BASE_ROW_HEIGHT - upwardOffset + EXPANDED_ROW_HEIGHT + (index - expandedIndex - 1) * BASE_ROW_HEIGHT;
      }
      // Row is hidden
      return CONTAINER_HEIGHT;
    }
  };

  // Calculate if row is visible
  const isRowVisible = (index: number) => {
    if (openFAQ === null) {
      return index < 6;
    }

    const expandedIndex = openFAQ;
    const rowTop = getRowTop(index);
    const rowHeight = index === expandedIndex ? EXPANDED_ROW_HEIGHT : BASE_ROW_HEIGHT;
    const rowBottom = rowTop + rowHeight;
    
    // Row is visible if it's within container bounds and not hidden
    return rowTop >= 0 && rowBottom <= CONTAINER_HEIGHT && rowTop < CONTAINER_HEIGHT;
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start pt-10 p-8 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/faqimages/faqbackground.png')] bg-cover bg-center bg-no-repeat z-0"
        aria-hidden="true"
      />

      {/* Main Frame Container */}
      <div
        className="absolute opacity-100"
        style={{
          width: '1108px',
          height: '781px',
          top: '132px',
          left: '327px',
        }}
      >
        {/* Planet - positioned relative to frame */}
        <div
          className="absolute bg-[url('/faqimages/planet.png')] bg-cover bg-center opacity-100"
          style={{
            width: '1100px',
            height: '900px',
            top: '-210px',
            left: '-3.22px',
            transform: 'rotate(179deg)',
            zIndex: 5,
          }}
        />

        {/* Planet Border - positioned relative to frame */}
        <div
          className="absolute opacity-100 z-[10] overflow-visible "
          style={{
            width: '1250px',
            height: '661px',
            top: '-295px',
            left: '-77px',
          }}
        >
          <img src="/faqimages/squiggle.png" alt="Planet border" className="w-full h-auto object-cover" />
        </div>

        {/* Title - positioned relative to frame */}
        <div
          className={`absolute ${zenDots.className} text-white text-[25px] leading-[100%] font-normal text-center flex items-center justify-center opacity-100 z-[15]`}
          style={{
            width: '382px',
            height: '74px',
            top: '-10px',
            left: '377px',
          }}
        >
          Frequently<br />Asked Questions
        </div>

        {/* Dropdown Table - positioned relative to frame */}
        <div 
          className="absolute opacity-100 overflow-hidden z-[15]"
          style={{
            width: '511px',
            height: '258px',
            top: '210px',
            left: '307px',
            borderRadius: 0,
          }}
        >
          {faqs.map((faq, index) => {
            const rowTop = getRowTop(index);
            const isExpanded = openFAQ === index;
            const rowHeight = isExpanded ? EXPANDED_ROW_HEIGHT : BASE_ROW_HEIGHT;
            const visible = isRowVisible(index);

            return (
              <motion.div
                key={index}
                className="absolute w-full bg-gradient-to-t from-[#1B104C] to-[#2D6897] overflow-hidden"
                style={{
                  top: `${rowTop}px`,
                  height: `${rowHeight}px`,
                  opacity: visible ? 1 : 0,
                  pointerEvents: visible ? 'auto' : 'none',
                  borderRadius: 0,
                }}
                initial={false}
                animate={{
                  top: `${rowTop}px`,
                  height: `${rowHeight}px`,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full h-full text-left px-4 py-2 hover:opacity-90 transition-opacity flex items-center justify-between"
                  style={{ height: `${BASE_ROW_HEIGHT}px`, borderRadius: 0 }}
                >
                  <h3 className={`${zenDots.className} text-sm font-bold pr-4 text-white flex-1 truncate`}>
                    {faq.question}
                  </h3>
                  <span 
                    className={`text-white transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
                    style={{ width: '12px', height: '12px' }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L1 4H11L6 9Z" fill="currentColor"/>
                    </svg>
                  </span>
                </button>
                
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: `${EXPANDED_ROW_HEIGHT - BASE_ROW_HEIGHT}px`, opacity: 1 }} // 2 rows
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 py-2 overflow-hidden"
                    style={{ 
                      height: `${EXPANDED_ROW_HEIGHT - BASE_ROW_HEIGHT}px`, // 2 rows
                      backgroundColor: '#FFFFFFDB',
                      borderRadius: 0,
                    }}
                  >
                    <p className={`${zenDots.className} text-[#1B104C] text-xs leading-relaxed`}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

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
