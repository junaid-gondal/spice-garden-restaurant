import AboutHero from "../../components/sections/about/AboutHero/AboutHero";
import Story from "../../components/sections/about/Story/Story";
import Timeline from "../../components/sections/about/Timeline/Timeline";
import MissionVision from "../../components/sections/about/MissionVision/MissionVision";
import Chefs from "../../components/sections/about/Chefs/Chefs";
import Awards from "../../components/sections/about/Awards/Awards";
import Statistics from "../../components/sections/about/Statistics/Statistics";
import RestaurantTour from "../../components/sections/about/RestaurantTour/RestaurantTour";
import FAQ from "../../components/sections/about/FAQ/FAQ";

const About = () => {
  return (
    <>
      <AboutHero />
      <Story />
      <Timeline />
      <MissionVision />
      <Chefs />
      <Awards />
      <Statistics />
      <RestaurantTour />
      <FAQ />
    </>
  );
};

export default About;
