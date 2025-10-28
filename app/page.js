import HeroSection from "./components/HeroSection";
import Visitors from "./components/Visitors";
import TechStack from "./components/TechStack";
import WorkProcess from "./components/WorkProcess";
import LanguageExpertise from "./components/LanguageExpertise";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <main>
      <section id="home">
        <HeroSection />
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
        <CallToAction />
      </section>

      <Visitors />
    </main>
  );
}
