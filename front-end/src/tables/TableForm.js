import React from "react";
import { useHistory } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";

const TableForm = ({
  table,
  error,
  handleTableNameChange,
  handleCapacityChange,
  handleSubmit,
}) => {
  const history = useHistory();

  return (
    <div>
      <ErrorAlert error={error} />
      <div className="form-container p-4 p-md-5">
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="table_name"
              className="form-control"
              id="table_name"
              autoComplete={"off"}
              placeholder={"Table Name"}
              value={table.table_name}
              onChange={handleTableNameChange}
              required
            />
            <label htmlFor="table_name" className="form-label">
              Table name
            </label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="number"
              name="capacity"
              className="form-control"
              id="capacity"
              placeholder="1"
              value={table.capacity}
              onChange={handleCapacityChange}
              required
            />
            <label htmlFor="capacity" className="form-label">
              Capacity
            </label>
          </div>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-secondary col-6 col-md-2 me-2"
              onClick={() => history.goBack()}
            >
              Cancel
            </button>
            <button className="btn btn-primary col-6 col-md-2" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TableForm;
