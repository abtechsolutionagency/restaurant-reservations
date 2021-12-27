import React from "react";
import LoadingAnimation from "./LoadingAnimation";
import ReservationListItem from "./ReservationListItem";

const ReservationList = ({
  reservations,
  cancelButtonHandler,
  reservationsLoading,
  search = false,
  searchLoading = false,
  initialState = true,
}) => {
  const displayLoading = () => {
    return <LoadingAnimation />;
  };

  const displyReservationList = () => {
    return reservations.length ? (
      reservations.map(reservation => {
        return (
          <div key={reservation.reservation_id}>
            <ReservationListItem
              reservation={reservation}
              cancelButtonHandler={cancelButtonHandler}
            />
          </div>
        );
      })
    ) : (
      <div className="card d-flex justify-content-center align-items-center p-4">
        <h3>No reservations found</h3>
      </div>
    );
  };

  const displySearchResults = () => {
    return initialState ? null : displyReservationList();
  };

  if (search) {
    return (
      <div>
        <div className="row d-flex flex-column flex-sm-row flex-wrap mb-3">
          <div className="col col-sm-7 d-md-flex flex-column align-items-start"></div>
        </div>
        <div>{searchLoading ? displayLoading() : displySearchResults()}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="row d-flex flex-column flex-sm-row flex-wrap mb-3">
        <div className="col col-sm-7 d-md-flex flex-column align-items-start"></div>
      </div>
      <div>
        {reservationsLoading ? displayLoading() : displyReservationList()}
      </div>
    </div>
  );
};

export default ReservationList;
