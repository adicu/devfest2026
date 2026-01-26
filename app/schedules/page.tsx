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
      date: 'FRIDAY, FEBRUARY 6TH',
      events: [
        {
          time: '7:00 PM - 8:00 PM',
          room: 'ROOM: Lerner 312',
          title: 'Meeting',
          speaker: {
            name: '',
            bio: 'https://meet.google.com/hop-djjk-sqv'
          }
        },
        {
          time: '8:00 PM - 10:00 PM',
          room: 'ROOM: CEPSR 302',
          title: 'Meeting',
          speaker: {
            name: '',
            bio: 'https://meet.google.com/hop-djjk-sqv'
          }
        }
      ]
    },
    {
      date: 'SATURDAY, FEBRUARY 7TH',
      events: [
        {
          time: '09:00 AM - 09:45 AM',
          room: 'ROOM: Uris Library',
          title: 'Check-in',
          speaker: {
            name: '',
            bio: 'Meet fellow participants as you get ready for a full day of hacking and innovation.'
          }
        },
        {
          time: '10:00 AM - 10:10 AM',
          room: 'ROOM: Uris Library',
          title: 'Welcome',
          speaker: {
            name: '',
            bio: 'Kick off the event with a brief introduction and other presentations'
          }
        },
        {
          time: '10:05 AM - 11:00 AM',
          room: 'ROOM: Uris Library',
          title: 'Opening Ceremony',
          speaker: {
            name: 'LYDIA CHILTON, ASSISTANT PROFESSOR @ COLUMBIA UNIVERSITY',
            bio: 'Generative AI has fundamentally changed the way programmers work. It has also changed how the entire design, development, and business lifecycles work. We will introduce two new paradigms for how app design and programming will be in a future powered by generative AI and AI agents.'
          }
        },
        {
          time: '11:00 AM',
          room: 'ROOM: Uris Library',
          title: 'Hacking begins!',
          speaker: {
            name: '',
            bio: 'Time to start building! Form your teams, brainstorm your ideas, and dive into coding your next big project.'
          }
        },
        {
          time: '11:00 AM - 11:30 AM',
          room: 'ROOM: Uris Library',
          title: 'Team Formation',
          speaker: {
            name: '',
            bio: 'Still searching for teammates or the perfect project idea? Use this time to connect with others, pitch concepts, and build your dream team.'
          }
        },
        {
          time: '12:00 PM - 1:00 PM',
          room: 'ROOM: Carleton Commons (Mudd)',
          title: 'Lunch',
          speaker: {
            name: '',
            bio: 'Refuel and recharge. Grab a bite to eat while sharing progress and fresh ideas with your fellow hackers.'
          }
        },
        {
          time: '1:00 PM - 2:00 PM',
          room: 'ROOM: Mudd 524 (45)',
          title: 'Simple Scalable Serverless Services in Python, with Modal',
          speaker: {
            name: '',
            bio: 'Building an application on the cloud doesn\'t have to suck. Even if it uses GPUs. In this talk, I\'ll present Modal, the serverless Python infrastructure you didn\'t know you always wanted.'
          }
        },
        {
          time: '2:00 PM - 3:00 PM',
          room: 'ROOM: Mudd 545 (75)',
          title: 'MLH Github Event',
          speaker: {
            name: 'EVENT LED BY MLH',
            bio: 'Ready to level up your version control skills? Learn collaborative tricks, best practices, and GitHub hacks!'
          }
        },
        {
          time: '3:00 PM - 4:00 PM',
          room: 'ROOM: Mudd 524 (45)',
          title: 'How to become a Command Line Connoisseur',
          speaker: {
            name: 'WORKSHOP',
            bio: 'In this workshop, we\'ll dive deep into terminal tips and tricks to increase your developer productivity, with awesome CLI tools. From beginners to terminal veterans, we\'ll have something for everyone. We\'ll also cover how the terminal interacts with the shell/PTY and some cool terminal history! This workshop is brought to you by the terminal experts at Warp, a blazingly-fast terminal app for the 21st century (warp.dev). Bring your laptops!'
          }
        },
        {
          time: '4:00 PM - 5:00 PM',
          room: 'ROOM: Mudd 545 (75)',
          title: 'AI Panel',
          speaker: {
            name: '',
            bio: 'Artificial intelligence has taken over the tech industry, and is increasingly relevant -- join us as we sit down with experts working with AI in a number of unique ways as they share their insights on trends, a deep dive into the industry, the future, opportunities, and anything else you might be curious about!'
          }
        },
        {
          time: '5:00 PM - 6:00 PM',
          room: 'ROOM: Mudd 524 (45)',
          title: 'Starting a Startup: From Idea to Exit',
          speaker: {
            name: 'ELIAM MEDINA, COFOUNDER (WILLING, TELORA)',
            bio: 'Thinking about starting a startup? Already started it? Then, you should come to this talk. You\'ll learn why you need cofounders, what makes a good startup idea, and how to get your first customers.'
          }
        },
        {
          time: '6:00 PM - 7:00 PM',
          room: 'ROOM: Mudd 545 (75)',
          title: 'Careers Across Tech Panel',
          speaker: {
            name: '',
            bio: 'Join us as experts in industries across technology share their insights! Featuring panelists working in cybersecurity, software engineering, finance/trading, product management, entrepreneurship, pre-sales, and more, this will be a fantastic exploration into some of the numerous industries that technology spans.'
          }
        },
        {
          time: '7:00 PM - 8:00 PM',
          room: 'ROOM: Carleton Commons (Mudd)',
          title: 'Dinner + MLH Typeracer Mini-Event',
          speaker: {
            name: '',
            bio: 'Refuel with a tasty meal, then test your typing speed in an adrenaline-pumping Typeracer challenge hosted by MLH. Great food, friendly competition—what more could you want?'
          }
        },
        {
          time: '11:59 PM',
          room: '',
          title: 'Project Submission Check-In Form Due',
          speaker: {
            name: '',
            bio: 'Submit your form by midnight'
          }
        }
      ]
    },
    {
      date: 'SUNDAY, FEBRUARY 8TH',
      events: [
        {
          time: '9:00 AM - 10:00 AM',
          room: 'ROOM: Carleton Commons (Mudd)',
          title: 'Breakfast',
          speaker: {
            name: '',
            bio: 'Fuel up and get ready for the final stretch of the hackathon!'
          }
        },
        {
          time: '11:00 AM',
          room: '',
          title: 'Hacking ends!',
          speaker: {
            name: '',
            bio: 'Time\'s up—congratulations on reaching the finish line!'
          }
        },
        {
          time: '11:00 AM - 12:00 PM',
          room: 'ROOM: Carleton Commons (Mudd)',
          title: 'Lunch',
          speaker: {
            name: '',
            bio: 'Refuel after a busy morning! Use this time to connect with fellow hackers'
          }
        },
        {
          time: '12:00 PM - 3:00 PM',
          room: 'ROOM: Uris Library',
          title: 'Judging',
          speaker: {
            name: '',
            bio: 'Our judges will review your projects, and participants will present'
          }
        },
        {
          time: '3:00 PM - 4:00 PM',
          room: 'ROOM: Mudd 545 (75)',
          title: 'Professional Development',
          speaker: {
            name: '',
            bio: 'Expand your career horizons with insights from industry pros and content creators. Learn how to grow your skill set, stand out on social media, and thrive in tech. Bring your questions and be ready for fresh perspectives!'
          }
        },
        {
          time: '4:00 PM - 5:00 PM',
          room: 'ROOM: Uris Library',
          title: 'Closing Ceremony',
          speaker: {
            name: '',
            bio: 'Celebrate the end of a successful hackathon! Winners will be announced, prizes awarded, and parting words shared—wrap up your hackathon experience on a high note.'
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
                Scroll through the timeline to see all the events and activities happening during the hackathon.</p>
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
                  {(day.date.includes('FRIDAY') || day.date.includes('SATURDAY') || day.date.includes('SUNDAY')) ? (
                    /* Friday, Saturday, Sunday: All events in one purple box */
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
                        <div className="space-y-6">
                          {day.events.map((event, eventIndex) => (
                            <div key={eventIndex} className="space-y-2">
                              {/* Time and Room Header */}
                              <div className="flex justify-between items-start gap-4">
                                <p className={`${zenDots.className} text-white text-lg whitespace-nowrap`} style={{ width: '240px', flexShrink: 0 }}>
                                  {event.time}
                                </p>
                                {event.room && (
                                  <p className={`${zenDots.className} text-white text-lg`}>
                                    {event.room}
                                  </p>
                                )}
                              </div>
                              
                              {/* Event Title */}
                              <h3 className={`${zenDots.className} text-white text-xl`}>
                                {event.title}
                              </h3>
                              
                              {/* Speaker Name (if available) */}
                              {event.speaker.name && (
                                <p className={`${zenDots.className} text-white text-base opacity-90`}>
                                  {event.speaker.name}
                                </p>
                              )}
                              
                              {/* Description/Bio */}
                              {event.speaker.bio && (
                                <p className={`${zenDots.className} text-white text-sm opacity-80`} style={{ lineHeight: '1.5' }}>
                                  {event.speaker.bio.startsWith('http') ? (
                                    <a 
                                      href={event.speaker.bio} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-blue-300 hover:text-blue-200 underline"
                                    >
                                      click me to join
                                    </a>
                                  ) : (
                                    event.speaker.bio
                                  )}
                                </p>
                              )}
                              
                              {/* Separator line between events (except last) */}
                              {eventIndex < day.events.length - 1 && (
                                <div 
                                  className="mt-4"
                                  style={{
                                    width: '100%',
                                    height: '1px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.3)'
                                  }}
                                />
                              )}
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
