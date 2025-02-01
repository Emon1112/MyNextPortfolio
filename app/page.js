import AboutSection from "./Components/About/AboutSection";
import HeroSection from "./Components/HomeComponents/HeroSection";
import ProjectsSection from "./Pages/Project/page";

export default function Home() {
  return (
    <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <AboutSection />
    </div>
  );
}