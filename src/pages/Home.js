import Hero from "../components/Hero";
import AppPreview from "../components/AppPreview";
import Features from "../components/Features";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <>
      {/* Removed SmartAppBanner from here */}
      <Hero />
      <AppPreview />
      <Features />
      <CTA />
    </>
  );
};

export default Home;