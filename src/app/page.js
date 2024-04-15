import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import  Procard  from "./components/procard";

export default function Home() {
  return (
    //  bg-[#161748]
    <main className="h-full w-full bg-[#12121212]">
      <NavBar />
      <div className="container mx-auto px-12 py-12">
        <HeroSection />
        <AboutSection />
        <Projects/>
        <Contact/>
      </div>

    </main>
  );
}
