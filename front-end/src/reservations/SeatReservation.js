import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";
import { getReservation, listTables } from "../utils/api";

const SeatReservation = () => {
  const { reservationId } = useParams();
  const [reservation, setReservation] = useState({});
  const [reservationError, setReservationError] = useState(null);
  const [tables, setTables] = useState([]);
  const [tablesError, setTablesError] = useState(null);

  useEffect(loadTables, []);
  useEffect(() => {
    const abortController = new AbortController();
    setReservationError(null);
    getReservation(reservationId, abortController.signal)
      .then(setReservation)
      .catch(setReservationError);
    return () => abortController.abort();
  }, [reservationId]);

  function loadTables() {
    const abortController = new AbortController();
    setTablesError(null);
    listTables(abortController.signal).then(setTables).catch(setTablesError);
    return () => abortController.abort();
  }

  return (
    <div className="container">
      <ErrorAlert error={reservationError} />
      <ErrorAlert error={tablesError} />
      <div>
        <h1>
          Seat Reservation for {reservation.first_name} {reservation.last_name}
        </h1>
        <form>
          <label htmlFor="table_id">Choose a table to seat</label>
          <select id="table_id" name="table_id">
            {tables.map(table => {
              return <option value={table.table_id}>{table.table_name}</option>;
            })}
          </select>
        </form>
      </div>
    </div>
  );
};

export default SeatReservation;
