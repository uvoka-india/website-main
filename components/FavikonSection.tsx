"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Trophy } from "lucide-react"

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

  const favicons = [
    {
      src: "/favicon (2).jpeg",
      alt: "Favikon Client 2"
    },
    {
      src: "/favicon (4).jpg",
      alt: "Favikon Client 3"
    },
    {
      src: "/favicon (1).jpeg",
      alt: "Favikon Client 1"
    },
    {
      src: "/favicon (4).jpeg",
      alt: "Favikon Client 4"
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
           {favicons.map((favicon, index) => (
             <motion.div
               key={index}
               className="flex justify-center p-2 sm:p-4"
               variants={itemVariants}
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.3 }}
             >
                               <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                  <Image
                    src={favicon.src}
                    alt={favicon.alt}
                    fill
                    className="object-contain drop-shadow-lg rounded-lg"
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                  />
                </div>
             </motion.div>
           ))}
         </motion.div>
      </div>
    </section>
  )
}