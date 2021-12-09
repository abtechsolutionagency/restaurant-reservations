import React from "react";
import ErrorAlert from "../layout/ErrorAlert";

const ReservationForm = ({
  reservation,
  error,
  handleFirstNameChange,
  handleLastNameChange,
  handleMobileNumberChange,
  handleReservationDateChange,
  handleReservationTimeChange,
  handlePeopleNumberChange,
}) => {
  return (
    <div className="container">
      <ErrorAlert error={error} />
      <h1>Create a New Reservation</h1>
      <form>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="first_name"
            className="form-control"
            id="first_name"
            autoComplete={"off"}
            placeholder={"Customer's first name"}
            value={reservation.first_name}
            onChange={handleFirstNameChange}
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
            onChange={handleLastNameChange}
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
            pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"}
            autoComplete={"off"}
            placeholder={"123-456-7890"}
            maxLength={12}
            value={reservation.mobile_number}
            onChange={handleMobileNumberChange}
            required
          />
          <label htmlFor="mobile_number" className="form-label">
            Mobile Number
          </label>
          <div className="form-text mx-2">Use format 000-000-0000</div>
        </div>
        <div className="form-floating mb-3">
          <input
            type="date"
            name="reservation_date"
            className="form-control"
            id="reservation_date"
            placeholder="YYYY-MM-DD"
            min={new Date().toISOString().split("T")[0]}
            pattern="\d{4}-\d{2}-\d{2}"
            value={reservation.reservation_date}
            onChange={handleReservationDateChange}
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
            onChange={handleReservationTimeChange}
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
            required
          />
          <label htmlFor="people" className="form-label">
            Number of guests in party
          </label>
        </div>
        <div className="row">
          <div className="col-auto pr-0 mr-2">
            <button className="btn btn-secondary">Cancel</button>
          </div>
          <div className="col-auto px-0">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
