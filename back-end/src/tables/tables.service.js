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
    .update(updatedTable, "*")
    .then(tableData => tableData[0]);
};

// const update = async (updatedTable, reservation_id) => {
//   try {
//     await knex.transaction(async trx => {
//       const tableData = await trx("tables")
//         .select("*")
//         .where({ table_id: updatedTable.table_id });

//       await trx("reservations")
//         .where({ reservation_id })
//         .update({ status: "seated" }, "*");

//       return tableData[0];
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

const updateReservationStatus = (reservation_id, status) => {
  return knex("reservations").where({ reservation_id }).update({ status }, "*");
};

const finish = table_id => {
  return knex("tables")
    .where({ table_id })
    .update({ reservation_id: null }, "*")
    .then(tableData => tableData[0]);
};

// const finish = async (table_id, reservation_id) => {
//   try {
//     await knex.transaction(async trx => {
//       await trx("reservations")
//         .where({ reservation_id })
//         .update({ status: "finished" }, "*");
//       const tableData = await trx("tables")
//         .where({ table_id })
//         .update({ reservation_id: null }, "*");

//       return tableData[0];
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = {
  create,
  list,
  readTable,
  readReservation,
  updateReservationStatus,
  update,
  finish,
};
