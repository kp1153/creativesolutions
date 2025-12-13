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
  title: "Home | Web Developer KP - Next.js & Laravel Expert",
  description:
    "Professional Next.js 16 and Laravel website development in India. Fast, secure, SEO-friendly websites with free hosting. WordPress migration specialist.",
  keywords:
    "Next.js developer India, Laravel developer, WordPress migration, web development Varanasi",
  openGraph: {
    title: "Creative Solutions - Web Developer KP",
    description: "Modern website development using Next.js & Laravel",
    url: "https://www.web-developer-kp.com",
    images: ["/logo.jpg"],
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
        text: "Next.js websites can be hosted for free on Vercel. For Laravel websites, hosting on Digital Ocean starts at ₹400-800 per month.",
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

export default function Home() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="beforeInteractive"
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
