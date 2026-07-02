import Hero from "../../components/sections/home/Hero/Hero";
import FeaturedDishes from "../../components/sections/home/FeaturedDishes/FeaturedDishes";
import AboutPreview from "../../components/sections/home/AboutPreview/AboutPreview";
import WhyChooseUs from "../../components/sections/home/WhyChooseUs/WhyChooseUs";
import PopularMenu from "../../components/sections/home/PopularMenu/PopularMenu";
import GalleryPreview from "../../components/sections/home/GalleryPreview/GalleryPreview";
import Testimonials from "../../components/sections/home/Testimonials/Testimonials";
import Newsletter from "../../components/sections/home/Newsletter/Newsletter";
import SEO from "../../components/common/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Spice Garden | Premium Multi-Cuisine Restaurant"
        description="Experience fine dining with authentic Pakistani, Chinese, Italian, BBQ and Fast Food. 15+ years of excellence, 5 branches, expert chefs."
        keywords="restaurant, fine dining, Pakistani food, Chinese cuisine, Italian food, BBQ, fast food"
      />
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
