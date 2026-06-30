import Container from "../../../common/Container";
import SectionTitle from "../../../common/SectionTitle";
import FAQItem from "./FAQItem";
import faq from "../../../../data/faq";

const FAQ = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        
        <SectionTitle
          subtitle="Common Questions"
          title="Frequently Asked Questions"
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {faq.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default FAQ;
