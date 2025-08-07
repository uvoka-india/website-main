import { Button } from "@/components/ui/button"
import { Linkedin, Mail, ArrowRight, ExternalLink, Shield, FileCheck } from "lucide-react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { useRef, useEffect } from "react"

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

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

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <footer className="relative overflow-hidden">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a1134] via-[#542267] to-[#2a1134] z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Logo and tagline */}
          <motion.div 
            className="sm:col-span-2 lg:col-span-4 space-y-4 sm:space-y-6"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden">
                <Image 
                  src="/uvoka white.png" 
                  alt="UVOKA Logo" 
                  width={48} 
                  height={48}
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-purple-100">UVOKA</h2>
            </motion.div>
            <p className="text-sm sm:text-base text-purple-100 leading-relaxed">
              Building LinkedIn legacies that lead, influence, and last. We transform professionals into thought leaders.
            </p>
            <motion.div 
              className="flex space-x-4 pt-2 sm:pt-4"
              variants={itemVariants}
            >
              <motion.a 
                href="https://www.linkedin.com/company/uvoka/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-purple-100 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
              <motion.a 
                href="mailto:srihita@uvoka.co.in" 
                className="text-purple-200 hover:text-purple-100 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Quick links */}
          <motion.div 
            className="sm:col-span-1 lg:col-span-2"
            variants={itemVariants}
          >
            <h4 className="text-base sm:text-lg font-semibold text-purple-100 mb-4 sm:mb-6 pb-2 border-b border-purple-500/30">Navigation</h4>
            <ul className="space-y-2 sm:space-y-3">
              <motion.li variants={linkVariants}>
                <a href="#home" className="text-sm sm:text-base text-purple-200 hover:text-purple-100 transition-colors">
                  Home
                </a>
              </motion.li>
              <motion.li variants={linkVariants}>
                <a href="#services" className="text-sm sm:text-base text-purple-200 hover:text-purple-100 transition-colors">
                  Services
                </a>
              </motion.li>
              <motion.li variants={linkVariants}>
                <a href="#about" className="text-sm sm:text-base text-purple-200 hover:text-purple-100 transition-colors">
                  About
                </a>
              </motion.li>
              <motion.li variants={linkVariants}>
                <a href="#contact" className="text-sm sm:text-base text-purple-200 hover:text-purple-100 transition-colors">
                  Contact
                </a>
              </motion.li>
            </ul>
          </motion.div>
          
          {/* Services */}
          <motion.div 
            className="sm:col-span-1 lg:col-span-3"
            variants={itemVariants}
          >
            <h4 className="text-base sm:text-lg font-semibold text-purple-100 mb-4 sm:mb-6 pb-2 border-b border-purple-500/30">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <motion.li 
                className="text-sm sm:text-base text-purple-200 hover:text-purple-100 transition-colors"
                variants={linkVariants}
              >
                Personal Branding
              </motion.li>
              <motion.li 
                className="text-sm sm:text-base text-purple-200 hover:text-purple-100 transition-colors"
                variants={linkVariants}
              >
                Company Branding
              </motion.li>
              <motion.li 
                className="text-sm sm:text-base text-purple-200 hover:text-purple-100 transition-colors"
                variants={linkVariants}
              >
                Lead Generation
              </motion.li>
            </ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div 
            className="sm:col-span-2 lg:col-span-3"
            variants={itemVariants}
          >
            <h4 className="text-base sm:text-lg font-semibold text-purple-100 mb-4 sm:mb-6 pb-2 border-b border-purple-500/30">Contact Us</h4>
            <div className="space-y-3 sm:space-y-4">
              <motion.a 
                href="mailto:srihita@uvoka.co.in" 
                className="text-purple-200 hover:text-purple-100 transition-colors block"
                variants={linkVariants}
              >
                <p className="text-xs text-purple-300 mb-1">Email</p>
                <p className="text-sm sm:text-base flex items-center">
                  srihita@uvoka.co.in
                  <ExternalLink className="h-3 w-3 ml-2 opacity-50" />
                </p>
              </motion.a>
              <motion.a 
                href="tel:7702141838" 
                className="text-purple-200 hover:text-purple-100 transition-colors block"
                variants={linkVariants}
              >
                <p className="text-xs text-purple-300 mb-1">Phone</p>
                <p className="text-sm sm:text-base">7702141838</p>
              </motion.a>
              <motion.div variants={linkVariants}>
                <p className="text-xs text-purple-300 mb-1">Location</p>
                <p className="text-sm sm:text-base text-purple-200">Hyderabad, India</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Bottom bar */}
        <motion.div 
          className="border-t border-purple-500/20 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <p className="text-xs sm:text-sm text-purple-200 text-center sm:text-left">&copy; UVOKA 2025. All rights reserved.</p>
          <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm text-purple-300">
            <motion.a 
              href="/privacy-policy" 
              className="hover:text-purple-100 transition-colors flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Shield className="h-3 w-3 mr-1.5" />
              Privacy Policy
            </motion.a>
            <motion.a 
              href="/terms-of-service" 
              className="hover:text-purple-100 transition-colors flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <FileCheck className="h-3 w-3 mr-1.5" />
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}