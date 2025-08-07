import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UVOKA - LinkedIn Personal Branding Agency",
  description: "We help founders, executives and companies build LinkedIn presences that lead, influence, and last. Transform your personal brand with strategic LinkedIn growth.",
  keywords: ["LinkedIn Personal Branding", "LinkedIn Growth", "Personal Branding Agency", "LinkedIn Marketing", "Social Media Strategy", "Professional Branding"],
  authors: [{ name: "UVOKA Team" }],
  creator: "UVOKA",
  publisher: "UVOKA",
  generator: 'Next.js',
  metadataBase: new URL('https://uvoka.advaitt.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://uvoka.advaitt.tech',
    siteName: 'UVOKA',
    title: 'UVOKA - LinkedIn Personal Branding Agency',
    description: 'We help founders, executives and companies build LinkedIn presences that lead, influence, and last. Transform your personal brand with strategic LinkedIn growth.',
    images: [
      {
        url: '/homepage.png',
        width: 1200,
        height: 630,
        alt: 'UVOKA - LinkedIn Personal Branding Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@uvoka',
    creator: '@uvoka',
    title: 'UVOKA - LinkedIn Personal Branding Agency',
    description: 'We help founders, executives and companies build LinkedIn presences that lead, influence, and last.',
    images: ['/homepage.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
