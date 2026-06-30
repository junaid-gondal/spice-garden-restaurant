import Button from "../../../common/Button";
import Container from "../../../common/Container";
import Stats from "./Stats";

const Hero = () => {
  return (
    <>
      <section
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <Container>
          <div className="relative z-10 max-w-2xl text-white">

            <p className="uppercase tracking-[5px] text-[#D4AF37] mb-4">
              Welcome To
            </p>

            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Experience Fine Dining
            </h1>

            <p className="text-lg text-gray-300 mb-10 leading-8">
              Discover unforgettable dining with authentic Pakistani,
              Chinese, Italian, BBQ and Fast Food prepared by
              world-class chefs.
            </p>

            <div className="flex gap-5 flex-wrap">
              <Button>
                Reserve Table
              </Button>

              <Button className="bg-white text-black hover:bg-gray-200">
                Explore Menu
              </Button>
            </div>

          </div>
        </Container>

        <Stats />

      </section>
    </>
  );
};

export default Hero;
