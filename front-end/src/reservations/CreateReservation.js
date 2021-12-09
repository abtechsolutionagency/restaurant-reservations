import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ReservationForm from "./ReservationForm";
import { createReservation } from "../utils/api";

const CreateReservation = () => {
  const history = useHistory();

  const [reservation, setReservation] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: 1,
  });
  const [error, setError] = useState(null);

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

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await createReservation(reservation);
      history.push("/");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <ReservationForm
        reservation={reservation}
        error={error}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        handleMobileNumberChange={handleMobileNumberChange}
        handleReservationDateChange={handleReservationDateChange}
        handleReservationTimeChange={handleReservationTimeChange}
        handlePeopleNumberChange={handlePeopleNumberChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default CreateReservation;
