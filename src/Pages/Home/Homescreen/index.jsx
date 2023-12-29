import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Skills from "../Skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MyPortfolio />
      <Skills />
      <MySkills />
      <AboutMe />      
      <ContactMe />
      <Footer />
    </>
  );
}
