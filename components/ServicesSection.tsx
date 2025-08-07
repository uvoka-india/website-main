import { Card, CardContent } from "@/components/ui/card"
import { 
  UserPlus, Building2, Target, CheckCircle, 
  TrendingUp, Award, BarChart3, Users, Globe, Zap,ChevronRight
} from "lucide-react"
import { useState, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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
  
  const services = [
    {
      id: 1,
      title: "LinkedIn Personal Branding",
      description: "We have built solid personal brands for 25+ clients and generated 50 million views, which led to them being featured in reputed media outlets and even going viral.",
      icon: UserPlus,
      highlights: ["Media Features", "Viral Content", "Thought Leadership"],
      gradient: "from-[#542267] to-purple-600",
      accentIcon: TrendingUp
    },
    {
      id: 2,
      title: "LinkedIn Company Page Branding",
      description: "We help build your company's brand along with yours, creating a cohesive presence that amplifies your personal authority.",
      icon: Building2,
      highlights: ["Brand Consistency", "Corporate Voice", "Team Alignment"],
      gradient: "from-[#542267] to-indigo-600",
      accentIcon: Globe
    },
    {
      id: 3,
      title: "LinkedIn Lead Generation",
      description: "We help build a sustainable pipeline for you through an organic and personalized outreach method that converts connections into opportunities.",
      icon: Target,
      highlights: ["Organic Growth", "Qualified Leads", "Personalized Outreach"],
      gradient: "from-[#542267] to-pink-600",
      accentIcon: BarChart3
    }
  ];

  return (
    <section id="services" className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Elements - Right Side */}
      {/* Removed section-specific background, now handled globally */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
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
            <Zap className="w-4 h-4 text-[#542267] dark:text-purple-300" />
            <span className="text-sm font-medium text-[#542267] dark:text-purple-200">Expert Solutions</span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-[#6c2c80] dark:text-white"
            variants={itemVariants}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Transforming LinkedIn profiles into powerful business assets through strategic branding and authentic engagement.
          </motion.p>
        </motion.div>

        {/* Services Cards */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="group relative"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className={`h-full transition-all duration-500 overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-0 shadow-lg ${
                hoveredCard === service.id ? 'transform -translate-y-2 shadow-xl' : ''
              }`}>
                {/* Top Accent Bar */}
                <div className="h-1.5 w-full bg-[#6c2c80]"></div>
                
                <CardContent className="p-8 relative flex flex-col h-full">

                  
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="p-3 rounded-xl bg-[#6c2c80] text-white shadow-lg"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <service.icon className="h-6 w-6" />
                    </motion.div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-[#6c2c80] dark:group-hover:text-purple-300 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
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
              className="inline-flex items-center gap-2 bg-[#6c2c80] text-white px-6 py-3 rounded-full text-base font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Award className="h-5 w-5" />
              <span>Get Started with Our Services</span>
              <ChevronRight className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}