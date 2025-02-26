import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ReservationListItem.css";
import { Tooltip } from "bootstrap";

/**
 * Defines a reservation returned from the database
 * @param reservation
 * A reservation object
 * @param cancelButtonHandler
 * Click handler function for cancel button
 * @param hasTables
 * Boolean to determine if there are any tables to seat guests
 * @returns {JSX.Element}
 */


const ReservationListItem = ({
  reservation,
  cancelButtonHandler,
  hasTables,
}) => {
  useEffect(() => {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltip) => {
      new Tooltip(tooltip);
    });
  }, []);

  const truncateText = (text, length) => {
    return  text?.length > length ? text?.substring(0, length) + "..." : text;
  };
  const reservation_id = reservation.reservation_id;

  const formatTime = () => {
    const time = new Date(`1/1/00 ${reservation.reservation_time}`);
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return time.toLocaleString("en-US", options);
  };

  if (reservation.status === "booked") {
    return (
      <div className="card d-flex flex-row flex-nowrap align-items-center justify-content-between p-3 p-md-4 mb-1 gap-3">
      <div className="d-flex flex-row flex-nowrap align-items-center gap-3">
        <p className="p-bold">
          <i className="bi bi-clock me-2"></i>
          {formatTime(reservation.reservation_time)}
        </p>
        <p>
          <i className="bi bi-person me-2"></i>
          {reservation.first_name} {reservation.last_name}
        </p>
        <p>
          <i className="bi bi-people me-2"></i> ({reservation.people})
        </p>
        <p data-reservation-id-status={reservation.reservation_id}>
          <i className="bi bi-clipboard-check me-2"></i>
          {reservation.status[0].toUpperCase() + reservation.status.substring(1)}
        </p>
        <p>
          <i className="bi bi-telephone me-2"></i> {reservation.mobile_number || "N/A"}
        </p>
        <p>
          <i className="bi bi-text-left me-2"></i>
          <span
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={reservation.observation}
            // className="text-truncate d-inline-block"
            style={{ maxWidth: "150px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", cursor: "pointer" }}
          >
            {truncateText(reservation.observation, 15)}
          </span>
        </p>
      </div>

      <div className="d-flex flex-row flex-nowrap align-items-center gap-2">
        <button
          type="button"
          name="cancel"
          className="btn btn-text cancel flex-grow-1 text-nowrap"
          data-reservation-id-cancel={reservation.reservation_id}
          onClick={() => cancelButtonHandler(reservation.reservation_id)}
        >
          Cancel
        </button>
        <Link to={`/reservations/${reservation.reservation_id}/edit`} className="d-flex">
          <button type="button" name="edit" className="btn btn-outline-primary flex-grow-1">
            Edit
          </button>
        </Link>
        {hasTables && (
          <Link to={`/reservations/${reservation.reservation_id}/seat`} className="d-flex">
            <button type="button" name="seat" className="btn btn-primary flex-grow-1">
              Seat
            </button>
          </Link>
        )}
      </div>
    </div>

    );
  }
  return (
    <div className="card d-flex flex-row flex-nowrap align-items-center justify-content-between p-3 p-md-4 mb-1 gap-3">
  {/* Left Side: Reservation Details */}
  <div className="d-flex flex-row flex-nowrap align-items-center gap-3 flex-grow-1">
    <p className="p-bold">
      <i className="bi bi-clock me-2"></i>
      {formatTime(reservation.reservation_time)}
    </p>
    <p>
      <i className="bi bi-person me-2"></i>
      {reservation.first_name} {reservation.last_name}
    </p>
    <p>
      <i className="bi bi-people me-2"></i> ({reservation.people})
    </p>
    <p>
      <i className="bi bi-grid-3x3-gap me-2"></i> {reservation?.table_name}
    </p>
    <p>
      <i className="bi bi-telephone me-2"></i>
      {reservation.mobile_number || "N/A"}
    </p>
    <p>
      <i className="bi bi-text-left me-2"></i>
      <span
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title={reservation.observation}
        style={{
          maxWidth: "150px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          cursor: "pointer"
        }}
      >
        {truncateText(reservation.observation, 15)}
      </span>
    </p>
  </div>

  {/* Status at the End */}
  <div className="d-flex align-items-center">
    <p data-reservation-id-status={reservation_id} className="ms-3">
      <i className="bi bi-clipboard-check me-2"></i>
      {reservation.status[0].toUpperCase() + reservation.status.substring(1)}
    </p>
  </div>
</div>

  );
};

export default ReservationListItem;
