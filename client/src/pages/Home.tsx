import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Benefits from "@/components/home/Benefits";
import ServiceHighlights from "@/components/home/ServiceHighlights";
import AboutSection from "@/components/home/AboutSection";
import CaseStudyHighlight from "@/components/home/CaseStudyHighlight";
import Testimonials from "@/components/home/Testimonials";
import BlogHighlights from "@/components/home/BlogHighlights";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import { Helmet } from "react-helmet";
import SupportedLivingHighlights from "@/components/home/SupportedLivingHighlights";
import AccreditationLogos from "@/components/home/AccreditationLogos";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Vitality Community Care - Empowering Lives Through Support</title>
        <meta name="description" content="Vitality Community Care provides personalized support services, including NDIS supports, to empower individuals with disabilities across communities." />
        <meta property="og:title" content="Vitality Community Care - Empowering Lives Through Support" />
        <meta property="og:description" content="Personalized disability support services delivered with care in your community." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <ServiceHighlights />
      <SupportedLivingHighlights />
      <Features />
      <AboutSection />
      {/* <CaseStudyHighlight /> */}
      <Testimonials />
      <Benefits />
      <AccreditationLogos />
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;
