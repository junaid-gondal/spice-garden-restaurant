import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home/home";
import Menu from "../pages/menu/menu";
import About from "../pages/about/about";
import Gallery from "../pages/gallery/gallery";
import Blog from "../pages/blog/blog";
import Contact from "../pages/contact/contact";
import Reservation from "../pages/reservation/reservation";
import NotFound from "../pages/notfound/notfound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;