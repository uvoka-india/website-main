"use client"

import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import TrustBar from "@/components/TrustBar"
import ResultsSection from "@/components/ResultsSection"
import FavikonSection from "@/components/FavikonSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import ServicesSection from "@/components/ServicesSection"
import PackagesSection from "@/components/PackagesSection"
import ProcessSection from "@/components/ProcessSection"
import AboutSection from "@/components/AboutSection"
import TeamSection from "@/components/TeamSection"
import { CTASection } from "@/components/CTASection"
import Footer from "@/components/Footer"

export default function UvokaWebsite() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <HeroSection />
      <TrustBar />
      <ResultsSection />
      <FavikonSection />
      <TestimonialsSection />
      <ServicesSection />
      <PackagesSection />
      <ProcessSection />
      <AboutSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  )
}