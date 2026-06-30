import Container from "../../../common/Container";
import Button from "../../../common/Button";

const AboutPreview = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1000"
              alt="Restaurant"
              className="rounded-3xl w-full h-[600px] object-cover"
            />

            <div className="absolute -bottom-8 -right-8 bg-[#D4AF37] text-white p-8 rounded-3xl shadow-xl">
              <h2 className="text-4xl font-bold">15+</h2>
              <p>Years Experience</p>
            </div>
          </div>

          <div>
            
            <p className="text-[#D4AF37] uppercase tracking-[4px] mb-3 font-semibold">
              About Us
            </p>

            <h2 className="text-5xl font-bold text-[#0F172A] mb-6">
              A Luxury Dining Experience Since 2010
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              Spice Garden Restaurant offers an unforgettable dining experience
              with authentic Pakistani, Chinese, Italian, BBQ and Fast Food.
              Every dish is crafted with fresh ingredients by our experienced chefs.
            </p>

            <Button>
              Read More
            </Button>
          
          </div>
        
        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;
