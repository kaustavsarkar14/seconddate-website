import Hero from "../components/Hero";
import AppPreview from "../components/AppPreview";
import Features from "../components/Features";
import CTA from "../components/CTA";
// import BlindDatePromo from "../components/BlindDatePromo";

const Home = () => {
  return (
    <>
      {/* Removed SmartAppBanner from here */}
      <Hero />
      {/* <BlindDatePromo /> */}
      <AppPreview />
      <Features />
      <CTA />
    </>
  );
};

export default Home;