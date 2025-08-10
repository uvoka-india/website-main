"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Trophy } from "lucide-react"
import Image from "next/image"

export default function FavikonSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

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

  const achievements = [
    {
      percentage: "Top 6%",
      country: "LinkedIn India",
      color: "green",
      icon: "green"
    },
    {
      percentage: "Top 6%",
      country: "LinkedIn UAE",
      color: "green",
      icon: "green"
    },
    {
      percentage: "Top 13%",
      country: "LinkedIn India",
      color: "orange",
      icon: "orange"
    },
    {
      percentage: "Top 16%",
      country: "LinkedIn India",
      color: "orange",
      icon: "orange"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          className="text-center mb-12"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 mb-6 shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Trophy className="w-4 h-4 text-[#542267] dark:text-purple-300" />
            <span className="text-sm font-medium text-[#542267] dark:text-purple-200">Featured On</span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-[#6c2c80] dark:text-white leading-tight pb-2"
            variants={itemVariants}
          >
            Our Clients Top on Favikon
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            variants={itemVariants}
          >
            Our clients have achieved remarkable recognition on LinkedIn, being featured among the top creators on Favikon.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-4 sm:px-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="flex justify-center p-2 sm:p-4"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
                             <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center p-3 sm:p-3 md:p-4 hover:shadow-xl transition-all duration-300">
                                 {/* Circle Icon */}
                 <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 sm:mb-3 ${
                   achievement.icon === "green" 
                     ? "bg-green-100 dark:bg-green-900/30" 
                     : "bg-orange-100 dark:bg-orange-900/30"
                 }`}>
                   <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                     achievement.icon === "green" 
                       ? "bg-green-500" 
                       : "bg-orange-500"
                   }`}>
                     <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                   </div>
                 </div>
                 
                 {/* Percentage */}
                 <div className={`text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2 ${
                   achievement.color === "green" 
                     ? "text-green-600 dark:text-green-400" 
                     : "text-orange-600 dark:text-orange-400"
                 }`}>
                   {achievement.percentage}
                 </div>
                 
                 {/* LinkedIn Logo */}
                 <div className="mb-1 sm:mb-2">
                   <div className="relative w-5 h-5 sm:w-6 sm:h-6 mx-auto">
                     <Image
                       src="/faviz.webp"
                       alt="LinkedIn"
                       fill
                       className="object-contain rounded"
                       sizes="(max-width: 640px) 20px, 24px"
                     />
                   </div>
                 </div>
                 
                 {/* LinkedIn and Country Text */}
                 <div className="text-center">
                   <span className="text-xs font-medium text-gray-700 dark:text-gray-300 leading-tight">
                     {achievement.country}
                   </span>
                 </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}