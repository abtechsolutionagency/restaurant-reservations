const knex = require("../db/connection");

const create = newTable => {
  return knex("tables")
    .insert(newTable)
    .returning("*")
    .then(tableData => tableData[0]);
};

const list = async () => {
  return knex("tables").select("*").orderBy("table_name");
};

module.exports = {
  create,
  list,
};
