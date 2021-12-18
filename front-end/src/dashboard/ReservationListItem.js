import React from "react";
import { Link } from "react-router-dom";

const ReservationListItem = ({ reservation }) => {
  const formatTime = () => {
    const time = new Date(
      `${reservation.reservation_date} ${reservation.reservation_time}`
    );
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return time.toLocaleString("en-US", options);
  };

  return (
    <div className="card d-flex flex-row py-3 mb-3">
      <div className="mx-3">
        <p>
          <strong>Name: </strong>
          {reservation.firstName} {reservation.lastName}
        </p>
      </div>
      <div className="mx-3">
        <p>
          <strong>Number: </strong>
          {reservation.mobile_number}
        </p>
      </div>
      <div className="mx-3">
        <p>
          <strong>Time: </strong>
          {formatTime(reservation.reservation_time)}
        </p>
      </div>
      <div className="mx-3">
        <p>
          <strong>People in Party: </strong>
          {reservation.people}
        </p>
      </div>
      <div className="mx-3">
        <p data-reservation-id-status={reservation.reservation_id}>
          <strong>Status: </strong>
          {reservation.status}
        </p>
      </div>
      <div className="mx-3">
        <Link to={`/reservations/${reservation.reservation_id}/seat`}>
          <button>Seat</button>
        </Link>
      </div>
    </div>
  );
};

export default ReservationListItem;
