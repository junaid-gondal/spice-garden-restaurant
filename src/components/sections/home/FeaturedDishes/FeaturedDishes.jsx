import Container from "../../../common/Container";
import SectionTitle from "../../../common/SectionTitle";
import FoodCard from "../../../cards/FoodCard";

import featuredDishes from "../../../../data/featuredDishes";

const FeaturedDishes = () => {
  return (
    <section className="py-24 bg-gray-50">
      
      <Container>
        
        <SectionTitle
          subtitle="Today's Special"
          title="Featured Dishes"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {featuredDishes.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
            />
          ))}
        
        </div>

      </Container>
    
    </section>
  );
};

export default FeaturedDishes;
