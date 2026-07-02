import ContactHero from "../../components/sections/contact/ContactHero/ContactHero";
import ContactInfo from "../../components/sections/contact/ContactInfo/ContactInfo";
import ContactForm from "../../components/sections/contact/ContactForm/ContactForm";
import ContactMap from "../../components/sections/contact/ContactMap/ContactMap";
import BusinessHours from "../../components/sections/contact/BusinessHours/BusinessHours";
import SocialLinks from "../../components/sections/contact/SocialLinks/SocialLinks";
import ContactFAQ from "../../components/sections/contact/ContactFAQ/ContactFAQ";

const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <BusinessHours />
      <SocialLinks />
      <ContactFAQ />
    </>
  );
};

export default Contact;
