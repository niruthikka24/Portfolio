import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import Skills from "../Skills";
import Achievements from "../Achievements";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MyPortfolio />
      <Skills />
      <Achievements/>  
      <ContactMe />
      <Footer />
    </>
  );
}
