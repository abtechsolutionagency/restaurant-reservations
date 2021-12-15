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
    <div className="card p-3 mb-3">
      <div>
        <p>
          <strong>Name: </strong>
          {firstName} {lastName}
        </p>
      </div>
      <div>
        <p>
          <strong>Number: </strong>
          {mobile_number}
        </p>
      </div>
      <div>
        <p>
          <strong>Time: </strong>
          {formatTime(reservation_time)}
        </p>
      </div>
      <div>
        <p>
          <strong>People in Party: </strong>
          {people}
        </p>
      </div>
      <div>
        <Link to={`/reservations/${reservation_id}/seat`}>
          <button>Seat</button>
        </Link>
      </div>
    </div>
  );
};

export default ReservationListItem;
