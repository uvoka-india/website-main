"use client"

import { Card, CardContent } from "@/components/ui/card"
import { 
  CheckCircle, PackageOpen, PieChart, 
  Layout, FileText, Palette, Users, 
  MessageCircle, ArrowRight, Sparkles
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function PackagesSection() {
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null);
  const [animateChart, setAnimateChart] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const pieChartVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      setAnimateChart(true);
    }
  }, [isInView, controls]);
  
  const packages = [
    {
      id: 1,
      title: "90° Package",
      description: "Perfect for professionals looking to establish their LinkedIn presence with essential branding and content.",
      features: [
        { icon: Layout, text: "Profile Optimization" },
        { icon: FileText, text: "Content Strategy" },
        { icon: MessageCircle, text: "Content - 8 pieces/month" },
        { icon: CheckCircle, text: "" }, // Empty placeholder for alignment
        { icon: CheckCircle, text: "" }, // Empty placeholder for alignment
        { icon: CheckCircle, text: "" }  // Empty placeholder for alignment
      ],
      color: "from-[#542267] via-purple-700 to-pink-600", // Using same gradient as 360° package
      degrees: 270,
      startAngle: 225,
      pieStyle: "cutout-left" // 3/4 of the pie chart (missing left quarter)
    },
    {
      id: 2,
      title: "180° Package",
      description: "Comprehensive solution for professionals ready to elevate their presence with strategic content and design.",
      features: [
        { icon: Layout, text: "Profile Optimization" },
        { icon: FileText, text: "Content Strategy" },
        { icon: MessageCircle, text: "Content - 9 pieces/month" },
        { icon: Palette, text: "Design (Banner, Featured, Carousels)" },
        { icon: CheckCircle, text: "" }, // Empty placeholder for alignment
        { icon: CheckCircle, text: "" }  // Empty placeholder for alignment
      ],
      color: "from-[#542267] via-purple-700 to-pink-600", // Using same gradient as 360° package
      degrees: 180,
      startAngle: 180,
      pieStyle: "half-circle" // Semi-circle (top half)
    },
    {
      id: 3,
      title: "360° Package",
      description: "Complete LinkedIn domination with our all-inclusive package for serious personal brand building and lead generation.",
      features: [
        { icon: Layout, text: "Profile Optimization" },
        { icon: FileText, text: "Content Strategy" },
        { icon: MessageCircle, text: "Content - 13 pieces/month" },
        { icon: Palette, text: "Design (Banner, Featured, Carousels)" },
        { icon: Users, text: "Community and Network Building" },
        { icon: ArrowRight, text: "Outreach" }
      ],
      color: "from-[#542267] via-purple-700 to-pink-600",
      degrees: 360,
      startAngle: 0,
      pieStyle: "full-circle" // Complete circle
    }
  ];

  return (
    <section id="packages-section" className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:from-transparent dark:via-purple-950/10 dark:to-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 mb-6 shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <PackageOpen className="w-4 h-4 text-[#542267] dark:text-purple-300" />
            <span className="text-sm font-medium text-[#542267] dark:text-purple-200">Tailored Solutions</span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-[#6c2c80] dark:text-white leading-tight pb-2"
            variants={itemVariants}
          >
            Our Packages
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Choose the perfect package that aligns with your LinkedIn goals and personal brand vision.
          </motion.p>
        </motion.div>

        {/* Packages Cards */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {packages.map((pkg, index) => (
            <motion.div 
              key={pkg.id}
              className="group relative"
              variants={cardVariants}
              onMouseEnter={() => setHoveredPackage(pkg.id)}
              onMouseLeave={() => setHoveredPackage(null)}
            >
              <Card className={`h-full min-h-[600px] flex flex-col transition-all duration-500 overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-0 shadow-lg ${
                hoveredPackage === pkg.id ? 'shadow-xl' : ''
              }`}>
                {/* Top Accent Bar */}
                <div className="h-1.5 w-full bg-[#6c2c80]"></div>
                
                <CardContent className="p-8 relative flex flex-col h-full flex-1">
                  {/* Package Title and Pie Chart */}
                  <div className="flex flex-col items-center mb-8">
                    <motion.div 
                      className="flex flex-col items-center mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-5xl font-extrabold text-[#6c2c80] dark:text-white">
                        {pkg.title.split('°')[0]}°
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium tracking-wide">
                        {pkg.id === 1 && 'Essential Branding'}
                        {pkg.id === 2 && 'Strategic Growth'}
                        {pkg.id === 3 && 'Complete Domination'}
                      </span>
                    </motion.div>
                    <motion.div 
                      className="relative w-40 h-40 transform transition-transform group-hover:scale-110 duration-500"
                      variants={pieChartVariants}
                      initial="hidden"
                      animate={animateChart ? "visible" : "hidden"}
                      transition={{ delay: index * 0.2 }}
                    >
                      {pkg.pieStyle === "cutout-left" && (
                        <img src="/90.png" alt="90 degree pie chart" className="w-full h-full object-contain" />
                      )}
                      {pkg.pieStyle === "half-circle" && (
                        <img src="/180.png" alt="180 degree pie chart" className="w-full h-full object-contain" />
                      )}
                      {pkg.pieStyle === "full-circle" && (
                        <img src="/360.png" alt="360 degree pie chart" className="w-full h-full object-contain" />
                      )}
                    </motion.div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {pkg.description}
                  </p>
                  
                  <div className="flex-grow"></div>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-center text-sm h-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3,
                          delay: index * 0.1 + i * 0.05
                        }}
                      >
                        {feature.text && (
                          <>
                            <motion.div 
                              className="p-1.5 rounded-full bg-[#6c2c80] text-white mr-3 flex-shrink-0"
                              whileHover={{ 
                                scale: 1.2,
                                rotate: 5,
                                transition: { duration: 0.2 }
                              }}
                            >
                              <feature.icon className="h-3.5 w-3.5" />
                            </motion.div>
                            <span className="text-gray-700 dark:text-gray-300">{feature.text}</span>
                          </>
                        )}
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <motion.a 
                    href="#contact-section" 
                    className="mt-4 w-full py-3 flex items-center justify-center rounded-full bg-[#6c2c80] text-white font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg group"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom Note */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium shadow-sm border border-purple-100 dark:border-purple-900/30"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Sparkles className="h-4 w-4 text-[#542267] dark:text-purple-400" />
            <span className="text-gray-700 dark:text-gray-300">All packages include personalized strategy and dedicated support</span>
          </motion.div>
        </motion.div>
        
        {/* Add Ons Section */}
        <motion.div 
          className="mt-24 max-w-4xl mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100 dark:border-purple-900/30 relative overflow-hidden"
          variants={cardVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#6c2c80]"></div>
          <motion.div 
            className="absolute -z-10 top-[-50%] right-[-10%] w-[40%] h-[80%] bg-gradient-to-bl from-purple-500/10 dark:from-purple-400/5 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
          ></motion.div>
          
          <div className="text-center mb-8">
            <motion.span 
              className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Sparkles className="h-4 w-4 text-[#542267] dark:text-purple-400" />
              <span className="text-[#542267] dark:text-purple-300">Add Ons</span>
            </motion.span>
            <h3 className="text-3xl font-bold mb-3 text-[#6c2c80] dark:text-white">
              Boost Your Brand Even Further
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These optional services are designed to amplify your personal brand beyond LinkedIn:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: FileText,
                title: "Newsletter Ghostwriting",
                description: "We craft memorable, voice-driven newsletters that build trust and keep your brand top-of-mind."
              },
              {
                icon: Layout,
                title: "Website Development",
                description: "A sleek, personal website that mirrors your brand and turns visitors into opportunities."
              },
              {
                icon: MessageCircle,
                title: "Website Copy",
                description: "High-converting, personality-driven website copy tailored to your voice, goals, and industry."
              }
            ].map((addon, index) => (
              <motion.div 
                key={index}
                className="bg-white/60 dark:bg-gray-800/60 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-purple-50 dark:border-purple-900/20"
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.1
                }}
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="p-2 rounded-full bg-[#6c2c80] text-white mr-3"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <addon.icon className="h-5 w-5" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{addon.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {addon.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-8 text-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <a 
              href="#contact-section" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#6c2c80] text-white font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg group"
            >
              <span>Explore Add Ons</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}