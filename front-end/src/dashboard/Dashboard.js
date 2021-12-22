import React, { useEffect, useState } from "react";
import {
  cancelReservation,
  finishTable,
  listReservations,
  listTables,
} from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import ReservationList from "./ReservationList";
import useQuery from "../utils/useQuery";
import { useHistory } from "react-router-dom";
import { next, previous } from "../utils/date-time";
import TablesList from "./TablesList";
import TimeDisplay from "./TimeDisplay";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard({ date }) {
  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);
  const [tables, setTables] = useState([]);
  const [tablesError, setTablesError] = useState(null);
  const history = useHistory();
  const query = useQuery();

  if (query.get("date")) {
    date = query.get("date");
  }

  useEffect(loadDashboard, [date]);
  useEffect(loadTables, []);

  function loadDashboard() {
    const abortController = new AbortController();
    setReservationsError(null);
    listReservations({ date }, abortController.signal)
      .then(setReservations)
      .catch(setReservationsError);
    return () => abortController.abort();
  }

  function loadTables() {
    const abortController = new AbortController();
    setTablesError(null);
    listTables(abortController.signal).then(setTables).catch(setTablesError);
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

  const finishButtonHandler = async id => {
    const confirm = window.confirm(
      "Is this table ready to seat new guests? This cannot be undone."
    );
    if (confirm) {
      try {
        await finishTable(id);
      } catch (error) {
        setTablesError(error);
      }
      loadTables();
      loadDashboard();
    }
  };

  const cancelButtonHandler = async id => {
    const confirm = window.confirm(
      "Do you want to cancel this reservation? This cannot be undone."
    );
    if (confirm) {
      try {
        await cancelReservation(id);
        loadDashboard();
      } catch (error) {
        setReservationsError(error);
      }
    }
  };

  return (
    <main className="container-lg">
      <header className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center flex-wrap px-2 px-md-0 py-4 m-0">
        <h1 className="mb-2">Dashboard</h1>
        <div className="d-flex flex-column">
          <h3>
            {new Date().toLocaleDateString("us-EN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h3>
          <div className="text-sm-end m-0">
            <TimeDisplay />
          </div>
        </div>
      </header>

      <ErrorAlert error={reservationsError} />
      <ReservationList
        date={new Date(date.replace(/-/g, "/")).toLocaleDateString("en-US")}
        reservations={reservations}
        cancelButtonHandler={cancelButtonHandler}
        previousDayButtonHandler={previousDayButtonHandler}
        todayButtonHandler={todayButtonHandler}
        nextDayButtonHandler={nextDayButtonHandler}
      />
      <ErrorAlert error={tablesError} />
      <TablesList tables={tables} finishButtonHandler={finishButtonHandler} />
    </main>
  );
}

export default Dashboard;
