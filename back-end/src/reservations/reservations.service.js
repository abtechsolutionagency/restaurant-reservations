const knex = require("../db/connection");

const create = newReservation => {
  return knex("reservations")
    .insert(newReservation)
    .returning("*")
    .then(reservationData => reservationData[0]);
};

const list = date => {
  return knex("reservations")
    .select("*")
    .where({ reservation_date: date })
    .orderBy("reservation_time");
};

const read = reservation_id => {
  return knex("reservations").select("*").where({ reservation_id }).first();
};

module.exports = {
  create,
  list,
  read,
};
