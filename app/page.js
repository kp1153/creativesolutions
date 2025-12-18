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
  title: "Web Developer KP | Next.js & Laravel Expert in India",
  description:
    "Professional Next.js and Laravel web development services in India. Fast, secure, SEO-optimized websites with free hosting options.",
  keywords:
    "Next.js developer, Laravel developer, web development India, WordPress migration, React developer",
  openGraph: {
    title: "Web Developer KP - Modern Web Development",
    description: "Professional Next.js and Laravel development services",
    url: "https://www.web-developer-kp.com",
    images: ["/logo.jpg"],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.web-developer-kp.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Web Developer KP",
  url: "https://www.web-developer-kp.com",
  logo: "https://www.web-developer-kp.com/logo.jpg",
  description:
    "Professional web development services specializing in Next.js and Laravel",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Varanasi",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    availableLanguage: ["English", "Hindi", "Urdu"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What technologies do you use for web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in Next.js 16 and Laravel for building modern, fast, and secure websites. We also work with React, Tailwind CSS, MongoDB, and MySQL.",
      },
    },
    {
      "@type": "Question",
      name: "How much does hosting cost for Next.js websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Next.js websites can be hosted for free on Vercel. For Laravel websites, hosting on Digital Ocean starts at Rs 400-800 per month.",
      },
    },
    {
      "@type": "Question",
      name: "Can you migrate my WordPress website to Next.js or Laravel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we specialize in WordPress migration to modern technologies. Laravel is especially recommended for WordPress sites with large amounts of data, as both are PHP-based.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide content writing services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide high-quality content writing and translation services in English, Hindi, and Urdu.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project timelines vary based on complexity. A simple website takes 1-2 weeks, while complex applications may take 4-8 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What is your service area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve clients across India, with a base in Varanasi, Uttar Pradesh. We work remotely with clients nationwide.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.web-developer-kp.com",
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
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />

      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />

      <main className="overflow-x-hidden">
        <section id="home" aria-label="Hero Section">
          <HeroSection />
        </section>

        <section id="services" aria-label="Our Services">
          <Services />
        </section>

        <section id="why-us" aria-label="Why Choose Us">
          <WhyUs />
        </section>

        <section id="tech-stack" aria-label="Technology Stack">
          <TechStack />
        </section>

        <section id="work-process" aria-label="Work Process">
          <WorkProcess />
        </section>

        <section id="language" aria-label="Language Expertise">
          <LanguageExpertise />
        </section>

        <section id="contact" aria-label="Contact Us">
          <ContactSection />
        </section>

        <Visitors />
      </main>
    </>
  );
}
