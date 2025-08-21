import HeroSection from "./components/HeroSection";
import Visitors from "./components/Visitors";
import TechStack from "./components/TechStack";
import WorkProcess from "./components/WorkProcess";
import LanguageExpertise from "./components/LanguageExpertise";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TechStack />
      <WorkProcess />
      <LanguageExpertise />
      <CallToAction />
      <Visitors />
    </main>
  );
}
