import { useState } from "react";
import Container from "../../../common/Container";
import SectionTitle from "../../../common/SectionTitle";
import popularMenu from "../../../../data/popularMenu";

const categories = [
  "All",
  "Pakistani",
  "BBQ",
  "Italian",
  "Chinese",
  "Dessert",
  "Drinks",
];

const PopularMenu = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? popularMenu
      : popularMenu.filter((item) => item.category === active);

  return (
    <section className="py-24 bg-white">
      <Container>
        
        <SectionTitle
          subtitle="Popular Menu"
          title="Explore Our Menu"
        />

        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-3 rounded-full transition ${
                active === cat
                  ? "bg-[#D4AF37] text-white"
                  : "bg-gray-100 hover:bg-[#D4AF37] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {item.name}
                </h3>

                <div className="flex justify-between">
                  <span>{item.category}</span>

                  <span className="text-[#D4AF37] font-bold">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        
        </div>

      </Container>
    </section>
  );
};

export default PopularMenu;
