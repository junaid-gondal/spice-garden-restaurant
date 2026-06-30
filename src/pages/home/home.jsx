import Hero from "../../components/sections/home/Hero/Hero";
import FeaturedDishes from "../../components/sections/home/FeaturedDishes/FeaturedDishes";
import AboutPreview from "../../components/sections/home/AboutPreview/AboutPreview";
import WhyChooseUs from "../../components/sections/home/WhyChooseUs/WhyChooseUs";
import PopularMenu from "../../components/sections/home/PopularMenu/PopularMenu";
import GalleryPreview from "../../components/sections/home/GalleryPreview/GalleryPreview";
import Testimonials from "../../components/sections/home/Testimonials/Testimonials";
import Newsletter from "../../components/sections/home/Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <AboutPreview />
      <WhyChooseUs />
      <PopularMenu />
      <GalleryPreview />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Home;
