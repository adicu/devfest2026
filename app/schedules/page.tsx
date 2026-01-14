'use client';

import { useState, useRef } from 'react';
import { Zen_Dots } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import Sidebar from "@/components/sidebar";

// Load fonts
const zenDots = Zen_Dots({
  weight: '400',
  subsets: ['latin'],
});

export default function Schedules() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollableContainerRef = useRef<HTMLDivElement>(null);

  const scheduleData = [
    {
      date: 'MONDAY, FEBRUARY 2ND',
      events: [
        {
          time: '09:00 AM - 10:00 AM',
          room: 'ROOM: URIS 567',
          title: 'Engineering Innovation in Maternal and Fetal Health: The Biomechanics of High-Risk Pregnancies',
          speaker: {
            name: 'JEFF BEZOS, CEO & FOUNDER OF AMAZON',
            bio: 'JEFF IS A LEADER IN THE GLOBAL MARKET AND ESTABLISHED AMAZON, AN INNOVATIVE AND TRANSFORMATIVE PLATFORM FOR E-COMMERCE.'
          }
        }
      ]
    },
    {
      date: 'TUESDAY, FEBRUARY 3RD',
      events: [
        {
          time: '09:00 AM - 10:00 AM',
          room: 'ROOM: URIS 567',
          title: 'Engineering Innovation in Maternal and Fetal Health: The Biomechanics of High-Risk Pregnancies',
          speaker: {
            name: 'JEFF BEZOS, CEO & FOUNDER OF AMAZON',
            bio: 'JEFF IS A LEADER IN THE GLOBAL MARKET AND ESTABLISHED AMAZON, AN INNOVATIVE AND TRANSFORMATIVE PLATFORM FOR E-COMMERCE.'
          }
        }
      ]
    },
    {
      date: 'WEDNESDAY, FEBRUARY 4TH',
      events: [
        {
          time: '09:00 AM - 10:00 AM',
          room: 'ROOM: URIS 567',
          title: 'Engineering Innovation in Maternal and Fetal Health: The Biomechanics of High-Risk Pregnancies',
          speaker: {
            name: 'JEFF BEZOS, CEO & FOUNDER OF AMAZON',
            bio: 'JEFF IS A LEADER IN THE GLOBAL MARKET AND ESTABLISHED AMAZON, AN INNOVATIVE AND TRANSFORMATIVE PLATFORM FOR E-COMMERCE.'
          }
        }
      ]
    },
    {
      date: 'THURSDAY, FEBRUARY 5TH',
      events: [
        {
          time: '09:00 AM - 10:00 AM',
          room: 'ROOM: URIS 567',
          title: 'Engineering Innovation in Maternal and Fetal Health: The Biomechanics of High-Risk Pregnancies',
          speaker: {
            name: 'JEFF BEZOS, CEO & FOUNDER OF AMAZON',
            bio: 'JEFF IS A LEADER IN THE GLOBAL MARKET AND ESTABLISHED AMAZON, AN INNOVATIVE AND TRANSFORMATIVE PLATFORM FOR E-COMMERCE.'
          }
        }
      ]
    },
    {
      date: 'FRIDAY, FEBRUARY 6TH',
      events: [
        {
          time: '09:00 AM - 10:00 AM',
          room: 'ROOM: URIS 567',
          title: 'Engineering Innovation in Maternal and Fetal Health: The Biomechanics of High-Risk Pregnancies',
          speaker: {
            name: 'JEFF BEZOS, CEO & FOUNDER OF AMAZON',
            bio: 'JEFF IS A LEADER IN THE GLOBAL MARKET AND ESTABLISHED AMAZON, AN INNOVATIVE AND TRANSFORMATIVE PLATFORM FOR E-COMMERCE.'
          }
        }
      ]
    },
    {
      date: 'SATURDAY, FEBRUARY 7TH',
      events: [
        {
          time: '09:00 AM - 10:00 AM',
          room: '',
          title: 'Check-in',
          speaker: {
            name: '',
            bio: ''
          }
        },
        {
          time: '10:05 AM - 10:10 AM',
          room: '',
          title: 'Welcome',
          speaker: {
            name: '',
            bio: ''
          }
        },
        {
          time: '10:10 AM - 10:35 AM',
          room: '',
          title: 'Opening Ceremony + MLH Speech + Groq promo',
          speaker: {
            name: '',
            bio: ''
          }
        },
        {
          time: '10:55 AM - 11:00 AM',
          room: '',
          title: 'Final Announcements',
          speaker: {
            name: '',
            bio: ''
          }
        },
        {
          time: '11:00 AM',
          room: '',
          title: 'Hacking begins!',
          speaker: {
            name: '',
            bio: ''
          }
        },
        {
          time: '11:00 AM - 11:30 AM',
          room: '',
          title: 'Team Formation',
          speaker: {
            name: '',
            bio: ''
          }
        },
        {
          time: '12:00 PM - 1:00 PM',
          room: '',
          title: 'Lunch',
          speaker: {
            name: '',
            bio: ''
          }
        },
        {
          time: '1:00 PM - 2:00 PM',
          room: '',
          title: 'Modal Sponsor Workshop: Simple Scalable Serverless Services in Python, with Modal',
          speaker: {
            name: '',
            bio: ''
          }
        },
        {
          time: '2:00 PM - 3:00 PM',
          room: '',
          title: 'MLH Github Event',
          speaker: {
            name: '',
            bio: ''
          }
        },
        {
          time: '3:00 PM - 4:00 PM',
          room: '',
          title: 'Warp Sponsor Workshop',
          speaker: {
            name: '',
            bio: ''
          }
        },
        {
          time: '4:00 PM - 5:00 PM',
          room: '',
          title: 'AI Panel',
          speaker: {
            name: '',
            bio: ''
          }
        },
        {
          time: '5:00 PM - 6:00 PM',
          room: '',
          title: 'Starting a Startup: From Idea to Exit',
          speaker: {
            name: '',
            bio: ''
          }
        },
        {
          time: '6:00 PM - 7:00 PM',
          room: '',
          title: 'Careers Across Tech Panel',
          speaker: {
            name: '',
            bio: ''
          }
        },
        {
          time: '7:00 PM - 8:00 PM',
          room: '',
          title: 'Dinner + MLH Typeracer Mini-Event',
          speaker: {
            name: '',
            bio: ''
          }
        },
        {
          time: '12:00 AM',
          room: '',
          title: 'Fun activity 2: Speed dating, Fun activity 3: Cornhole (if we have the cornhole set)',
          speaker: {
            name: '',
            bio: ''
          }
        },
        {
          time: '12:00 AM',
          room: '',
          title: 'Project Submission Check-In Form Due',
          speaker: {
            name: '',
            bio: ''
          }
        }
      ]
    },
    {
      date: 'SUNDAY, FEBRUARY 8TH',
      events: [
        {
          time: '9:00 AM',
          room: '',
          title: 'Breakfast',
          speaker: {
            name: '',
            bio: ''
          }
        },
        {
          time: '11:00 AM',
          room: '',
          title: 'Hacking ends!',
          speaker: {
            name: '',
            bio: ''
          }
        },
        {
          time: '11:00 AM - 12:00 PM',
          room: '',
          title: 'Lunch',
          speaker: {
            name: '',
            bio: ''
          }
        },
        {
          time: '12:00 PM - 3:00 PM',
          room: '',
          title: 'Judging',
          speaker: {
            name: '',
            bio: ''
          }
        },
        {
          time: '3:00 - 4:00 PM',
          room: '',
          title: 'Professional Development Panel',
          speaker: {
            name: '',
            bio: ''
          }
        },
        {
          time: '4:00 - 5:00 PM',
          room: '',
          title: 'Closing Ceremony',
          speaker: {
            name: '',
            bio: ''
          }
        }
      ]
    }
  ];

  const handleJumpToSaturday = () => {
    const container = scrollableContainerRef.current;
    if (!container) return;
    
    // Try to find Saturday element
    const saturdayElement = document.getElementById('saturday-section');
    
    if (saturdayElement) {
      // Use a more reliable method: find the element's position within the scrollable container
      const contentWrapper = container.querySelector('.space-y-8') as HTMLElement;
      
      if (contentWrapper) {
        // Use getBoundingClientRect for accurate position calculation
        const containerRect = container.getBoundingClientRect();
        const elementRect = saturdayElement.getBoundingClientRect();
        
        // Calculate scroll position: current scroll + (element top - container top)
        const scrollPosition = container.scrollTop + (elementRect.top - containerRect.top) - 20;
        
        // Scroll with smooth animation
        container.scrollTo({
          top: Math.max(0, scrollPosition), // Ensure non-negative
          behavior: 'smooth'
        });
      } else {
        // Fallback: use scrollIntoView
        saturdayElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    } else {
      // If Saturday doesn't exist, scroll to the last day or bottom
      container.scrollTo({
        top: container.scrollHeight - container.clientHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white bg-black" style={{ cursor: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'17\' viewBox=\'0 0 73 51\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M-6.14341e-05 7.29999e-06L56.6044 3.95817L24.8743 51L-6.14341e-05 7.29999e-06Z\' fill=\'white\'/%3E%3Crect x=\'35.83\' y=\'17.8153\' width=\'40.3205\' height=\'15.1202\' transform=\'rotate(24 35.83 17.8153)\' fill=\'white\'/%3E%3C/svg%3E") 0 0, auto' }}>
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background-purple.png"
          alt="Purple Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Navigation Bar */}
      <nav className="relative z-20 w-full" style={{
        background: 'transparent',
        height: '95px',
        paddingTop: '50px'
      }}>
        <div className="flex items-center justify-between px-20 h-full">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity" style={{ marginLeft: '100px' }}>
            <div className="w-20 h-20 rounded-lg overflow-hidden">
              <Image
                src="/logo.svg"
                alt="DevFest Logo"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </div>
            <h1 className={`${zenDots.className} text-white text-4xl`}>Devfest 2026</h1>
          </Link>

          {/* Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex items-center gap-2 text-white ${zenDots.className} text-3xl hover:opacity-80 transition-opacity`}
          >
            <div className="flex flex-col gap-1.5">
              <div className="w-10 h-1 bg-white"></div>
              <div className="w-10 h-1 bg-white"></div>
              <div className="w-10 h-1 bg-white"></div>
            </div>
            <span>MENU</span>
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
            <Link
              href="/schedules"
              onClick={() => setIsMenuOpen(false)}
              className={`text-white ${zenDots.className} text-2xl hover:text-purple-300 transition-colors`}
            >
              Schedule
            </Link>
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

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center lg:px-20 px-4" style={{ height: '100vh', minHeight: '100vh' }}>
        {/* Timeline Container with Light Blue Background */}
        <div 
          className="rounded-lg relative flex flex-col timeline-container-responsive"
          style={{
            backgroundImage: 'url(/schedule-background-681eb6.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '1.3%',
            borderRadius: '25px',
            top: '8%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '95%',
            height: '75%',
            position: 'absolute'
          }}
        >
          {/* Scrollable Timeline Container */}
          <div 
            ref={scrollableContainerRef}
            className="w-full rounded-lg overflow-hidden relative flex-1"
            style={{
              overflowY: 'auto',
              scrollbarWidth: 'thin',
              scrollbarColor: '#013660 #85C8FF',
              minHeight: 0
            }}
          >
          <div className="space-y-8" style={{ padding: '2%' }}>
            {/* Timeline Banner - Purple Gradient */}
            <div 
              className="w-full mb-8 p-[1px] rounded-lg relative"
              style={{
                background: 'linear-gradient(120deg, rgba(251, 0, 255, 1) 0%, rgba(0, 158, 255, 1) 91%)',
                borderRadius: '22px'
              }}
            >
              <div
                className="w-full h-full p-8 rounded-lg"
                style={{
                  background: 'linear-gradient(180deg, rgba(172, 127, 254, 1) 0%, rgba(113, 56, 221, 1) 60%, rgba(58, 34, 131, 1) 100%)',
                  borderRadius: '21px',
                  boxShadow: '0px 0px 11px 1px rgba(255, 255, 255, 0.5)'
                }}
              >
              {/* Full Week Label - Dark Oval with white border - positioned at center */}
              <div 
                className="mb-4"
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <div 
                  className="inline-block px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: '#000000',
                    borderRadius: '17.5px',
                    border: '1px solid #85C8FF'
                  }}
                >
                  <p className={`${zenDots.className} text-white text-xs text-center`}>Full Week • All Times Local</p>
                </div>
              </div>
              
              {/* TIMELINE Title - Centered */}
              <h1 
                className={`${zenDots.className} text-6xl mb-4 text-center`}
                style={{
                  color: '#95E7FC',
                  WebkitTextStroke: '1px #7138DD'
                }}
              >
                TIMELINE
              </h1>
              
              {/* Description Text - Centered */}
              <p className={`${zenDots.className} text-white text-sm text-center`}>
                Scroll through the week-long journey. Each day highlights sessions, rooms, and speakers working at the edge of innovation.
              </p>
              </div>
            </div>
            {/* Vertical Timeline Line */}
            <div className="relative">
              <div 
                className="absolute left-1/2 top-0 bottom-0 w-1"
                style={{
                  transform: 'translateX(-50%)',
                  backgroundColor: '#85C8FF',
                  zIndex: 0
                }}
              />

              {scheduleData.map((day, dayIndex) => (
                <div key={dayIndex} className="relative" id={day.date.includes('SATURDAY') ? 'saturday-section' : undefined}>
                  {/* Day Banner */}
                  <div 
                    className="mb-6 py-[1px] px-[1px] rounded-lg relative z-10"
                    style={{
                      background: 'linear-gradient(120deg, rgba(251, 0, 255, 1) 0%, rgba(0, 158, 255, 1) 91%)',
                      borderRadius: '22px'
                    }}
                  >
                    <div
                      className="py-4 px-6 rounded-lg"
                      style={{
                        background: 'linear-gradient(90deg, rgba(172, 127, 254, 1) 0%, rgba(66, 34, 131, 1) 100%)',
                        borderRadius: '21px'
                    }}
                  >
                      <h2 className={`${zenDots.className} text-white text-xl`}>
                      {day.date}
                    </h2>
                    </div>
                  </div>

                  {/* Event Cards */}
                  {(day.date.includes('SATURDAY') || day.date.includes('SUNDAY')) ? (
                    /* Saturday: All events in one purple box */
                    <div 
                      className="rounded-lg p-[1px] mb-8 relative z-10"
                      style={{
                        background: 'linear-gradient(120deg, rgba(251, 0, 255, 1) 0%, rgba(0, 158, 255, 1) 91%)',
                        borderRadius: '22px'
                      }}
                    >
                      <div
                        className="rounded-lg p-6 h-full"
                        style={{
                          background: 'linear-gradient(139deg, rgba(66, 34, 131, 1) 29%, rgba(15, 8, 29, 1) 100%)',
                          borderRadius: '21px',
                          boxShadow: '0px 0px 15px 1px rgba(255, 255, 255, 0.5)'
                        }}
                      >
                        <div className="space-y-3">
                          {day.events.map((event, eventIndex) => (
                            <div key={eventIndex} className="flex" style={{ gap: '40px' }}>
                              <p className={`${zenDots.className} text-white text-lg whitespace-nowrap`} style={{ width: '240px', flexShrink: 0 }}>
                                {event.time}
                              </p>
                              <p className={`${zenDots.className} text-white text-lg flex-1`}>
                                {event.title}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Other days: Individual event cards */
                    day.events.map((event, eventIndex) => (
                      <div 
                        key={eventIndex}
                        className="rounded-lg p-[1px] mb-8 relative z-10"
                        style={{
                          background: 'linear-gradient(120deg, rgba(251, 0, 255, 1) 0%, rgba(0, 158, 255, 1) 91%)',
                          borderRadius: '22px'
                        }}
                      >
                        <div
                          className="rounded-lg p-6 h-full"
                          style={{
                            background: 'linear-gradient(139deg, rgba(66, 34, 131, 1) 29%, rgba(15, 8, 29, 1) 100%)',
                            borderRadius: '21px',
                            boxShadow: '0px 0px 15px 1px rgba(255, 255, 255, 0.5)'
                          }}
                        >
                          {/* Event Header */}
                          <div className="flex justify-between items-start mb-4">
                            <p className={`${zenDots.className} text-white text-lg`}>
                              {event.time}
                            </p>
                            <p className={`${zenDots.className} text-white text-lg`}>
                              {event.room}
                            </p>
                          </div>

                          {/* Event Title */}
                          <h3 className={`${zenDots.className} text-white text-2xl mb-6`} style={{ lineHeight: '1.2em' }}>
                            {event.title}
                          </h3>

                          {/* Separator Line */}
                          <div 
                            className="mb-4"
                            style={{
                              width: '100%',
                              height: '2px',
                              backgroundColor: '#FFFFFF'
                            }}
                          />

                          {/* Speakers Section */}
                          <div className="mt-6">
                            <p className={`${zenDots.className} text-white text-xl mb-4`}>
                              SPEAKERS
                            </p>
                            <div className="flex items-start gap-4">
                              {/* Speaker Photo Frame */}
                              <div 
                                className="flex-shrink-0 relative"
                                style={{
                                  width: '11%',
                                  height: '20%',
                                  minWidth: '120px',
                                  minHeight: '180px'
                                }}
                              >
                                <Image
                                  src="/speaker-frame.png"
                                  alt="Speaker Frame"
                                  fill
                                  className="object-contain"
                                  sizes="166.45px"
                                />
                              </div>
                              <div className="flex-1">
                                <p className={`${zenDots.className} text-white text-lg mb-2`}>
                                  {event.speaker.name}
                                </p>
                                <p className={`${zenDots.className} text-white text-base`}>
                                  {event.speaker.bio}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Jump to Saturday Button - Positioned at bottom of frame */}
          <button
            onClick={handleJumpToSaturday}
            className="absolute p-[1px] rounded-lg flex items-center gap-2 transition-all hover:scale-105 z-30"
            style={{
              background: 'linear-gradient(120deg, rgba(251, 0, 255, 1) 0%, rgba(0, 158, 255, 1) 91%)',
              borderRadius: '22px',
              bottom: '3%',
              right: '5%'
            }}
          >
            <div
              className="rounded-lg flex items-center gap-2"
              style={{
                background: 'linear-gradient(180deg, rgba(172, 127, 254, 1) 0%, rgba(66, 34, 131, 1) 100%)',
                borderRadius: '21px',
                boxShadow: '0px 0px 11px 1px rgba(255, 255, 255, 0.5)',
                padding: '3% 5%'
            }}
          >
            <span className={`${zenDots.className} text-white text-lg whitespace-nowrap`}>JUMP TO SATURDAY</span>
            <ChevronDown size={24} className="text-white" />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
