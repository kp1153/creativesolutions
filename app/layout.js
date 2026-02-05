import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const OG_IMAGE_URL = "https://www.web-developer-kp.com/og-image.jpg";

export const metadata = {
  metadataBase: new URL("https://www.web-developer-kp.com"),
  title: {
    default: "K.P. Tiwari | Next.js-Sanity Expert | Mobile App & Website Developer",
    template: "%s | K.P. Tiwari",
  },
  description:
    "K.P. Tiwari - Next.js-Sanity Expert, Mobile App & Website Developer. Professional web development services with modern technologies.",
  keywords:
    "Next.js developer, Sanity CMS expert, web development, mobile app developer, K.P. Tiwari, React developer, fullstack developer",
  authors: [{ name: "K.P. Tiwari" }],
  creator: "K.P. Tiwari",
  publisher: "K.P. Tiwari",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.web-developer-kp.com",
    siteName: "K.P. Tiwari - Developer Portfolio",
    title: "K.P. Tiwari | Next.js-Sanity Expert | Mobile App & Website Developer",
    description:
      "K.P. Tiwari - Next.js-Sanity Expert, Mobile App & Website Developer. Building modern, scalable web applications.",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "K.P. Tiwari - Next.js-Sanity Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "K.P. Tiwari | Next.js-Sanity Expert",
    description:
      "Next.js-Sanity Expert, Mobile App & Website Developer. Building modern web solutions.",
    images: [OG_IMAGE_URL],
    creator: "@kptiwari",
  },
  alternates: {
    canonical: "https://www.web-developer-kp.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A365D",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "K.P. Tiwari - Web Developer",
  image: OG_IMAGE_URL,
  url: "https://www.web-developer-kp.com",
  telephone: "+91-9996865069",
  email: "prasad.kamta@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Varanasi",
    addressRegion: "Uttar Pradesh",
    postalCode: "221202",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="K.P. Tiwari - Next.js-Sanity Expert" />
        
        <meta name="twitter:image" content={OG_IMAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          strategy="beforeInteractive"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}