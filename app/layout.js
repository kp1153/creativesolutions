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

        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          strategy="beforeInteractive"
        />

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

        <Script id="whatsapp-widget" strategy="afterInteractive">
          {`
            (function() {
              const link = document.createElement('a');
              link.href = 'https://wa.me/919996865069?text=नमस्ते, मुझे वेबसाइट के बारे में जानकारी चाहिए';
              link.target = '_blank';
              link.rel = 'noopener noreferrer';
              link.style.cssText = 'position:fixed;bottom:20px;left:20px;width:60px;height:60px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,0.15);z-index:9999;transition:transform 0.3s;';
              link.innerHTML = '<svg viewBox="0 0 32 32" width="32" height="32" fill="white"><path d="M16 0C7.164 0 0 7.163 0 16c0 2.826.735 5.482 2.024 7.784L.057 31.191l7.613-1.995A15.923 15.923 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.334c-2.548 0-4.948-.709-6.988-1.94l-.502-.298-5.194 1.362 1.387-5.068-.327-.52A13.265 13.265 0 012.667 16c0-7.364 5.97-13.334 13.333-13.334S29.333 8.636 29.333 16 23.363 29.334 16 29.334zm7.317-9.988c-.4-.2-2.37-1.169-2.738-1.303-.367-.133-.634-.2-.901.2-.267.4-1.034 1.303-1.268 1.57-.233.267-.467.3-.867.1-.4-.2-1.688-.622-3.215-1.984-1.189-1.06-1.991-2.368-2.224-2.768-.233-.4-.025-.617.176-.816.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.901-2.17-1.234-2.97-.325-.78-.655-.674-.901-.687-.233-.012-.5-.015-.767-.015s-.7.1-1.067.5c-.367.4-1.401 1.37-1.401 3.34s1.434 3.874 1.634 4.141c.2.267 2.822 4.308 6.837 6.043.955.413 1.701.66 2.282.845.959.305 1.832.262 2.522.159.77-.115 2.37-.969 2.704-1.905.334-.936.334-1.738.234-1.905-.1-.167-.367-.267-.767-.467z"/></svg>';
              link.onmouseover = function() { this.style.transform = 'scale(1.1)'; };
              link.onmouseout = function() { this.style.transform = 'scale(1)'; };
              document.body.appendChild(link);
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
