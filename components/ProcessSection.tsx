"use client"

import { 
  Phone, FileText, Layout, BarChart3, MessageSquare, PieChart, 
  ChevronRight, ArrowRight, CheckCircle, Sparkles 
} from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function ProcessSection() {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
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

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stepCircleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const steps = [
    {
      number: 1,
      title: "Onboarding Call",
      description: "We ask you 50-60 questions about your personal and professional life to help us get into your shoes and understand your stories",
      icon: Phone
    },
    {
      number: 2,
      title: "Profile Optimization",
      description: "Our team will then work on your headline, bio, banner etc and give you, your optimisation in the next 24 hours.",
      icon: Layout
    },
    {
      number: 3,
      title: "Content Pillars",
      description: "We use frameworks like TOFU, MOFU, BOFU to give you the perfect mix of topics that you will love.",
      icon: FileText
    },
    {
      number: 4,
      title: "Content Calendar",
      description: "We share a notion board with you with content every Monday. Which means 0 follow ups. Only 15-20 mins of your time to approve content",
      icon: BarChart3
    },
    {
      number: 5,
      title: "Graphics Approval",
      description: "To communicate with you in real-time & churn content as per your requirements, we create a WhatsApp/slack group to communicate with you faster.",
      icon: MessageSquare
    },
    {
      number: 6,
      title: "Progress Report",
      description: "We track your progress weekly to understand what's working & then deep dive every month to give you a detailed analysis.",
      icon: PieChart
    }
  ];

  return (
    <section id="process" className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20 max-w-3xl mx-auto"
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
            <Sparkles className="w-4 h-4 text-[#6c2c80] dark:text-purple-300" />
            <span className="text-sm font-medium text-[#6c2c80] dark:text-purple-200">Our Proven Process</span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-[#6c2c80] dark:text-white pb-2 leading-tight"
            variants={itemVariants}
          >
            Your Journey to LinkedIn Success
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Our streamlined process ensures a seamless experience from onboarding to ongoing optimization.
          </motion.p>
        </motion.div>

        {/* Process Timeline - Mobile: Vertical, Desktop: Snake Layout */}
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          

          {/* Mobile Layout - Vertical Steps */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                ref={(el) => { stepsRef.current[index] = el; }}
                className="relative flex flex-col items-center"
                variants={stepVariants}
              >
                {/* Step Number Circle */}
                <div className="flex justify-center mb-6">
                  <motion.div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-[#6c2c80] font-bold text-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 shadow-lg transition-all duration-500 relative z-20"
                    variants={stepCircleVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="flex flex-col items-center leading-none">
                      <span className="text-[#6c2c80] dark:text-purple-200 font-bold text-lg">{step.number}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Step Content */}
                <motion.div 
                  className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-purple-100/50 dark:border-purple-800/50 transition-all duration-500 w-full max-w-md hover:shadow-2xl hover:scale-[1.02]"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <motion.div 
                      className="p-3 rounded-full bg-[#6c2c80] text-white mr-4 shadow-md"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <step.icon className="h-6 w-6" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-[#6c2c80] dark:text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Layout - Snake Layout */}
          <div className="hidden lg:block">
            {/* Top Row - Steps 1, 2, 3 */}
            <div className="grid grid-cols-3 gap-8 mb-16">
              {steps.slice(0, 3).map((step, index) => (
                <motion.div 
                  key={step.number}
                  ref={(el) => { stepsRef.current[index] = el; }}
                  className="relative flex flex-col h-full"
                  variants={stepVariants}
                >
                  {/* Step Number Circle */}
                  <div className="flex justify-center mb-6">
                    <motion.div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-[#6c2c80] font-bold text-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 shadow-lg transition-all duration-500 relative z-20"
                      variants={stepCircleVariants}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="flex flex-col items-center leading-none">
                        <span className="text-[#6c2c80] dark:text-purple-200 font-bold text-lg">{step.number}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Step Content */}
                  <motion.div 
                    className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-purple-100/50 dark:border-purple-800/50 transition-all duration-500 flex-1 flex flex-col hover:shadow-2xl hover:scale-[1.02]"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <motion.div 
                        className="p-3 rounded-full bg-[#6c2c80] text-white mr-4 shadow-md"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <step.icon className="h-6 w-6" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-[#6c2c80] dark:text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm flex-1">{step.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Row - Steps 4, 5, 6 */}
            <div className="grid grid-cols-3 gap-8">
              {steps.slice(3, 6).map((step, index) => (
                <motion.div 
                  key={step.number}
                  ref={(el) => { stepsRef.current[index + 3] = el; }}
                  className="relative flex flex-col h-full"
                  variants={stepVariants}
                >
                  {/* Step Number Circle */}
                  <div className="flex justify-center mb-6">
                    <motion.div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-[#6c2c80] font-bold text-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 shadow-lg transition-all duration-500 relative z-20"
                      variants={stepCircleVariants}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="flex flex-col items-center leading-none">
                        <span className="text-[#6c2c80] dark:text-purple-200 font-bold text-lg">{step.number}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Step Content */}
                  <motion.div 
                    className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-purple-100/50 dark:border-purple-800/50 transition-all duration-500 flex-1 flex flex-col hover:shadow-2xl hover:scale-[1.02]"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <motion.div 
                        className="p-3 rounded-full bg-[#6c2c80] text-white mr-4 shadow-md"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <step.icon className="h-6 w-6" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-[#6c2c80] dark:text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm flex-1">{step.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#contact-section" 
              className="inline-flex items-center px-8 py-4 rounded-full bg-[#6c2c80] text-white font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg group border border-purple-300/20"
            >
              <span>Start Your Journey Today</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}