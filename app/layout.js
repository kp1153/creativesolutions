import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Web Developer KP | Next.js 16 & Laravel Specialist",
  description:
    "Professional website development with Next.js 16 and Laravel. Free Vercel hosting, WordPress migration, content writing in Hindi-English-Urdu. Built 15+ websites for businesses across India.",
  keywords:
    "Next.js developer, Laravel developer, WordPress migration, web development India, Hindi content writer, Varanasi web developer, free hosting website, PHP developer",
  author: "Kamta Prasad",
  openGraph: {
    title: "Web Developer KP | Next.js 16 & Laravel Expert",
    description:
      "वर्डप्रेस से छुटकारा पाएं। Next.js पर फ्री होस्टिंग या Laravel पर किफायती होस्टिंग। 15+ websites delivered.",
    url: "https://www.web-developer-kp.com",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <head>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BR086CF3CY"
          strategy="afterInteractive"
        />
        <Script id="ga4-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BR086CF3CY');
          `}
        </Script>
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
