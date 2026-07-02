import Container from "../../../common/Container";
import SectionTitle from "../../../common/SectionTitle";
import FAQItem from "../../about/FAQ/FAQItem";

const reservationFAQ = [
  {
    id: 1,
    question: "Can I cancel my reservation?",
    answer: "Yes, you can cancel your reservation up to 2 hours before your scheduled time. Please contact us via phone or email to cancel.",
  },
  {
    id: 2,
    question: "Is there a deposit required?",
    answer: "For parties of 8 or more guests, we require a deposit. For smaller groups, no deposit is necessary.",
  },
  {
    id: 3,
    question: "Can I modify my booking?",
    answer: "Absolutely! You can modify your reservation up to 4 hours before your scheduled time by contacting us directly.",
  },
  {
    id: 4,
    question: "Are walk-ins accepted?",
    answer: "Yes, we accept walk-ins based on availability. However, we recommend making a reservation to guarantee your table.",
  },
];

const ReservationFAQ = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        
        <SectionTitle
          subtitle="Common Questions"
          title="Reservation FAQ"
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {reservationFAQ.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default ReservationFAQ;
