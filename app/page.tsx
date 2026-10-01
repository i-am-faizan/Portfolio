import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Stats from "@/components/sections/Stats";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import GithubActivity from "@/components/sections/GithubActivity";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-surface">
      <div className="relative w-full max-w-full overflow-x-hidden">
        <Navbar />
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Stats />
        <Projects />
        <Experience />
        <Education />
        <GithubActivity />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
