import React from "react";

const TablesListItem = ({ table, finishButtonClickHandler }) => {
  return (
    <div className="card d-flex flex-row py-3 mb-3">
      <div className="mx-3">
        <p>
          <strong>Table Name: </strong>
          {table.table_name}
        </p>
      </div>
      <div className="mx-3">
        <p>
          <strong>Capacity: </strong>
          {table.capacity}
        </p>
      </div>
      <div className="mx-3">
        <p data-table-id-status={table.table_id}>
          {table.reservation_id ? "Occupied" : "Free"}
        </p>
      </div>
      <div className="mx-3">
        {table.reservation_id ? (
          <button
            data-table-id-finish={table.table_id}
            type="button"
            onClick={() => finishButtonClickHandler(table.table_id)}
          >
            Finish
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TablesListItem;
