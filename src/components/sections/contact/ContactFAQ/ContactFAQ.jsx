import Container from "../../../common/Container";
import SectionTitle from "../../../common/SectionTitle";
import FAQItem from "../../about/FAQ/FAQItem";
import contactFaq from "../../../../data/contactFaq";

const ContactFAQ = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        
        <SectionTitle
          subtitle="Common Questions"
          title="Contact FAQ"
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {contactFaq.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default ContactFAQ;
