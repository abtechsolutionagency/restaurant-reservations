import React from "react";

const ReservationForm = () => {
  return (
    <div className="container">
      <h1>Create a New Reservation</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">
            First name
          </label>
          <input
            type="text"
            name="first_name"
            className="form-control"
            id="first_name"
            autoComplete={"off"}
            placeholder={"Customer's first name"}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">
            Last name
          </label>
          <input
            type="text"
            name="last_name"
            className="form-control"
            id="last_name"
            autoComplete={"off"}
            placeholder={"Customer's last name"}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mobile_number" className="form-label">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile_number"
            className="form-control"
            id="mobile_number"
            pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"}
            autoComplete={"off"}
            placeholder={"123-456-7890"}
            maxLength={12}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reservation_date" className="form-label">
            Reservation Date
          </label>
          <input
            type="date"
            name="reservation_date"
            className="form-control"
            id="reservation_date"
            placeholder="YYYY-MM-DD"
            pattern="\d{4}-\d{2}-\d{2}"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reservation_time" className="form-label">
            Reservation Time
          </label>
          <input
            type="time"
            name="reservation_time"
            className="form-control"
            id="reservation_time"
            placeholder="HH:MM"
            pattern="[0-9]{2}:[0-9]{2}"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="people" className="form-label">
            Number of guests in party
          </label>
          <input
            type="number"
            name="people"
            className="form-control"
            id="people"
            placeholder="1"
            required
          />
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
