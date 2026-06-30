import { useState } from "react";
import Container from "../../../common/Container";
import Button from "../../../common/Button";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="py-24 bg-[#0F172A]">
      <Container>
        
        <div className="max-w-3xl mx-auto text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            Get the latest updates on special offers, new menu items, and exclusive deals.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 max-w-md px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
            
            <Button type="submit">
              Subscribe Now
            </Button>
          </form>

        </div>

      </Container>
    </section>
  );
};

export default Newsletter;
