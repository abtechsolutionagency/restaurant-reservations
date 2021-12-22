import React from "react";
import { Link } from "react-router-dom";
import "./ReservationListItem.css";

const ReservationListItem = ({ reservation, cancelButtonClickHandler }) => {
  const reservation_id = reservation.reservation_id;

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
    <div className="card d-flex flex-row flex-wrap justify-content-between p-3 p-md-4 mb-1">
      <div className="col-12 col-md-6 col-xl-8 d-flex flex-row flex-wrap">
        <div className="d-flex align-items-xl-center col-5 col-sm-4 col-xl-2 pb-2 p-xl-0">
          <p className="p-bold">
            <i class="bi bi-clock me-2"></i>
            {formatTime(reservation.reservation_time)}
          </p>
        </div>
        <div className="d-flex align-items-xl-center col-7 col-sm-8 col-xl-4">
          <p>
            <i class="bi bi-person me-2"></i>
            {reservation.first_name} {reservation.last_name} (
            {reservation.people})
          </p>
        </div>
        <div className="d-flex align-items-xl-center col-5 col-sm-4 col-xl-3 order-xl-3">
          <p data-reservation-id-status={reservation_id}>
            <i class="bi bi-clipboard-check me-2"></i>
            {reservation.status[0].toUpperCase() +
              reservation.status.substring(1)}
          </p>
        </div>
        <div className="d-flex align-items-xl-center col-7 col-sm-8 col-xl-3">
          <p>
            <i class="bi bi-telephone me-2"></i>
            {reservation.mobile_number}
          </p>
        </div>
      </div>

      {reservation.status === "booked" && (
        <div className="col-12 col-md-6 col-xl-4 d-flex flex-row align-items-start align-items-md-center mt-3 mt-md-0">
          <button
            type="button"
            name="cancel"
            className="btn btn-text cancel col-4 col-sm-3 col-md-4 text-nowrap pe-2 pe-md-1"
            data-reservation-id-cancel={reservation.reservation_id}
            onClick={() => cancelButtonClickHandler(reservation_id)}
          >
            Cancel
          </button>
          <Link
            to={`/reservations/${reservation_id}/edit`}
            className="d-flex col-4 col-sm-4  px-2 px-md-1"
          >
            <button
              type="button"
              name="edit"
              className="btn btn-outline-primary flex-grow-1"
            >
              Edit
            </button>
          </Link>
          <Link
            to={`/reservations/${reservation_id}/seat`}
            className="d-flex col-4 col-sm-5 col-md-4 ps-2 ps-md-1"
          >
            <button
              type="button"
              name="seat"
              className="btn btn-primary flex-grow-1"
            >
              Seat
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ReservationListItem;
