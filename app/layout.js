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
  title: "Web Developer KP | Next.js 16 & Laravel Specialist in Varanasi",
  description:
    "Professional website development with Next.js 16 and Laravel by Kamta Prasad. Free Vercel hosting, affordable Digital Ocean hosting (₹400/month), WordPress migration expert. Content writing in Hindi-English-Urdu. 15+ successful projects across India including e-commerce, hospitals, news portals.",
  keywords:
    "Next.js developer Varanasi, Laravel developer India, WordPress migration specialist, web development Varanasi, Hindi content writer, Urdu translator, website design India, free website hosting, Digital Ocean hosting, PHP developer, React developer, Tailwind CSS expert, MongoDB developer, SEO expert India, affordable web development, custom website design, e-commerce development, hospital website development, news portal development",
  author: "Kamta Prasad",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  googlebot: "index, follow",

  // Open Graph Tags for Social Media
  openGraph: {
    title: "Web Developer KP | Next.js 16 & Laravel Expert | Varanasi",
    description:
      "वर्डप्रेस से छुटकारा पाएं। Next.js (Free Hosting) अथवा Laravel (₹400/माह) दोनों ही के लिए किफायती होस्टिंग की व्यवस्था। हिंदी-अंग्रेजी-उर्दू में Content Writing। 15+ सफल Projects।",
    url: "https://www.web-developer-kp.com",
    siteName: "Web Developer KP - Creative Solutions",
    type: "website",
    locale: "hi_IN",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "https://www.web-developer-kp.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Creative Solutions - Web Developer KP",
      },
    ],
  },

  // Twitter Card Tags
  twitter: {
    card: "summary_large_image",
    title: "Web Developer KP | Next.js 16 & Laravel Specialist",
    description:
      "Professional web development with Next.js & Laravel. Free hosting, WordPress migration, Hindi-English-Urdu content writing. 15+ projects delivered.",
    images: ["https://www.web-developer-kp.com/logo.jpg"],
    creator: "@webdeveloperkp",
  },

  // Additional Meta Tags
  alternates: {
    canonical: "https://www.web-developer-kp.com",
    languages: {
      "hi-IN": "https://www.web-developer-kp.com",
      "en-US": "https://www.web-developer-kp.com/en",
    },
  },

  // Verification Tags
  verification: {
    google: "your-google-verification-code", // Replace with actual code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Additional metadata
  category: "Web Development",
  classification: "Business",

  // Mobile optimization
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  // App-specific
  applicationName: "Creative Solutions",

  // Geo tags for local SEO
  geo: {
    region: "IN-UP",
    placename: "Varanasi",
    position: "25.3176;82.9739",
  },
};

// JSON-LD Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.web-developer-kp.com/#website",
      url: "https://www.web-developer-kp.com",
      name: "Web Developer KP - Creative Solutions",
      description:
        "Professional Next.js 16 and Laravel web development services in Varanasi, India",
      inLanguage: "hi-IN",
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
        availableLanguage: ["Hindi", "English", "Urdu"],
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
      sameAs: [
        "https://wa.me/919996865069",
        "https://github.com/kamtaprasad", // Add your actual social profiles
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.web-developer-kp.com/#person",
      name: "Kamta Prasad",
      jobTitle: "Web Developer & Content Writer",
      description:
        "Expert Next.js 16 and Laravel developer with decades of Hindi journalism experience and professional translation skills",
      knowsLanguage: ["Hindi", "English", "Urdu"],
      knowsAbout: [
        "Next.js Development",
        "Laravel Development",
        "WordPress Migration",
        "Content Writing",
        "Hindi Translation",
        "SEO Optimization",
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
      name: "Web Development Services",
      description:
        "Professional Next.js 16 and Laravel web development with affordable hosting solutions",
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
              description: "Modern, fast websites with free Vercel hosting",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Laravel Website Development",
              description:
                "PHP-based websites with affordable hosting starting at ₹400/month",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "WordPress Migration",
              description: "Migrate your WordPress site to modern frameworks",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Content Writing & Translation",
              description: "Professional content in Hindi, English, and Urdu",
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
    <html lang="hi">
      <head>
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* JSON-LD Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          strategy="beforeInteractive"
        />

        {/* Google Analytics Script - G-BR086CF3CY */}
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

        {/* Additional meta tags */}
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
