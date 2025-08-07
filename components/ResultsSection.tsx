"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Eye, Award, TrendingUp, Target, Sparkles, Zap, Rocket, Crown } from "lucide-react"
import { useEffect, useState } from "react"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])

  return (
    <span className="text-2xl md:text-3xl font-bold text-[#6c2c80] dark:text-white">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default function ResultsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('results-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: Eye,
      value: 50,
      suffix: "M+",
      label: "Organic Views",
      description: "Massive reach without paid ads",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-500/10 to-purple-600/10"
    },
    {
      icon: Award,
      value: 20,
      suffix: "+",
      label: "Media Features",
      description: "Featured in top publications",
      gradient: "from-purple-600 to-purple-700",
      bgGradient: "from-purple-600/10 to-purple-700/10"
    },
    {
      icon: TrendingUp,
      value: 500,
      suffix: "%",
      label: "Avg. Increase in Impressions",
      description: "Dramatic visibility boost",
      gradient: "from-purple-700 to-purple-800",
      bgGradient: "from-purple-700/10 to-purple-800/10"
    },

  ]

  return (
    <section id="results-section" className="py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Elements - Right Side */}
      {/* Removed section-specific background, now handled globally */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 mb-4 shadow-lg hover:scale-105 transition-all duration-300">
            <Sparkles className="h-4 w-4 text-[#542267] dark:text-purple-300" />
            <span className="text-sm font-medium text-[#542267] dark:text-purple-200">Proven Results</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#6c2c80] dark:text-white">
            Results That Speak for Themselves
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our proven methodology turns LinkedIn profiles into lead magnets all organically without spending $$$ on ads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardContent className="relative p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#6c2c80] mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="mb-3">
                    {isVisible ? (
                      <AnimatedCounter 
                        end={stat.value} 
                        suffix={stat.suffix}
                        duration={2000 + index * 500}
                      />
                    ) : (
                      <span className="text-2xl md:text-3xl font-bold text-gray-400">0{stat.suffix}</span>
                    )}
                  </div>
                  
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-xs text-gray-600 dark:text-white">
                    {stat.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="h-full bg-[#6c2c80] rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? '100%' : '0%',
                        transitionDelay: `${1000 + index * 200}ms`
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a 
            href="#contact-section"
            className="inline-flex items-center gap-3 bg-[#6c2c80] text-white px-6 py-3 rounded-full text-base font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg hover:shadow-xl"
          >
            <Zap className="h-4 w-4" />
            Ready to Transform Your LinkedIn?
            <Rocket className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}