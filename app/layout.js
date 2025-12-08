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
  title: "Web Developer KP | Next.js 16 & Laravel Specialist in India",
  description:
    "Professional website development in India using Next.js 16 and Laravel. Fast hosting, SEO-friendly architecture, affordable Digital Ocean deployment, WordPress migration, and high-quality content writing. 15+ successful projects delivered across India.",
  keywords:
    "Next.js developer India, Laravel developer India, SEO expert India, affordable web development India, WordPress migration India, website designer India, React developer India, Digital Ocean hosting India, Vercel hosting India, full-stack developer India, e-commerce development India, custom website India, Varanasi web developer",
  author: "Kamta Prasad",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  googlebot: "index, follow",

  openGraph: {
    title: "Web Developer KP | Next.js 16 & Laravel Expert in India",
    description:
      "Next.js (free hosting) and Laravel (₹400/month) development for Indian businesses. SEO-optimized, fast, modern websites. 15+ projects delivered across India.",
    url: "https://www.web-developer-kp.com",
    siteName: "Web Developer KP - Creative Solutions",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.web-developer-kp.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Creative Solutions - Web Developer KP",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Developer KP | Next.js 16 & Laravel Specialist in India",
    description:
      "Fast, SEO-ready websites using Next.js & Laravel. WordPress migration, free hosting, Indian business websites.",
    images: ["https://www.web-developer-kp.com/logo.jpg"],
    creator: "@webdeveloperkp",
  },

  alternates: {
    canonical: "https://www.web-developer-kp.com",
    languages: {
      "en-IN": "https://www.web-developer-kp.com",
    },
  },

  verification: {
    google: "your-google-verification-code",
  },

  category: "Web Development",
  classification: "Business",

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  applicationName: "Creative Solutions",

  geo: {
    region: "IN",
    placename: "Varanasi",
    position: "25.3176;82.9739",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.web-developer-kp.com/#website",
      url: "https://www.web-developer-kp.com",
      name: "Web Developer KP - Creative Solutions",
      description:
        "Professional Next.js 16 and Laravel website development services in India.",
      inLanguage: "en-IN",
      publisher: {
        "@id": "https://www.web-developer-kp.com/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.web-developer-kp.com/#organization",
      name: "Creative Solutions",
      legalName: "Creative Solutions by Kamta Prasad",
      url: "https://www.web-developer-kp.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.web-developer-kp.com/logo.jpg",
        width: 600,
        height: 600,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9996865069",
        contactType: "Customer Service",
        areaServed: "IN",
        availableLanguage: ["English"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tiwari Bhawan, Village – Gaharpur",
        addressLocality: "Varanasi",
        addressRegion: "Uttar Pradesh",
        postalCode: "221202",
        addressCountry: "IN",
      },
      email: "prasad.kamta@gmail.com",
      sameAs: ["https://wa.me/919996865069", "https://github.com/kamtaprasad"],
    },
    {
      "@type": "Person",
      "@id": "https://www.web-developer-kp.com/#person",
      name: "Kamta Prasad",
      jobTitle: "Web Developer & SEO Consultant",
      description:
        "Next.js 16 and Laravel developer specializing in SEO-optimized websites for Indian businesses.",
      knowsLanguage: ["English"],
      knowsAbout: [
        "Next.js Development",
        "Laravel Development",
        "WordPress Migration",
        "SEO Optimization",
        "Content Writing",
      ],
      email: "prasad.kamta@gmail.com",
      telephone: "+91-9996865069",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Varanasi",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      worksFor: {
        "@id": "https://www.web-developer-kp.com/#organization",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.web-developer-kp.com/#service",
      name: "Web Development Services (India)",
      description:
        "Full-stack Next.js and Laravel development with SEO-focused solutions for Indian businesses.",
      provider: {
        "@id": "https://www.web-developer-kp.com/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Next.js Website Development",
              description: "Fast, scalable websites with free Vercel hosting.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Laravel Website Development",
              description:
                "Affordable PHP hosting in India starting at ₹400/month.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "WordPress Migration",
              description:
                "Migrate your existing WordPress site to modern stacks.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO & Content Writing",
              description:
                "High-quality SEO content and optimization for Indian audiences.",
            },
          },
        ],
      },
      priceRange: "₹₹",
      telephone: "+91-9996865069",
      email: "prasad.kamta@gmail.com",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.web-developer-kp.com",
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* JSON-LD */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          strategy="beforeInteractive"
        />

        {/* Google Analytics */}
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

        {/* Tawk.to Chat Widget */}
        <Script id="tawk-to-script" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/693699c415212a1980343bbd/1jbukhaal';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

        <meta name="theme-color" content="#6366f1" />
        <meta name="format-detection" content="telephone=yes" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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
