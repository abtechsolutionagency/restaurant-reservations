import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ReservationList from "../dashboard/ReservationList";
import ErrorAlert from "../layout/ErrorAlert";
import { searchReservations } from "../utils/api";

const SearchReservations = () => {
  const history = useHistory();
  const [mobileNumber, setMobileNumber] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleMobileNumberChange = event => {
    setMobileNumber(event.target.value);
  };

  const findButtonHandler = async event => {
    event.preventDefault();
    const abortController = new AbortController();
    try {
      const reservations = await searchReservations(
        mobileNumber,
        abortController.signal
      );
      setResults(reservations);
    } catch (error) {
      setError(error);
    }
    return () => abortController.abort();
  };
  return (
    <div className="container">
      <h1>Search Reservations</h1>
      <ErrorAlert error={error} />
      <form onSubmit={findButtonHandler}>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="mobile_number"
            className="form-control"
            id="mobile_number"
            autoComplete={"off"}
            placeholder={"Enter a customer's phone number"}
            onChange={handleMobileNumberChange}
            value={mobileNumber}
            required
          />
          <label htmlFor="mobile_number" className="form-label">
            Enter a customer's phone number
          </label>
        </div>
        <div className="row">
          <div className="col-auto pr-0 mr-2">
            <button
              className="btn btn-secondary"
              onClick={() => history.goBack()}
            >
              Cancel
            </button>
          </div>
          <div className="col-auto px-0">
            <button className="btn btn-primary" type="submit">
              Find
            </button>
          </div>
        </div>
      </form>
      <ReservationList reservations={results} search={true} />
    </div>
  );
};

export default SearchReservations;
