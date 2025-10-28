import HeroSection from "../components/HeroSection";
import Visitors from "../components/Visitors";
import TechStack from "../components/TechStack";
import WorkProcess from "../components/WorkProcess";
import LanguageExpertise from "../components/LanguageExpertise";
import Services from "../components/Services";
import WhyUs from "../components/Why-Us";
import ContactSection from "../components/Contact";

export default function Home() {
  return (
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
  );
}
