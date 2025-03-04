import React from "react";
import { useHistory } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";

/**
 * Defines the form for creating or updating a reservation
 * @param table
 * A table object
 * @param error
 * Error object returned from the server if there is one
 * @param handleChange
 * Change handler function for form input fields
 * @param handlePeopleNumberChange
 * Change handler function for `people` numeric input to set lower limit of 1
 * @param handleSubmit
 * Click handler function to submit infomation from form
 * @returns {JSX.Element}
 */
const ReservationForm = ({
  reservation,
  error,
  handleChange,
  handlePeopleNumberChange,
  handleSubmit,
}) => {
  const history = useHistory();

  const handleEnter = event => {
    if (event.key.toLowerCase() === "enter") {
      event.preventDefault();
    }
  };

  const handleCancel = () => {
    history.goBack();
  };

  return (
    <div>
      <ErrorAlert error={error} />
      <div className="form-container p-4 p-md-5">
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="first_name"
              className="form-control"
              id="first_name"
              autoComplete={"off"}
              placeholder={"Customer's first name"}
              value={reservation.first_name}
              onChange={handleChange}
              onKeyDown={handleEnter}
              required
            />
            <label htmlFor="first_name" className="form-label">
              First name
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="last_name"
              className="form-control"
              id="last_name"
              autoComplete={"off"}
              placeholder={"Customer's last name"}
              value={reservation.last_name}
              onChange={handleChange}
              onKeyDown={handleEnter}
              required
            />
            <label htmlFor="last_name" className="form-label">
              Last name
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="tel"
              name="mobile_number"
              className="form-control"
              id="mobile_number"
              autoComplete={"off"}
              placeholder={"123-456-7890"}
              maxLength={12}
              value={reservation.mobile_number}
              onChange={handleChange}
              onKeyDown={handleEnter}
            />
            <label htmlFor="mobile_number" className="form-label">
              Mobile Number
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="date"
              name="reservation_date"
              className="form-control"
              id="reservation_date"
              placeholder="YYYY-MM-DD"
              pattern="\d{4}-\d{2}-\d{2}"
              value={reservation.reservation_date}
              onChange={handleChange}
              onKeyDown={handleEnter}
              required
            />
            <label htmlFor="reservation_date" className="form-label">
              Reservation Date
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="time"
              name="reservation_time"
              className="form-control"
              id="reservation_time"
              placeholder="HH:MM"
              pattern="[0-9]{2}:[0-9]{2}"
              value={reservation.reservation_time}
              onChange={handleChange}
              onKeyDown={handleEnter}
              required
            />
            <label htmlFor="reservation_time" className="form-label">
              Reservation Time
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              name="people"
              className="form-control"
              id="people"
              placeholder="1"
              value={reservation.people}
              onChange={handlePeopleNumberChange}
              onKeyDown={handleEnter}
              required
            />
            <label htmlFor="people" className="form-label">
              Number of guests in party
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="observation"
              className="form-control"
              id="observation"
              autoComplete={"off"}
              placeholder={"Customer's first name"}
              value={reservation.observation}
              onChange={handleChange}
              onKeyDown={handleEnter}
            />
            <label htmlFor="observation" className="form-label">
            Observation
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
      </div>
    </div>
  );
};

export default ReservationForm;
