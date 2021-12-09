const service = require("./reservations.service");
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
const hasFirstName = (req, res, next) => {
  const { data: { first_name } = {} } = req.body;
  if (first_name && first_name !== "") {
    return next();
  }
  next({
    status: 400,
    message: "A 'first_name' is required",
  });
};

const hasLastName = (req, res, next) => {
  const { data: { last_name } = {} } = req.body;
  if (last_name && last_name !== "") {
    return next();
  }
  next({
    status: 400,
    message: "A 'last_name' is required",
  });
};

const hasMobileNumber = (req, res, next) => {
  const { data: { mobile_number } = {} } = req.body;
  const validPhoneNumber = /^\(?[0-9]{3}\)?[-]{1}?[0-9]{3}[-]{1}?[0-9]{4}$/;
  if (mobile_number && mobile_number.match(validPhoneNumber)) {
    return next();
  }
  next({
    status: 400,
    message: "A valid 'mobile_number' is required",
  });
};

/**
 * List handler for reservation resources
 */
const list = async (req, res) => {
  res.json({
    data: [],
  });
};

/**
 *  Create handler for new reservations
 */

const create = async (req, res) => {
  const newReservation = await service.create(req.body.data);
  res.status(201).json({ data: newReservation });
};

module.exports = {
  create: [
    hasData,
    hasFirstName,
    hasLastName,
    hasMobileNumber,
    asyncErrorBoundary(create),
  ],
  list: asyncErrorBoundary(list),
};
