const knex = require("../db/connection");

const create = newReservation => {
  return knex("reservations").insert(newReservation).returning("*");
};

module.exports = {
  create,
};
