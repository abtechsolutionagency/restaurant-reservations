import React from "react";
import ReservationListItem from "./ReservationListItem";
import "./ReservationList.css";

const ReservationList = ({
  date = "",
  reservations,
  search = false,
  cancelButtonClickHandler,
  previousDayButtonHandler,
  todayButtonHandler,
  nextDayButtonHandler,
}) => {
  const reservationHeader = () => {
    if (!reservations.length) {
      return `No Reservations for ${date}`;
    }
    if (reservations.length === 1) {
      return `1 Reservation for ${date}`;
    }
    return `${reservations.length} Reservations for ${date}`;
  };

  const showSelectDateButtons = () => {
    return (
      <div className="date-buttons d-flex flex-row">
        <button
          type="button"
          className="btn btn-outline-primary flex-sm-grow-0 flex-grow-1"
          onClick={() => previousDayButtonHandler()}
        >
          Prev
        </button>
        <button
          type="button"
          className="btn btn-outline-primary flex-sm-grow-0 flex-grow-1"
          onClick={() => todayButtonHandler()}
        >
          Today
        </button>
        <button
          type="button"
          className="btn btn-outline-primary flex-sm-grow-0 flex-grow-1"
          onClick={() => nextDayButtonHandler()}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="reservation-container p-3">
      <div className="row d-flex flex-column flex-sm-row flex-wrap">
        <div className="col col-sm-7 d-md-flex flex-column align-items-start mb-2">
          <h2>{!search && reservationHeader()}</h2>
          {!search && showSelectDateButtons()}
          <h3>{search && !reservations.length && "No reservations found"}</h3>
        </div>
        <div className="col col-sm-5 d-flex justify-content-sm-end align-items-sm-start mt-2 mt-sm-0">
          <button className="btn btn-primary flex-fill flex-sm-grow-0">
            <i class="bi bi-plus-square me-2"></i>New Reservation
          </button>
        </div>
      </div>

      {reservations.map(reservation => {
        return (
          <div key={reservation.reservation_id}>
            <ReservationListItem
              reservation={reservation}
              cancelButtonClickHandler={cancelButtonClickHandler}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ReservationList;
