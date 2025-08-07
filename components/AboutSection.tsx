"use client"

import { Badge } from "@/components/ui/badge"
import { 
  Building, Award, Users, Briefcase, BarChart, BookOpen, 
  Sparkles, ArrowRight, Globe, Star, MessageCircle 
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  
  useEffect(() => {
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
      transition: { duration: 0.6 }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity
      }
    }
  };

  return (
    <section id="about-section" className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Removed section-specific background, now handled globally */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Left Column - Visual Element */}
          <motion.div variants={itemVariants} className="hidden lg:block">
            <div className="relative">
              {/* Abstract Shape Background */}
              <motion.div 
                className="absolute -top-8 -left-8 w-64 h-64 bg-[#6c2c80]/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
              ></motion.div>
              
              {/* Main Image with Gradient Border */}
              <motion.div 
                className="relative rounded-2xl overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute inset-0 bg-[#6c2c80]/80 mix-blend-overlay"></div>
                <Image
                  src="/about.png"
                  alt="UVOKA Team"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
              
              {/* Floating Achievement Cards */}
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg backdrop-blur-sm border border-purple-100 dark:border-purple-900/30 transform rotate-3"
                variants={floatingVariants}
                animate="animate"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 0,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center">
                  <div className="p-2 bg-[#6c2c80] rounded-full text-white mr-3">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Founded by</p>
                    <p className="font-bold text-gray-900 dark:text-white">ISB Alumnus</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg backdrop-blur-sm border border-purple-100 dark:border-purple-900/30 transform -rotate-6"
                variants={floatingVariants}
                animate="animate"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 0,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center">
                  <div className="p-2 bg-[#6c2c80] rounded-full text-white mr-3">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Trusted by</p>
                    <p className="font-bold text-gray-900 dark:text-white">C-level Executives</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="lg:col-start-2">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 mb-6 shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-[#6c2c80] dark:text-purple-300" />
              <span className="text-sm font-medium text-[#6c2c80] dark:text-purple-200">Our Story</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#6c2c80] dark:text-white">
              About UVOKA
            </h2>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-xl font-medium">
                UVOKA was born from the belief that credibility deserves visibility—and the right brand can open doors no résumé ever will.
              </p>
              
              <p>
                Founded by an alumnus of the Indian School of Business, UVOKA is a leading LinkedIn Personal branding agency helping executives, professionals and founders build unforgettable brands on LinkedIn. Our clientele ranges from C-level executives from Big4 companies to MBB Consultants to professionals like CAs and Lawyers, VCs and founders across industries like Fintech, risk management, real estate and B2B SaaS.
              </p>
              
              <p>
                Our team of LinkedIn experts, content creators, and digital strategists work together to transform your professional presence into a powerful business asset. We've generated over 50 million organic views for our clients and helped them secure speaking engagements, publications and career opportunities.
              </p>
              
              <p className="font-medium italic">
                "Let's craft a brand that speaks before you do."
              </p>
            </div>
            
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 rounded-full bg-[#6c2c80] text-white font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg group"
              >
                <span>Reach Out To Us</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}