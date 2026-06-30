import Container from "../../../common/Container";
import SectionTitle from "../../../common/SectionTitle";
import ChefCard from "./ChefCard";
import chefs from "../../../../data/chefs";

const Chefs = () => {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        
        <SectionTitle
          subtitle="Expert Team"
          title="Meet Our Master Chefs"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.map((chef, index) => (
            <ChefCard key={chef.id} chef={chef} index={index} />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Chefs;
