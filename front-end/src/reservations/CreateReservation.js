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
    status: "booked",
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
    const abortController = new AbortController();
    try {
      await createReservation(reservation, abortController.signal);
      history.push(`/dashboard?date=${reservation.reservation_date}`);
    } catch (error) {
      setError(error);
    }
    return () => abortController.abort();
  };

  return (
    <div className="container">
      <h1>Create a new reservation</h1>
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
    </div>
  );
};

export default CreateReservation;
