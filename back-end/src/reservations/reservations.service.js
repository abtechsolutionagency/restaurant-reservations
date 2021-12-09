const knex = require("../db/connection");

const create = newReservation => {
  return knex("reservations")
    .insert(newReservation)
    .returning("*")
    .then(reservationData => reservationData[0]);
};

const list = async date => {
  return knex("reservations")
    .select("*")
    .where({ reservation_date: date })
    .orderBy("reservation_time");
};

module.exports = {
  create,
  list,
};
