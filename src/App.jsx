import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Loader from "./Loader";
gsap.registerPlugin(ScrollToPlugin);

function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const navItems = [
    { label: "Home", ref: homeRef },
    { label: "Skills", ref: skillsRef },
    { label: "Projects", ref: projectsRef },
    { label: "Contact", ref: contactRef },
  ];
  const scrollToSection = (ref) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: ref.current,
      ease: "power2.out",
    });
  };

  return (
    <div>
      {/* <Loader /> */}
      <Header navItems={navItems} scrollToSection={scrollToSection} />
      <div
        ref={homeRef}
        className="min-h-screen flex items-center justify-center"
      >
        <Home />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
