import { Shield, Eye, Lock, FileText, UserCheck, Clock, Globe, Database, RefreshCw } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | UVOKA",
  description: "Privacy Policy for UVOKA - Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicy() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#2a1134] via-[#542267] to-[#2a1134] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-purple-900/30 rounded-full mb-4">
              <Shield className="h-8 w-8 text-purple-200" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-purple-100 mb-4">Privacy Policy</h1>
            <p className="text-purple-200 max-w-2xl mx-auto">
              At UVOKA, we value your privacy and are committed to protecting your personal information.
            </p>
          </div>

          <section className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-purple-500/20">
            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1">
                <Eye className="h-6 w-6 text-purple-300" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-purple-100 mb-3">Information We Collect</h2>
                <p className="text-purple-200 mb-4">
                  We collect information that you provide directly to us when you:
                </p>
                <ul className="list-disc list-inside text-purple-200 space-y-2 ml-4">
                  <li>Contact us through our website</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request our services</li>
                  <li>Interact with our social media accounts</li>
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
                <h2 className="text-xl font-semibold text-purple-100 mb-3">How We Use Your Information</h2>
                <p className="text-purple-200 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-purple-200 space-y-2 ml-4">
                  <li>Provide and improve our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you updates and marketing communications</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-purple-500/20">
            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1">
                <Lock className="h-6 w-6 text-purple-300" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-purple-100 mb-3">Data Security</h2>
                <p className="text-purple-200">
                  We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-purple-500/20">
            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1">
                <UserCheck className="h-6 w-6 text-purple-300" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-purple-100 mb-3">Your Rights</h2>
                <p className="text-purple-200 mb-4">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-purple-200 space-y-2 ml-4">
                  <li>Access and receive a copy of your data</li>
                  <li>Rectify inaccurate or incomplete information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict processing of your data</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-purple-500/20">
            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1">
                <RefreshCw className="h-6 w-6 text-purple-300" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-purple-100 mb-3">Updates to This Policy</h2>
                <p className="text-purple-200">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-purple-500/20">
            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1">
                <Globe className="h-6 w-6 text-purple-300" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-purple-100 mb-3">Contact Us</h2>
                <p className="text-purple-200">
                  If you have any questions about this Privacy Policy, please contact us at <a href="mailto:srihita@uvoka.co.in" className="text-purple-300 hover:text-purple-100 underline">srihita@uvoka.co.in</a> or call us at <a href="tel:7702141838" className="text-purple-300 hover:text-purple-100 underline">7702141838</a>.
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