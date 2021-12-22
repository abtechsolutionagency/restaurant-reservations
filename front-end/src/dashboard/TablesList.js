import React from "react";
import TablesListItem from "./TablesListItem";
import { useHistory } from "react-router-dom";

const TablesList = ({ tables, finishButtonHandler }) => {
  const history = useHistory();
  return (
    <div className="my-3 p-3">
      <div className="row d-flex flex-column flex-sm-row flex-wrap mb-3">
        <div className="col col-sm-7 d-md-flex flex-column align-items-start mb-2">
          <h2>{tables.length} tables</h2>
        </div>
        <div className="col col-sm-5 d-flex justify-content-sm-end align-items-sm-start mt-2 mt-sm-0">
          <button
            type="button"
            name="New Table"
            className="btn btn-primary flex-fill flex-sm-grow-0"
            onClick={() => history.push("/tables/new")}
          >
            <i className="bi bi-plus-circle-fill me-2"></i>New Table
          </button>
        </div>
      </div>
      <div className="row">
        {tables.map(table => {
          return (
            <div key={table.table_id} className="col-3">
              <TablesListItem
                table={table}
                finishButtonHandler={finishButtonHandler}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TablesList;
