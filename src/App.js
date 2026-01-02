import { useEffect } from "react";
import Lenis from "lenis";

import Hero from "./components/Hero";
import AppPreview from "./components/AppPreview";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <AppPreview />
      <Features />
      <CTA />
      <Footer />
    </>
  );
};

export default App;
