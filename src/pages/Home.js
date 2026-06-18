import Hero from "../components/Hero";
import AppPreview from "../components/AppPreview";
import Features from "../components/Features";
import CTA from "../components/CTA";
import CardSwiper from "../components/CardSwiper";
import StateShowCase from "../components/StateShowCase.js";
// import BlindDatePromo from "../components/BlindDatePromo";

const Home = () => {
  return (
    <>
      {/* Removed SmartAppBanner from here */}
      <Hero />
      <CardSwiper/>
      {/* <BlindDatePromo /> */}
      <AppPreview />
      <StateShowCase/>
      <Features />
      <CTA />
    </>
  );
};

export default Home;