import React, { useEffect, useState } from "react";
import { listReservations } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import ReservationList from "./ReservationList";
import useQuery from "../utils/useQuery";
import { useHistory } from "react-router-dom";
import { next, previous } from "../utils/date-time";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard({ date }) {
  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);
  const history = useHistory();
  const query = useQuery();

  if (query.get("date")) {
    date = query.get("date");
  }

  useEffect(loadDashboard, [date]);

  function loadDashboard() {
    const abortController = new AbortController();
    setReservationsError(null);
    listReservations({ date }, abortController.signal)
      .then(setReservations)
      .catch(setReservationsError);
    return () => abortController.abort();
  }

  const todayButtonHandler = () => {
    history.push("/dashboard");
  };

  const previousDayButtonHandler = () => {
    const previousDay = previous(date);
    history.push(`/dashboard?date=${previousDay}`);
  };

  const nextDayButtonHandler = () => {
    const nextDay = next(date);
    history.push(`/dashboard?date=${nextDay}`);
  };

  return (
    <main>
      <h1 className="mb-4">Dashboard</h1>
      <div>
        <div>
          <h4>
            Today is{" "}
            {new Date().toLocaleDateString("us-EN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h4>
        </div>
        <div
          className="btn-group my-3"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => previousDayButtonHandler()}
          >
            Prev Day
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => todayButtonHandler()}
          >
            Today
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => nextDayButtonHandler()}
          >
            Next Day
          </button>
        </div>
      </div>
      <div className="d-md-flex mb-3"></div>
      <ErrorAlert error={reservationsError} />
      <ReservationList
        date={new Date(date.replace(/-/g, "/")).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
        reservations={reservations}
      />
    </main>
  );
}

export default Dashboard;
