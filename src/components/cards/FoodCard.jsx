import { FaHeart, FaStar } from "react-icons/fa";
import Button from "../common/Button";

const FoodCard = ({ food }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2">
      
      <div className="overflow-hidden">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-64 object-cover hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6">
        
        <div className="flex justify-between items-center mb-3">
          
          <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
            {food.category}
          </span>

          <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer" />
        
        </div>
        
        <h3 className="text-2xl font-bold mb-2">
          {food.name}
        </h3>
        
        <div className="flex justify-between items-center mb-5">
          
          <span className="text-[#D4AF37] font-bold text-xl">
            {food.price}
          </span>

          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            {food.rating}
          </span>
        
        </div>
        
        <Button className="w-full">
          Order Now
        </Button>

      </div>
    
    </div>
  );
};

export default FoodCard;
