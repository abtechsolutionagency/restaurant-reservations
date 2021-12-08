/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require("dotenv").config();
const path = require("path");

const {
  DATABASE_URL = "postgres://lrcpelnp:EVMvIVtkkdvKn9IOrnGw5u_e52hH8Bm-@kashin.db.elephantsql.com/lrcpelnp",
  DATABASE_URL_DEVELOPMENT = "postgres://ogfnknef:enQZicD71ewLqgWih3VxFiWHV2Kd7Wmo@kashin.db.elephantsql.com/ogfnknef",
  DATABASE_URL_TEST = "postgres://nporvxco:5DleknX_G40dvcLOM29aJvQJ9ZDvGV7q@kashin.db.elephantsql.com/nporvxco",
  DATABASE_URL_PREVIEW = "postgres://azaxzoyb:AB_ggrzQijXJfwQeZPW4mWyGmbJIaSNy@kashin.db.elephantsql.com/azaxzoyb",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
