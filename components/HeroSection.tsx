import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, ChevronDown, Award, BarChart2, Users, Shield, Star, Badge, Crown, Trophy, Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    setIsVisible(true);
    
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };



  return (
    <section
      id="home"
      ref={heroRef}
      className="relative pt-20 pb-8 md:pt-16 md:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex items-center"
    >
      <div className="relative max-w-7xl mx-auto w-full">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          
          {/* Centered Content */}
          <div className="space-y-10">
            {/* Premium badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-block px-5 py-2 mb-6 mt-8 sm:mt-0 rounded-full border border-purple-200 dark:border-purple-600/50 bg-white/40 dark:bg-gray-800/60 backdrop-blur-md text-sm font-medium text-[#542267] dark:text-purple-200 shadow-sm">
                <span className="inline-block mr-2 w-2 h-2 rounded-full bg-[#542267] dark:bg-purple-400 animate-pulse"></span> 
                Leading LinkedIn Branding Agency
              </div>
              
              {/* Headline with refined typography */}
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
                <span className="block mb-4">
                  <span className="text-[#6a2d7f] drop-shadow-md relative">
                    <span className="relative">
                      Brands
                      <div className="absolute inset-0">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <path 
                            d="M -5 50 L 105 50" 
                            stroke="#E9D5FF" 
                            strokeWidth="8" 
                            fill="none" 
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </span>
                  </span>
                </span>
                <span className="block mt-4">We build <span className="relative inline-block">
                  <span className="text-[#6a2d7f] drop-shadow-md">Legacies</span>
                </span></span>
              </h1>
            </motion.div>
            
            {/* Refined value proposition */}
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              We help Founders, Executives, Professionals and Companies build LinkedIn presences that Lead, Influence and Last.
            </motion.p>
            
            {/* Enhanced Stats with animated counters */}
            <motion.div 
              className="grid grid-cols-3 gap-6 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              <StatBox value="50M+" label="Organic Views" icon={<BarChart2 />} />
              <StatBox value="25+" label="Clients Served" icon={<Users />} />
              <StatBox value="7+" label="Countries" icon={<Award />} />
            </motion.div>
            
            {/* CTA Section */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              variants={itemVariants}
            >
              <Button
                size="lg"
                className="group bg-[#542267] hover:bg-[#432052] text-white px-10 py-7 text-lg rounded-xl shadow-[0_8px_30px_rgba(84,34,103,0.3)] hover:shadow-[0_8px_40px_rgba(84,34,103,0.5)] transition-all duration-300 border border-purple-300/10"
                onClick={() => {
                  const contactSection = document.getElementById('contact-section')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                <span>Let's Build Your Brand</span>
                <ArrowRight className="ml-2 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <div className="px-6 py-3 rounded-xl border border-purple-200/50 dark:border-purple-800/50 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md text-base font-medium text-gray-700 dark:text-gray-300 flex items-center shadow-sm">
                <div className="mr-3 h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
                <span>Our Guarantee: 100% increase in profile impressions in 30 days</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatBox({ value, label, icon }: { value: string; label: string; icon?: React.ReactNode }) {
  return (
    <motion.div 
      className="flex flex-col items-center p-6 rounded-xl bg-white/80 dark:bg-purple-900/40 backdrop-blur-md border border-purple-100/50 dark:border-purple-500/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      {icon && <div className="text-[#542267] dark:text-purple-200 mb-3">{icon}</div>}
      <div className="text-2xl font-bold text-[#542267] dark:text-purple-200 mb-2">{value}</div>
      <div className="text-sm text-gray-600 dark:text-purple-100 text-center">{label}</div>
    </motion.div>
  );
}

