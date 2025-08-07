import { ArrowRight, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function CTASection() {
  return (
    <section id="contact-section" className="px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="relative bg-[#6c2c80] rounded-3xl overflow-visible">
          <div className="flex flex-col md:flex-row items-start py-16 px-8 md:px-12 lg:px-16">
            {/* Left side: Text and buttons */}
            <div className="md:w-2/3 text-left z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's build your unforgettable brand today!
              </h2>
                              
               <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="bg-white text-[#6c2c80] hover:bg-purple-50 px-8 py-3 text-lg shadow-lg">
                  <Link href="#contact-section">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[#6c2c80] px-8 py-3 text-lg bg-transparent"
                >
                  <Link href="#services">Explore Services</Link>
                                 </Button>
               </div>
                               <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex flex-wrap gap-6 text-sm text-purple-200">
                    <a href="https://www.linkedin.com/company/uvoka/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-100 transition-colors">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                    <a href="mailto:srihita@uvoka.co.in" className="flex items-center gap-2 hover:text-purple-100 transition-colors">
                      <Mail className="h-4 w-4" />
                      srihita@uvoka.co.in
                    </a>
                    <a href="tel:7702141838" className="flex items-center gap-2 hover:text-purple-100 transition-colors">
                      <Phone className="h-4 w-4" />
                      7702141838
                    </a>
                  </div>
                </div>
             </div>
            
            {/* Right side: Floating postbox image */}
            <div className="md:w-1/3 relative">
                             <div className="absolute right-0 -bottom-16 translate-x-1/6 translate-y-1/2 z-30">
                                 <Image
                   src="/anew.png"
                   alt="UVOKA Postbox"
                   width={1000}
                   height={1000}
                   className="object-contain drop-shadow-2xl filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)]"
                   priority
                 />
              </div>
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 