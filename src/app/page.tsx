import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import UrbanValues from "@/components/UrbanValues";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <Philosophy />
      <UrbanValues />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
