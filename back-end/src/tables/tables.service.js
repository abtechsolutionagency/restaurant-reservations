const knex = require("../db/connection");

const create = newTable => {
  return knex("tables")
    .insert(newTable)
    .returning("*")
    .then(tableData => tableData[0]);
};

module.exports = {
  create,
};
