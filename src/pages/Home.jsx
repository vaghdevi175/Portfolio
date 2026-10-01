import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Work from "../components/Work";
import About from "../components/About";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Achievements from "../components/Achievements";
import Volunteering from "../components/Volunteering";
import Contact from "../components/Contact";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (!id) return;
    const t = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
    return () => clearTimeout(t);
  }, [location.state]);

  return (
    <>
      <Hero />
      <Work />
      <About />
      <Skills />
      <Certifications />
      <Achievements />
      <Volunteering />
      <Contact />
    </>
  );
}
