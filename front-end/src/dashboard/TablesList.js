import React from "react";
import TablesListItem from "./TablesListItem";

const TablesList = ({ tables, finishButtonClickHandler }) => {
  return (
    <div>
      <div className="d-md-flex mb-3">
        <h2>{tables.length} tables</h2>
      </div>
      {tables.map(table => {
        return (
          <div key={table.table_id}>
            {
              <TablesListItem
                table={table}
                finishButtonClickHandler={finishButtonClickHandler}
              />
            }
          </div>
        );
      })}
    </div>
  );
};

export default TablesList;
