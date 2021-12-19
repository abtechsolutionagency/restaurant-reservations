import React from "react";
import ReservationListItem from "./ReservationListItem";

const ReservationList = ({ date, reservations }) => {
  const reservationHeader = () => {
    if (!reservations.length) {
      return `No Reservations for ${date}`;
    }
    if (reservations.length === 1) {
      return `1 Reservation for ${date}`;
    }
    return `${reservations.length} Reservations for ${date}`;
  };

  return (
    <div>
      <div className="d-md-flex mb-3">
        <h2>{reservationHeader()}</h2>
      </div>
      {reservations.map(reservation => {
        return (
          <div key={reservation.reservation_id}>
            <ReservationListItem reservation={reservation} />
          </div>
        );
      })}
    </div>
  );
};

export default ReservationList;
