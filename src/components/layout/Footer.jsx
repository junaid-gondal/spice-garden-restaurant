import Container from "../common/Container";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white py-10 mt-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Spice <span className="text-[#D4AF37]">Garden</span>
          </h2>

          <p className="mt-4 text-gray-300">
            Premium Restaurant Experience
          </p>

          <p className="mt-6 text-sm text-gray-400">
            © 2026 Spice Garden Restaurant. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
