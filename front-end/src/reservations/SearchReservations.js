import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ReservationList from "../dashboard/ReservationList";
import ErrorAlert from "../layout/ErrorAlert";
import { searchReservations } from "../utils/api";

const SearchReservations = () => {
  const history = useHistory();
  const [mobileNumber, setMobileNumber] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [initialState, setInitialState] = useState(true);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleMobileNumberChange = event => {
    setMobileNumber(event.target.value);
  };

  const search = () => {
    const abortController = new AbortController();
    setSearchLoading(true);
    setInitialState(false);
    searchReservations(mobileNumber, abortController.signal)
      .then(reservations => {
        setSearchLoading(false);
        setResults(reservations);
      })
      .catch(setError);

    return () => {
      abortController.abort();
    };
  };

  const findButtonHandler = async event => {
    event.preventDefault();
    search();
  };

  const handleEnter = event => {
    if (event.key.toLowerCase() === "enter") {
      event.preventDefault();
    }
  };

  const handleCancel = () => {
    setMobileNumber("");
    history.goBack();
  };

  return (
    <div className="container">
      <h1 className="my-4">Search Reservations</h1>
      <ErrorAlert error={error} />
      <div className="form-container p-3 p-md-5">
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
              onKeyDown={handleEnter}
              value={mobileNumber}
              required
            />
            <label htmlFor="mobile_number" className="form-label">
              Enter a phone number
            </label>
          </div>
          <div className="d-flex justify-content-end">
            <div className="col-6 col-md-2 d-flex pe-1">
              <button
                className="btn btn-secondary flex-fill"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
            <div className="col-6 col-md-2 d-flex ps-1">
              <button className="btn btn-primary flex-fill" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
        <ReservationList
          reservations={results}
          search={true}
          searchLoading={searchLoading}
          initialState={initialState}
        />
      </div>
    </div>
  );
};

export default SearchReservations;
