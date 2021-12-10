import React from "react";

const ReservationListItem = ({
  firstName,
  lastName,
  mobile_number,
  reservation_date,
  reservation_time,
  people,
}) => {
  const formatDate = () => {
    const date = reservation_date.split("-");
    return `${date[1]}-${date[2]}-${date[0]}`;
  };

  const formatTime = () => {
    const date = new Date(`${reservation_date} ${reservation_time}`);
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleString("en-US", options);
  };

  return (
    <div className="card p-3 mb-3">
      <div>
        <p>
          Name: {firstName} {lastName} Number: {mobile_number}
        </p>
      </div>
      <div>
        <p>
          Date & Time: {formatDate(reservation_date)}{" "}
          {formatTime(reservation_time)} People in party: {people}
        </p>
      </div>
    </div>
  );
};

export default ReservationListItem;
