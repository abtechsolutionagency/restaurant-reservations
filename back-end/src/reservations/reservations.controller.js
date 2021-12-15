const service = require("./reservations.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

/**
 * Global variable declarations
 */
const today = asDateString(new Date()).replace("-", "");
const currentTime = new Date()
  .toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
  .replace(":", "");
const resTimeLowerLimit = "1030";
const resTimeUpperLimit = "1730";

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
  const validPhoneNumber =
    /^[+]?(?=(?:[^\dx]*\d){7})(?:\(\d+(?:\.\d+)?\)|\d+(?:\.\d+)?)(?:[ -]?(?:\(\d+(?:\.\d+)?\)|\d+(?:\.\d+)?))*(?:[ ]?(?:x|ext)\.?[ ]?\d{1,5})?$/;
  if (mobile_number && mobile_number.match(validPhoneNumber)) {
    return next();
  }
  next({
    status: 400,
    message: "A valid 'mobile_number' is required",
  });
};

const hasReservationDate = (req, res, next) => {
  const { data: { reservation_date } = {} } = req.body;
  const validDate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  if (reservation_date && reservation_date.match(validDate)) {
    res.locals.reservation_date = reservation_date;
    return next();
  }
  next({
    status: 400,
    message: "A valid 'reservation_date' is required",
  });
};

function asDateString(date) {
  return `${date.getFullYear().toString(10)}-${(date.getMonth() + 1)
    .toString(10)
    .padStart(2, "0")}-${date.getDate().toString(10).padStart(2, "0")}`;
}

const hasValidReservationDate = (req, res, next) => {
  const resDateString = res.locals.reservation_date.replace("-", "");
  const day = new Date(res.locals.reservation_date).getUTCDay();
  if ([2].includes(day)) {
    next({
      status: 400,
      message:
        "Restuarant is closed on Tuesdays. Please choose a different day.",
    });
  }
  if (resDateString < today) {
    next({
      status: 400,
      message: "Reservation must be for a future date.",
    });
  }
  next();
};

const hasReservationTime = (req, res, next) => {
  const { data: { reservation_time } = {} } = req.body;
  const validTime = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
  if (reservation_time && reservation_time.match(validTime)) {
    res.locals.reservation_time = reservation_time;
    return next();
  }
  next({
    status: 400,
    message: "A valid 'reservation_time' is required",
  });
};

const hasValidReservationTime = (req, res, next) => {
  const resDateString = res.locals.reservation_date.replace("-", "");
  const resTimeString = res.locals.reservation_time.replace(":", "");

  if (resDateString === today && resTimeString < currentTime) {
    next({
      status: 400,
      message: "Reservations for today must be in the future",
    });
  }
  if (
    resTimeString >= resTimeLowerLimit &&
    resTimeString <= resTimeUpperLimit
  ) {
    return next();
  }
  next({
    status: 400,
    message: "Reservations must be between 10:30 AM and 9:30 PM",
  });
};

const hasPeople = (req, res, next) => {
  const { data: { people } = {} } = req.body;
  if (people && people !== "" && typeof people === "number" && people >= 1) {
    return next();
  }
  next({
    status: 400,
    message: "A valid number of 'people' is required",
  });
};

/**
 * List handler for reservation resources
 */
const list = async (req, res) => {
  const date = req.query.date;
  res.json({
    data: await service.list(date),
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
    hasReservationDate,
    hasValidReservationDate,
    hasReservationTime,
    hasValidReservationTime,
    hasPeople,
    asyncErrorBoundary(create),
  ],
  list: asyncErrorBoundary(list),
};
