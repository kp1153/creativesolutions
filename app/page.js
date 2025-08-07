import HeroSection from "./components/HeroSection";
import TechStack from "./components/TechStack"; // Add this line
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
    </main>
  );
}
