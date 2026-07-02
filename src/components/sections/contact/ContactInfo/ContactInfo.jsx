import Container from "../../../common/Container";
import ContactCard from "./ContactCard";
import contactInfo from "../../../../data/contactInfo";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <ContactCard key={info.id} info={info} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ContactInfo;
