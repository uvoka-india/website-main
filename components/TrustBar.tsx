import Image from "next/image";
import { Award } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function TrustBar() {
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

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Elements - Left Side */}
      {/* Removed section-specific background, now handled globally */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
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
            <Award className="w-4 h-4 text-[#542267] dark:text-purple-300" />
            <span className="text-sm font-medium text-[#542267] dark:text-purple-200">Media Recognition</span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-[#6c2c80] dark:text-white"
            variants={itemVariants}
          >
            As Featured In
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Trusted by leading publications and recognized for our innovative approach to personal branding
          </motion.p>
        </motion.div>

        {/* Featured Publication Card */}
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={cardVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-[0_20px_60px_-15px_rgba(84,34,103,0.15)] border border-gray-200/50 dark:border-gray-700/50 overflow-hidden transition-all duration-300 hover:shadow-[0_25px_80px_-15px_rgba(84,34,103,0.25)] hover:-translate-y-1">
            
            <div className="relative p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Al Jazeera */}
                <motion.a 
                  href="https://www.aljazeera.com/news/2025/7/1/why-is-prada-caught-in-a-sandal-scandal-in-india"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex flex-col items-center justify-between h-full min-h-[280px]">
                    {/* Publication Logo */}
                    <motion.div 
                      className="relative w-32 h-32 bg-white backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-6 flex items-center justify-center group-hover:shadow-xl transition-all duration-300 mb-4"
                      whileHover={{ 
                        scale: 1.05,
                        rotate: 2,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Image
                        src="/al.webp"
                        alt="Al Jazeera"
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </motion.div>
                    
                    {/* Platform Text */}
                    <div className="text-center mb-4 flex-1 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-[#542267] dark:group-hover:text-purple-300 transition-colors duration-300">Al Jazeera</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">International News Network</p>
                    </div>
                    
                    {/* Read Article Link */}
                    <motion.div 
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-sm font-medium text-[#542267] dark:text-purple-300 shadow-lg border border-gray-200/50 dark:border-gray-700/50 group-hover:bg-[#542267] group-hover:text-white dark:group-hover:bg-purple-600 transition-all duration-300">
                        <span>Read Article</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.a>

                {/* Deccan Business */}
                <motion.a 
                  href="https://deccanbusiness.com/personal-branding-is-more-than-a-buzzword-and-uvoka-is-proving-it-every-day/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex flex-col items-center justify-between h-full min-h-[280px]">
                    {/* Publication Logo */}
                    <motion.div 
                      className="relative w-32 h-32 bg-white backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-6 flex items-center justify-center group-hover:shadow-xl transition-all duration-300 mb-4"
                      whileHover={{ 
                        scale: 1.05,
                        rotate: 2,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Image
                        src="/deccan.webp"
                        alt="Deccan Business"
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </motion.div>
                    
                    {/* Platform Text */}
                    <div className="text-center mb-4 flex-1 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-[#542267] dark:group-hover:text-purple-300 transition-colors duration-300">Deccan Business</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Leading Business Platform</p>
                    </div>
                    
                    {/* Read Article Link */}
                    <motion.div 
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-sm font-medium text-[#542267] dark:text-purple-300 shadow-lg border border-gray-200/50 dark:border-gray-700/50 group-hover:bg-[#542267] group-hover:text-white dark:group-hover:bg-purple-600 transition-all duration-300">
                        <span>Read Article</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.a>

                {/* The Telegraph News */}
                <motion.a 
                  href="https://thetelegraphnews.com/personal-branding-is-more-than-a-buzzword-and-uvoka-is-proving-it-every-day/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex flex-col items-center justify-between h-full min-h-[280px]">
                    {/* Publication Logo */}
                    <motion.div 
                      className="relative w-32 h-32 bg-white backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-6 flex items-center justify-center group-hover:shadow-xl transition-all duration-300 mb-4"
                      whileHover={{ 
                        scale: 1.05,
                        rotate: 2,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Image
                        src="/telgraph.webp"
                        alt="The Telegraph News"
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </motion.div>
                    
                    {/* Platform Text */}
                    <div className="text-center mb-4 flex-1 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-[#542267] dark:group-hover:text-purple-300 transition-colors duration-300">The Telegraph News</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Leading News Platform</p>
                    </div>
                    
                    {/* Read Article Link */}
                    <motion.div 
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-sm font-medium text-[#542267] dark:text-purple-300 shadow-lg border border-gray-200/50 dark:border-gray-700/50 group-hover:bg-[#542267] group-hover:text-white dark:group-hover:bg-purple-600 transition-all duration-300">
                        <span>Read Article</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}