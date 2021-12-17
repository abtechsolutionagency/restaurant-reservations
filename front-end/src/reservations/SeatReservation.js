import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";
import { getReservation, listTables, updateTable } from "../utils/api";

const SeatReservation = () => {
  const { reservation_id } = useParams();
  const history = useHistory();

  const [reservation, setReservation] = useState({});
  const [reservationError, setReservationError] = useState(null);
  const [tables, setTables] = useState([]);
  const [tablesError, setTablesError] = useState(null);
  const [selectedTable, setSelectedTable] = useState("");
  const [selectedTableError, setSelectedTableError] = useState(null);

  useEffect(loadTables, []);
  useEffect(loadReservations, [reservation_id]);

  function loadTables() {
    const abortController = new AbortController();
    setTablesError(null);
    listTables(abortController.signal).then(setTables).catch(setTablesError);
    return () => abortController.abort();
  }

  function loadReservations() {
    const abortController = new AbortController();
    setReservationError(null);
    getReservation(reservation_id, abortController.signal)
      .then(setReservation)
      .catch(setReservationError);
    return () => abortController.abort();
  }

  const handleTableChange = event => setSelectedTable(event.target.value);

  const handleCancel = () => history.goBack();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await updateTable(selectedTable, reservation_id);
      history.push("/");
    } catch (error) {
      setSelectedTableError(error);
    }
  };

  return (
    <div className="container">
      <ErrorAlert error={reservationError} />
      <ErrorAlert error={tablesError} />
      <ErrorAlert error={selectedTableError} />
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
                  {table.table_name} - {table.capacity}
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
