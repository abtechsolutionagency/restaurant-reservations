import React from "react";

const TablesListItem = ({ table, finishButtonHandler }) => {
  const tableFilled = () => {
    return table.reservation_id
      ? "card table-card table-filled d-flex flex-column p-3"
      : "card table-card d-flex flex-column p-3";
  };

  return (
    <div className={tableFilled()}>
      <div className="d-flex flex-row justify-content-between">
        <div>
          <h3 className="mb-3">{table.table_name}</h3>
          <p>
            <i className="bi bi-people me-2"></i>
            {table.capacity}
          </p>
        </div>

        <div className="mx-3">
          <p data-table-id-status={table.table_id}>
            {table.reservation_id ? "OCCUPIED" : "FREE"}
          </p>
        </div>
      </div>

      <button
        data-table-id-finish={table.table_id}
        type="button"
        className="btn btn-outline-primary mt-3"
        onClick={() => finishButtonHandler(table.table_id)}
        hidden={!table.reservation_id}
      >
        <i className="bi bi-check2-circle me-2"></i>Finish
      </button>
    </div>
  );
};

export default TablesListItem;
