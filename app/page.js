import Script from "next/script";
import HeroSection from "../components/HeroSection";
import Visitors from "../components/Visitors";
import TechStack from "../components/TechStack";
import WorkProcess from "../components/WorkProcess";
import LanguageExpertise from "../components/LanguageExpertise";
import Services from "../components/Services";
import WhyUs from "../components/Why-Us";
import ContactSection from "../components/Contact";

export const metadata = {
  metadataBase: new URL("https://www.web-developer-kp.com"),
  title: "Web Developer KP | Next.js 16 & Laravel Expert Varanasi, India",
  description:
    "Professional Next.js 16 & Laravel developer in Varanasi. Fast, secure, SEO-optimized websites. Free Vercel hosting. WordPress migration expert. 30+ projects delivered. Contact: 9996865069",
  keywords:
    "web developer Varanasi, Next.js developer India, Laravel developer, WordPress migration, React developer, SEO expert",
  authors: [{ name: "Kamta Prasad" }],
  creator: "Kamta Prasad",
  publisher: "Creative Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.web-developer-kp.com",
    siteName: "Web Developer KP",
    title: "Web Developer KP - Next.js & Laravel Expert",
    description:
      "Professional web development in Varanasi. Next.js 16, Laravel, React. Free hosting, WordPress migration, SEO optimization.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Web Developer KP Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Developer KP | Next.js & Laravel Expert",
    description:
      "Professional web development. Next.js, Laravel, React. Free hosting.",
    images: ["/logo.jpg"],
  },
  verification: {
    google: "google3a3df6f8e66bd622",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Web Developer KP",
  url: "https://www.web-developer-kp.com",
  logo: "https://www.web-developer-kp.com/logo.jpg",
  description:
    "Professional web development services in Next.js 16 and Laravel",
  founder: {
    "@type": "Person",
    name: "Kamta Prasad",
    email: "prasad.kamta@gmail.com",
    telephone: "+91-9996865069",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tiwari Bhawan, Village Gaharpur",
    addressLocality: "Varanasi",
    addressRegion: "Uttar Pradesh",
    postalCode: "221202",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9996865069",
    contactType: "Customer Service",
    email: "prasad.kamta@gmail.com",
    availableLanguage: ["English", "Hindi", "Urdu"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Development",
  provider: {
    "@type": "Organization",
    name: "Web Developer KP",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Next.js Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Laravel Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "WordPress Migration",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What technologies do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in Next.js 16 and Laravel with React, Tailwind CSS, MongoDB, and MySQL.",
      },
    },
    {
      "@type": "Question",
      name: "How much does hosting cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Next.js websites can be hosted free on Vercel. Laravel hosting starts at Rs 400-800/month on Digital Ocean.",
      },
    },
    {
      "@type": "Question",
      name: "Can you migrate WordPress sites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we specialize in WordPress migration to Next.js or Laravel.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />

      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        strategy="afterInteractive"
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="why-us">
          <WhyUs />
        </section>

        <section id="tech-stack">
          <TechStack />
        </section>

        <section id="work-process">
          <WorkProcess />
        </section>

        <section id="language">
          <LanguageExpertise />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        <Visitors />
      </main>
    </>
  );
}