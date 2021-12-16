import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";
import { getReservation, listTables } from "../utils/api";

const SeatReservation = () => {
  const { reservationId } = useParams();
  const history = useHistory();

  const [Error, setError] = useState(null);
  const [reservation, setReservation] = useState({});
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState("");

  useEffect(loadTables, []);
  useEffect(loadReservations, [reservationId]);

  function loadTables() {
    const abortController = new AbortController();
    setError(null);
    listTables(abortController.signal).then(setTables).catch(setError);
    return () => abortController.abort();
  }

  function loadReservations() {
    const abortController = new AbortController();
    setError(null);
    getReservation(reservationId, abortController.signal)
      .then(setReservation)
      .catch(setError);
    return () => abortController.abort();
  }

  const handleTableChange = event => setSelectedTable(event.target.value);

  const handleCancel = () => history.goBack();

  const handleSubmit = event => {
    event.preventDefault();
    if (selectedTable === "") {
      return setError("Please select a table");
    }
    console.log("Submitted", selectedTable, reservationId);
  };

  return (
    <div className="container">
      <ErrorAlert error={Error} />
      <div>
        <h1>
          Seat Reservation for {reservation.first_name} {reservation.last_name}
        </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="table_id">Choose a table to seat</label>
          <select
            id="table_id"
            name="table_id"
            value={selectedTable}
            onChange={handleTableChange}
          >
            <option key="0" value="">
              Select a Table:
            </option>
            {tables.map(table => {
              return (
                <option key={table.table_id} value={table.table_id}>
                  {table.table_name} - {table.capacity} seats
                </option>
              );
            })}
          </select>
          <div className="row">
            <div className="col-auto pr-0 mr-2">
              <button className="btn btn-secondary" onClick={handleCancel}>
                Cancel
              </button>
            </div>
            <div className="col-auto px-0">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SeatReservation;
