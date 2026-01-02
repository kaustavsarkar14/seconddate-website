import { useEffect } from "react";
import Lenis from "lenis";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// Import other components as needed
// import AppPreview from "./components/AppPreview";
// import Features from "./components/Features";
// import CTA from "./components/CTA";
// import Footer from "./components/Footer";

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
    <main className="w-full relative">
      <Navbar />
      <Hero />
      {/* <AppPreview /> */}
      {/* <Features /> */}
      {/* <CTA /> */}
      {/* <Footer /> */}
    </main>
  );
};

export default App;