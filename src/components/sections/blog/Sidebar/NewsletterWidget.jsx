import { useState } from "react";
import Button from "../../../common/Button";

const NewsletterWidget = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-3xl p-6 shadow-lg text-white">
      <h3 className="text-2xl font-bold mb-2">
        Newsletter
      </h3>
      
      <p className="text-sm mb-4 text-gray-100">
        Subscribe to get latest articles and updates
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
        />
        
        <Button
          type="submit"
          className="w-full bg-white text-[#D4AF37] hover:bg-gray-100"
        >
          Subscribe
        </Button>
      </form>

      {subscribed && (
        <p className="text-sm text-green-200 mt-3 text-center">
          ✓ Subscribed successfully!
        </p>
      )}
    </div>
  );
};

export default NewsletterWidget;
