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

  const handleCancel = () => history.goBack();

  return (
    <div className="container">
      <ErrorAlert error={error} />
      <h1>Create a New Table</h1>
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
  );
};

export default TableForm;
