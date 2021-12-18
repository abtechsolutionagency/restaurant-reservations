import React from "react";
import { Link } from "react-router-dom";

const ReservationListItem = ({
  reservation_id,
  firstName,
  lastName,
  mobile_number,
  reservation_date,
  reservation_time,
  people,
}) => {
  const formatTime = () => {
    const time = new Date(`${reservation_date} ${reservation_time}`);
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
          {firstName} {lastName}
        </p>
      </div>
      <div className="mx-3">
        <p>
          <strong>Number: </strong>
          {mobile_number}
        </p>
      </div>
      <div className="mx-3">
        <p>
          <strong>Time: </strong>
          {formatTime(reservation_time)}
        </p>
      </div>
      <div className="mx-3">
        <p>
          <strong>People in Party: </strong>
          {people}
        </p>
      </div>
      <div className="mx-3">
        <Link to={`/reservations/${reservation_id}/seat`}>
          <button>Seat</button>
        </Link>
      </div>
    </div>
  );
};

export default ReservationListItem;
