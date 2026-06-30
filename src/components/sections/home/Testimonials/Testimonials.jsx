import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import Container from "../../../common/Container";
import SectionTitle from "../../../common/SectionTitle";
import testimonials from "../../../../data/testimonials";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Customers Say"
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-gray-50 rounded-3xl p-8 h-full">
                
                <div className="flex gap-1 text-[#D4AF37] mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="text-gray-700 leading-7 mb-6">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  
                  <div>
                    <h4 className="font-bold text-lg">{item.name}</h4>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </Container>
    </section>
  );
};

export default Testimonials;
