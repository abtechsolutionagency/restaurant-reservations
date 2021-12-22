import React from "react";
import ReservationListItem from "./ReservationListItem";
import useQuery from "../utils/useQuery";
import { today } from "../utils/date-time";

const ReservationList = ({
  date = "",
  reservations,
  search = false,
  cancelButtonHandler,
}) => {
  const query = useQuery();

  if (!query.get("date") || query.get("date") === today()) {
    date = "Today";
  }

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
      <div className="row d-flex flex-column flex-sm-row flex-wrap mb-3">
        <div className="col col-sm-7 d-md-flex flex-column align-items-start">
          <h2>{!search && reservationHeader()}</h2>
          <h3>{search && !reservations.length && "No reservations found"}</h3>
        </div>
      </div>
      <div>
        {reservations.map(reservation => {
          return (
            <div key={reservation.reservation_id}>
              <ReservationListItem
                reservation={reservation}
                cancelButtonHandler={cancelButtonHandler}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReservationList;
