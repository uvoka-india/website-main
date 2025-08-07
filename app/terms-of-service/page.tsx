import { FileCheck, Scale, AlertTriangle, Clock, FileText, Briefcase, MessageSquare, Shield } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | UVOKA",
  description: "Terms of Service for UVOKA - Learn about the terms and conditions that govern your use of our services.",
}

export default function TermsOfService() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#2a1134] via-[#542267] to-[#2a1134] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-purple-900/30 rounded-full mb-4">
              <FileCheck className="h-8 w-8 text-purple-200" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-purple-100 mb-4">Terms of Service</h1>
            <p className="text-purple-200 max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>

          <section className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-purple-500/20">
            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1">
                <Scale className="h-6 w-6 text-purple-300" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-purple-100 mb-3">Agreement to Terms</h2>
                <p className="text-purple-200">
                  By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and others who access or use our services.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-purple-500/20">
            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1">
                <Briefcase className="h-6 w-6 text-purple-300" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-purple-100 mb-3">Services</h2>
                <p className="text-purple-200 mb-4">
                  UVOKA provides LinkedIn branding and marketing services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-purple-200 space-y-2 ml-4">
                  <li>Personal branding strategy and execution</li>
                  <li>Company branding and positioning</li>
                  <li>Lead generation campaigns</li>
                  <li>Content creation and management</li>
                  <li>Profile optimization and enhancement</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-purple-500/20">
            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1">
                <FileText className="h-6 w-6 text-purple-300" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-purple-100 mb-3">Intellectual Property</h2>
                <p className="text-purple-200">
                  The service and all content, features, and functionality are owned by UVOKA and are protected by copyright, trademark, and other intellectual property laws. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of UVOKA.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-purple-500/20">
            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1">
                <AlertTriangle className="h-6 w-6 text-purple-300" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-purple-100 mb-3">Limitations of Liability</h2>
                <p className="text-purple-200">
                  In no event shall UVOKA, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-purple-500/20">
            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1">
                <Shield className="h-6 w-6 text-purple-300" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-purple-100 mb-3">User Responsibilities</h2>
                <p className="text-purple-200 mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-purple-200 space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account</li>
                  <li>Not use the service for any illegal purposes</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-purple-500/20">
            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1">
                <Clock className="h-6 w-6 text-purple-300" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-purple-100 mb-3">Termination</h2>
                <p className="text-purple-200">
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service will immediately cease.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-purple-500/20">
            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1">
                <MessageSquare className="h-6 w-6 text-purple-300" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-purple-100 mb-3">Contact Us</h2>
                <p className="text-purple-200">
                  If you have any questions about these Terms, please contact us at <a href="mailto:srihita@uvoka.co.in" className="text-purple-300 hover:text-purple-100 underline">srihita@uvoka.co.in</a> or call us at <a href="tel:7702141838" className="text-purple-300 hover:text-purple-100 underline">7702141838</a>.
                </p>
              </div>
            </div>
          </section>
          
          <div className="text-center pt-8">
            <a href="/" className="inline-flex items-center text-purple-300 hover:text-purple-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}