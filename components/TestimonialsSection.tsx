"use client"

import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Award, ChevronDown, ChevronUp } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [isExpanded, setIsExpanded] = useState(false);

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

  const toggleTestimonials = () => {
    setIsExpanded(!isExpanded);
  };

  // Real client testimonials with first paragraph and full content
  const testimonials = [
    {
      image: "/sc.webp",
      firstParagraph: "Before working with Srihita and her team at UVOKA, I struggled to translate my vision into a strong LinkedIn presence. I knew what I stood for, but not how to show up consistently or position my brand in a way that resonated.",
      fullQuote: "Before working with Srihita and her team at UVOKA, I struggled to translate my vision into a strong LinkedIn presence. I knew what I stood for, but not how to show up consistently or position my brand in a way that resonated. From the very beginning, UVOKA brought clarity, strategy, and intention to the table. They helped me define a compelling brand positioning that reflects both who I am and what I stand for. The content we've built together doesn't just sound like me, it feels like me. One of our posts was even picked up by Fox Story India, and that recognition wouldn't have been possible without the sharp positioning and storytelling the team brought in. If you're looking to build not just visibility, but credibility and community, Srihita and her team at UVOKA know how to get you there.",
      name: "Sagarika Chakraborty",
      role: "CEO Gulf & India @IIRIS Consulting | Times 40U40 ",
      rating: 5,
    },
    {
      image: "/c.webp",
      firstParagraph: "My personal brand on LinkedIn has reached great heights, thanks to the exceptional support of Team UVOKA and Srihita Vanguri. In just three months, their strategic approach helped me achieve recognition as a Favikon Top 15% LinkedIn creator in India.",
      fullQuote: "My personal brand on LinkedIn has reached great heights, thanks to the exceptional support of Team UVOKA and Srihita Vanguri. In just three months, their strategic approach helped me achieve recognition as a Favikon Top 15% LinkedIn creator in India. Their talent for understanding my voice and crafting content that is strategic, consistent, and deeply aligned with my values truly sets them apart. UVOKA's commitment to genuine, high-quality work is evident in every piece. For any founder or leader aiming to build a meaningful brand on LinkedIn, I wholeheartedly recommend UVOKA. They provide invaluable clarity and credibility.",
      name: "Chandrashekar D P, PhD",
      role: "Edupreneur, Author, TEDx Speaker & Business Coach",
      rating: 5,
    },
    {
      image: "/rb.webp",
      firstParagraph: "Srihita's work with personal branding is commendable. She really understands what one should focus on. I was totally confused on what niche I should I develop my personal brand but thanks to Srihita, she not only helped me work on my niche, she helped me earn a Top Voice badge as well.",
      fullQuote: "Srihita's work with personal branding is commendable. She really understands what one should focus on. I was totally confused on what niche I should I develop my personal brand but thanks to Srihita, she not only helped me work on my niche, she helped me earn a Top Voice badge as well. Moreover, as a client, you always love to work with someone who understands the importance of streamlining the work and one who takes feedback positively. I had no problem whatsoever working with Srihita or getting updates on the project. All the posts, articles, and creatives were managed very professionally. The best part, she listens, and understands your profile, your experience, work completely and then only with her skills and talent, she will help you to uplift and stand out. I definitely recommend Srihita as the preferred Personal Branding Expert for any working professional and I wish her and UVOKA all the best.",
      name: "Rakeshkumar S Bhatia",
      role: "Helping People Build Career and Business In Commercial Real Estate",
      rating: 5,
    },
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          className="text-center mb-20"
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
            <Award className="w-4 h-4 text-[#542267] dark:text-purple-300" />
            <span className="text-sm font-medium text-[#542267] dark:text-purple-200">Client Success Stories</span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-[#6c2c80] dark:text-white leading-tight pb-2"
            variants={itemVariants}
          >
            Transforming Personal Brands
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Our clients have achieved remarkable growth and recognition on LinkedIn. 
            Here are their stories of transformation and success with UVOKA.
          </motion.p>
        </motion.div>

        <motion.div 
          className="relative"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              return (
                <motion.div
                  key={index}
                  className="w-full"
                  layout
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Card className="h-full bg-white dark:bg-gray-900/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700/50 rounded-xl overflow-hidden">
                                         <CardContent className="p-8 h-full flex flex-col">
                                               {/* Image and Tagline - Further reduced height container */}
                                               <div className="flex items-start mb-3 sm:mb-4 min-h-[60px] sm:min-h-[80px]">
                          <div className="relative w-20 h-20 mr-4 flex-shrink-0">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              fill
                              className="rounded-full object-cover border-2 border-[#6c2c80] dark:border-white"
                              sizes="80px"
                            />
                          </div>
                          <div className="flex flex-col flex-1 min-h-0">
                            <div className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                              {testimonial.name}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-300 leading-relaxed">
                              {testimonial.role}
                            </div>
                          </div>
                        </div>

                       {/* Quote with AnimatePresence - Below header with spacing */}
                       <motion.blockquote 
                         className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed border-l-4 border-[#6c2c80]/30 dark:border-purple-800 pl-4 py-2 flex-grow"
                         layout
                       >
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={isExpanded ? "expanded" : "collapsed"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="block"
                          >
                            "{isExpanded ? testimonial.fullQuote : testimonial.firstParagraph}"
                            {!isExpanded && testimonial.fullQuote.length > testimonial.firstParagraph.length && (
                              <span className="text-gray-500">...</span>
                            )}
                          </motion.span>
                        </AnimatePresence>
                      </motion.blockquote>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Single Read More Button - Centered below all cards */}
          <motion.div 
            className="flex justify-center mt-12"
            layout
          >
            <motion.button
              onClick={toggleTestimonials}
              className="flex items-center gap-3 px-8 py-4 bg-[#6c2c80] hover:bg-[#542267] text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isExpanded ? (
                  <motion.div
                    key="read-less"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="flex items-center gap-3"
                  >
                    <span>READ LESS</span>
                    <ChevronUp className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="read-more"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="flex items-center gap-3"
                  >
                    <span>READ MORE</span>
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}