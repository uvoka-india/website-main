"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Home, Briefcase, Users, Mail, ArrowRight } from "lucide-react"
import { useScroll } from "@/hooks/use-scroll"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const scrolled = useScroll()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Only use theme after component is mounted (client-side)
  const logoSrc = mounted && theme === "dark" ? "/uvoka lo.png" : "/uvoka no.png"

  const scrollToHome = () => {
    const homeSection = document.getElementById('home')
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  }

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-[#6c2c80]/90 backdrop-blur-lg border-b border-gray-200/20 dark:border-[#6c2c80]/40 shadow-lg' 
          : 'bg-white/10 dark:bg-black/10 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 z-10"
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <button 
              onClick={scrollToHome}
              className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src={logoSrc}
                alt="UVOKA"
                width={180}
                height={56}
                className="h-[56px] w-auto object-contain"
              />
            </button>
          </motion.div>

          {/* Center Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
            <motion.a 
              href="#home" 
              className="relative flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-[#6c2c80] dark:hover:text-[#6c2c80] transition-colors duration-300 font-medium group"
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6c2c80] group-hover:w-full transition-all duration-300"></span>
            </motion.a>
            <motion.a 
              href="#services" 
              className="relative flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-[#6c2c80] dark:hover:text-[#6c2c80] transition-colors duration-300 font-medium group"
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <Briefcase className="h-4 w-4" />
              <span>Services</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6c2c80] group-hover:w-full transition-all duration-300"></span>
            </motion.a>
            <motion.a 
              href="#about-section" 
              className="relative flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-[#6c2c80] dark:hover:text-[#6c2c80] transition-colors duration-300 font-medium group"
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <Users className="h-4 w-4" />
              <span>About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6c2c80] group-hover:w-full transition-all duration-300"></span>
            </motion.a>
            <motion.a 
              href="#contact-section" 
              className="relative flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-[#6c2c80] dark:hover:text-[#6c2c80] transition-colors duration-300 font-medium group"
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <Mail className="h-4 w-4" />
              <span>Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6c2c80] group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          </div>

          {/* Right side - Get Started Button, Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3 z-10">
            {/* Get Started Button - Desktop */}
            <motion.div
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              <Button
                onClick={scrollToContact}
                className="hidden md:flex bg-[#6c2c80] hover:bg-[#5a2568] text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.2, delay: 0.5 }}
            >
              <ThemeToggle />
            </motion.div>
            
            {/* Mobile menu button */}
            <motion.div
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, delay: 0.6 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-800/20 shadow-lg overflow-hidden z-50"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{ 
                maxWidth: '100vw', 
                width: '100%',
                left: '0',
                right: '0',
                marginLeft: '0',
                marginRight: '0',
                transform: 'translateX(0)'
              }}
            >
              <div className="px-4 py-6 space-y-4">
                <motion.div 
                  className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-[#6c2c80] dark:hover:text-[#6c2c80] transition-colors duration-300 font-medium py-3 px-2 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setTimeout(() => {
                      scrollToHome()
                    }, 100)
                  }}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-[#6c2c80] dark:hover:text-[#6c2c80] transition-colors duration-300 font-medium py-3 px-2 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setTimeout(() => {
                      const servicesSection = document.getElementById('services')
                      if (servicesSection) {
                        servicesSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }, 100)
                  }}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Briefcase className="h-4 w-4" />
                  <span>Services</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-[#6c2c80] dark:hover:text-[#6c2c80] transition-colors duration-300 font-medium py-3 px-2 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setTimeout(() => {
                      const aboutSection = document.getElementById('about-section')
                      if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }, 100)
                  }}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Users className="h-4 w-4" />
                  <span>About</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-[#6c2c80] dark:hover:text-[#6c2c80] transition-colors duration-300 font-medium py-3 px-2 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setTimeout(() => {
                      scrollToContact()
                    }, 100)
                  }}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="h-4 w-4" />
                  <span>Contact</span>
                </motion.div>
                
                {/* Get Started Button - Mobile */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    onClick={() => {
                      scrollToContact()
                      setMobileMenuOpen(false)
                    }}
                    className="w-full bg-[#6c2c80] hover:bg-[#5a2568] text-white px-4 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mt-4"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}