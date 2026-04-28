import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomeHero from "@/components/home/HomeHero";
import HomeServices from "@/components/home/HomeServices";
import HomeHigherStandard from "@/components/home/HomeHigherStandard";
import HomeProcess from "@/components/home/HomeProcess";
import HomeAreas from "@/components/home/HomeAreas";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <HomeHero />
      <HomeServices />
      <HomeHigherStandard />
      <HomeProcess />
      <HomeAreas />
      <HomeCTA />
      <Footer />
    </>
  );
}
