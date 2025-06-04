

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeatureCard";
import TestimonialsSection from "../components/TestimonialCard";
import PricingSection from "../components/PricingCard";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import SolutionsSection from "../components/SolutionSection";
import AboutPage from "../components/AboutPage";
import MissionPage from "../components/MissionPage";
import ChallengePage from "../components/ChallengePage";
import Faq from "../components/Faq";
import ContactUs from "../components/ContactUS";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <AboutPage />
      <MissionPage />
      <ChallengePage />
      <Faq />
      <ContactUs />
    </>
  );
};

export default Home;
