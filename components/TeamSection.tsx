"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Linkedin, Sparkles, Crown, PenTool, Palette, Users, 
  ArrowRight, ExternalLink, GraduationCap, Briefcase 
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Disconnect after triggering once
          if (observerRef.current) {
            observerRef.current.disconnect();
          }
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    
    observerRef.current.observe(sectionRef.current);
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isVisible]);
  
  const teamMembers = [
    {
      name: "Srihita Vanguri",
      role: "Founder & CEO",
      tagline: "CEO of turning 'just vibes' into verified thought leaders.",
      education: "ISB",
      linkedin: "https://www.linkedin.com/in/srihitavanguri/",
      icon: Crown,
      image: "/sv.png"
    },
    {
      name: "Mihika Mathur",
      role: "Content Strategist",
      tagline: "I make your LinkedIn look sharp while mine has been in the soft-launch mode since 2020.",
      linkedin: "https://www.linkedin.com/in/mihikamathur99/",
      icon: PenTool,
      image: "/mm.png"
    },
    {
      name: "Rupali Kala",
      role: "Content Writer",
      tagline: "I help your brand say the right thing",
      linkedin: "https://www.linkedin.com/in/rupalikala/",
      icon: PenTool,
      image: "/rk.png"
    },
    {
      name: "Snigdha Mohapatra",
      role: "Graphic Designer",
      tagline: "I romanticize grids, cry over spacing, and call it a creative process. I give chaos a color palette and call it design.",
      linkedin: "https://www.linkedin.com/in/snigdhamohapatra7816/",
      icon: Palette,
      image: "/sm.png"
    },
    {
      name: "Manisha Mandal",
      role: "Community Manager",
      tagline: "I help you build a LinkedIn community that feels less like marketing and more like real conversations with real people",
      linkedin: "https://www.linkedin.com/in/manishamandalpersonalbrandingstrategist/",
      icon: Users,
      image: "/mm2.png"
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Removed section-specific background, now handled globally */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-sm border border-purple-100 dark:border-purple-900/30">
            <Sparkles className="h-4 w-4 text-[#6c2c80] dark:text-purple-400" />
            <span className="text-[#6c2c80] dark:text-purple-300">The Minds Behind UVOKA</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#6c2c80] dark:text-white">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            The brilliant minds transforming LinkedIn profiles into powerful personal brands.
          </p>
        </div>

        {/* Team Grid - Hexagonal Layout */}
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className={`group relative w-full md:w-1/2 lg:w-1/3 p-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative mx-auto max-w-[320px]">
                {/* Hexagonal Image Container */}
                <div className="relative mb-6 mx-auto">
                  {/* Image Clip Path Container */}
                  <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl transform transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Role Badge */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#6c2c80] text-white px-4 py-1 rounded-full shadow-lg text-xs font-medium whitespace-nowrap">
                    {member.role}
                  </div>
                </div>
                
                {/* Content Card */}
                <Card className={`relative transition-all duration-500 overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-0 shadow-lg h-[280px] ${
                  hoveredMember === index ? 'transform -translate-y-2 shadow-xl' : ''
                } pt-6`}>
                  {/* Top Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#6c2c80]"></div>
                  
                  <CardContent className="p-6 text-center flex flex-col h-full">
                    {/* Name and Education */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#6c2c80] dark:group-hover:text-purple-300 transition-colors duration-300">
                        {member.name}
                      </h3>
                      {member.education && (
                        <div className="flex items-center justify-center mt-1">
                          <GraduationCap className="h-3 w-3 text-[#6c2c80] dark:text-purple-400 mr-1" />
                          <span className="text-xs text-gray-500 dark:text-gray-400">{member.education}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Tagline */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic text-sm flex-grow">
                      "{member.tagline}"
                    </p>
                    
                    {/* LinkedIn Button */}
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 flex items-center justify-center rounded-full bg-[#6c2c80] text-white font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg group"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      <span>Connect</span>
                      <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}