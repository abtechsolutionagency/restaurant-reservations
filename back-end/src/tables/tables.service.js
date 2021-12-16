const knex = require("../db/connection");

const create = newTable => {
  return knex("tables")
    .insert(newTable)
    .returning("*")
    .then(tableData => tableData[0]);
};

const list = () => {
  return knex("tables").select("*").orderBy("table_name");
};

const readTable = table_id => {
  return knex("tables").select("*").where({ table_id }).first();
};

const readReservation = reservation_id => {
  return knex("reservations").select("*").where({ reservation_id }).first();
};

const update = updatedTable => {
  return knex("tables")
    .select("*")
    .where({ table_id: updatedTable.table_id })
    .update(updatedTable, "*");
};

module.exports = {
  create,
  list,
  readTable,
  readReservation,
  update,
};
