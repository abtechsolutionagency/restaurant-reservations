import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";
import { getReservation, updateReservation } from "../utils/api";
import ReservationForm from "./ReservationForm";

const EditReservation = () => {
  const history = useHistory();
  const { reservation_id } = useParams();
  const [reservation, setReservation] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: 1,
    status: "",
  });
  const [error, setError] = useState(null);

  useEffect(loadReservation, [reservation_id]);

  function formatDate(reservation) {
    return {
      ...reservation,
      reservation_date: reservation.reservation_date.split("T")[0],
    };
  }

  function formatTime(reservation) {
    return {
      ...reservation,
      reservation_time: `${reservation.reservation_time.split(":")[0]}:${
        reservation.reservation_time.split(":")[1]
      }`,
    };
  }

  function loadReservation() {
    const abortController = new AbortController();
    setError(null);
    getReservation(reservation_id, abortController.signal)
      .then(formatDate)
      .then(formatTime)
      .then(setReservation)
      .catch(setError);
    return () => abortController.abort();
  }

  const handleFirstNameChange = event => {
    setReservation({ ...reservation, first_name: event.target.value });
  };

  const handleLastNameChange = event => {
    setReservation({ ...reservation, last_name: event.target.value });
  };

  const handleMobileNumberChange = event => {
    setReservation({
      ...reservation,
      mobile_number: event.target.value,
    });
  };

  const handleReservationDateChange = event => {
    setReservation({
      ...reservation,
      reservation_date: event.target.value,
    });
  };

  const handleReservationTimeChange = event => {
    setReservation({
      ...reservation,
      reservation_time: event.target.value,
    });
  };

  const handlePeopleNumberChange = event => {
    setReservation({
      ...reservation,
      people: Math.max(1, event.target.value),
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const abortController = new AbortController();
    try {
      await updateReservation(
        reservation_id,
        reservation,
        abortController.signal
      );
      history.push(`/dashboard?date=${reservation.reservation_date}`);
    } catch (error) {
      setError(error);
    }
    return () => abortController.abort();
  };

  return (
    <div className="container">
      <h1>Edit Reservation</h1>
      <ErrorAlert error={error} />
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

export default EditReservation;
