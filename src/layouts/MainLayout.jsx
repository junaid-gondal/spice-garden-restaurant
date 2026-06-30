import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/ui/ScrollProgress";
import BackToTop from "../components/ui/BackToTop";

const MainLayout = () => {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main className="pt-20">
        <Outlet />
      </main>

      <BackToTop />
      <Footer />
    </>
  );
};

export default MainLayout;