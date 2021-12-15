import React from "react";
import { useParams } from "react-router-dom";

const SeatReservation = () => {
  const { reservationId } = useParams();

  return (
    <div>
      <h1>Seat Reservation for {reservationId}</h1>
    </div>
  );
};

export default SeatReservation;
