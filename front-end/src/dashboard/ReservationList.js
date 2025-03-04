import React from "react";
import LoadingAnimation from "./LoadingAnimation";
import ReservationListItem from "./ReservationListItem";

/**
 * Defines the list of reservations returned from the database
 * @param reservations
 * A possibly empty array of reservations
 * @param cancelButtonHandler
 * Click handler function for cancel button
 * @param reservationsLoading
 * Boolean to determine if loading indicator is shown
 * @param search
 * Boolean to determine how the list is displayed when used on search page
 * @param initialState
 * Boolean to determine if if initial state for search is active
 * @param hasTables
 * Boolean to determine if there are any tables to seat guests
 * @returns {JSX.Element}
 */
const ReservationList = ({
  reservations,
  cancelButtonHandler,
  reservationsLoading,
  search = false,
  initialState = true,
  hasTables,
  handleUpdateReservation,
}) => {
  const displayLoading = () => {
    return <LoadingAnimation />;
  };

  const displyReservationList = (handleUpdateReservation) => {
    return reservations.length ? (
      reservations.map(reservation => {
        return (
          <div key={reservation.reservation_id}>
            <ReservationListItem
              reservation={reservation}
              cancelButtonHandler={cancelButtonHandler}
              hasTables={hasTables}
              handleUpdateReservation={handleUpdateReservation}
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

  const displySearchResults = (handleUpdateReservation) => {
    return initialState ? null : displyReservationList(handleUpdateReservation);
  };

  if (search) {
    return (
      <div>
        <div className="row d-flex flex-column flex-sm-row flex-wrap mb-3">
          <div className="col col-sm-7 d-md-flex flex-column align-items-start"></div>
        </div>
        <div>
          {reservationsLoading ? displayLoading() : displySearchResults(handleUpdateReservation)}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="row d-flex flex-column flex-sm-row flex-wrap mb-3">
        <div className="col col-sm-7 d-md-flex flex-column align-items-start"></div>
      </div>
      <div>
        {reservationsLoading ? displayLoading() : displyReservationList(handleUpdateReservation)}
      </div>
    </div>
  );
};

export default ReservationList;
