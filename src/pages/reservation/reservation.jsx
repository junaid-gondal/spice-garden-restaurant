import ReservationHero from "../../components/sections/reservation/ReservationHero/ReservationHero";
import ReservationInfo from "../../components/sections/reservation/ReservationInfo/ReservationInfo";
import ReservationForm from "../../components/sections/reservation/ReservationForm/ReservationForm";
import ReservationFAQ from "../../components/sections/reservation/ReservationFAQ/ReservationFAQ";

const Reservation = () => {
  return (
    <>
      <ReservationHero />
      <ReservationInfo />
      <ReservationForm />
      <ReservationFAQ />
    </>
  );
};

export default Reservation;
