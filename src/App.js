import { useEffect } from "react";
import Lenis from "lenis";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Download from "./pages/Download";
import SmartAppBanner from "./components/SmartAppBanner"; 

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

    return () => lenis.destroy();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      {/* Ensure main remains clean of any overflow properties */}
      <main className="w-full relative flex flex-col min-h-screen">
        
        {/* Because it's sticky, it stays in the document flow and naturally pushes Navbar down */}
        <SmartAppBanner />
        
        <Navbar />
        <Analytics />
        
        {/* Apply overflow-x-clip safely here, away from the sticky header context */}
        <div className="flex-1 w-full overflow-x-clip">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/download" element={<Download />} />
          </Routes>
        </div>

        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;