import React, { useState } from "react";
import ReservationForm from "./ReservationForm";

const CreateReservation = () => {
  const [reservation, setReservation] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: 1,
  });

  const handleFirstNameChange = event => {
    setReservation({ ...reservation, first_name: event.target.value });
  };

  const handleLastNameChange = event => {
    setReservation({ ...reservation, last_name: event.target.value });
  };

  const handleMobileNumberChange = event => {
    setReservation({ ...reservation, mobile_number: event.target.value });
  };

  const handleReservationDateChange = event => {
    setReservation({ ...reservation, reservation_date: event.target.value });
  };

  const handleReservationTimeChange = event => {
    setReservation({ ...reservation, reservation_time: event.target.value });
  };

  const handlePeopleNumberChange = event => {
    setReservation({ ...reservation, people: Math.max(1, event.target.value) });
  };

  return (
    <>
      <ReservationForm
        reservation={reservation}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        handleMobileNumberChange={handleMobileNumberChange}
        handleReservationDateChange={handleReservationDateChange}
        handleReservationTimeChange={handleReservationTimeChange}
        handlePeopleNumberChange={handlePeopleNumberChange}
      />
    </>
  );
};

export default CreateReservation;
