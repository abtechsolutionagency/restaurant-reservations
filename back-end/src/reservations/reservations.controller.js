const service = require("./reservations.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

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
  create: asyncErrorBoundary(create),
  list: asyncErrorBoundary(list),
};
