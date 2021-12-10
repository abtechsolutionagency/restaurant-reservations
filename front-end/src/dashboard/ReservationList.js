import React from "react";
import ReservationListItem from "./ReservationListItem";

const ReservationList = ({ reservations }) => {
  return (
    <>
      {reservations.map(
        ({
          reservation_id,
          first_name,
          last_name,
          mobile_number,
          reservation_date,
          reservation_time,
          people,
        }) => {
          return (
            <div key={reservation_id}>
              <ReservationListItem
                firstName={first_name}
                lastName={last_name}
                mobile_number={mobile_number}
                reservation_date={reservation_date}
                reservation_time={reservation_time}
                people={people}
              />
            </div>
          );
        }
      )}
    </>
  );
};

export default ReservationList;
