import React from "react";

const TablesListItem = ({ table, finishButtonClickHandler }) => {
  return (
    <div className="card p-3 mb-3">
      <div>
        <p>
          <strong>Table Name: </strong>
          {table.table_name}
        </p>
      </div>
      <div>
        <p>
          <strong>Capacity: </strong>
          {table.capacity}
        </p>
      </div>
      <div>
        <p data-table-id-status={table.table_id}>
          {table.reservation_id ? "Occupied" : "Free"}
        </p>
      </div>
      <div>
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
