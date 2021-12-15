const service = require("./tables.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

/**
 * Middleware to check that body has data
 */
const hasData = (req, res, next) => {
  if (req.body.data) {
    return next();
  }
  next({ status: 400, message: "body must have data property" });
};

/**
 * Middleware for post body validation
 */
const hasTableName = (req, res, next) => {
  const { data: { table_name } = {} } = req.body;
  if (table_name && table_name !== "" && table_name.length >= 2) {
    res.locals.table_name = table_name;
    return next();
  }
  next({
    status: 400,
    message: "A 'table_name' of at least 2 characters is required",
  });
};

const hasCapacity = (req, res, next) => {
  const { data: { capacity } = {} } = req.body;
  if (capacity && typeof capacity === "number" && capacity > 0) {
    return next();
  }
  next({
    status: 400,
    message: "A 'capacity' of at least 1 is required",
  });
};

/**
 *  Create handler for new reservations
 */

const create = async (req, res) => {
  const newTable = await service.create(req.body.data);
  res.status(201).json({ data: newTable });
};

module.exports = {
  create: [hasData, hasTableName, hasCapacity, asyncErrorBoundary(create)],
};
