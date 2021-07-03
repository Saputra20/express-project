"use strict";
const { check, checkSchema } = require("express-validator");
module.exports = [
  checkSchema({
    firstname: {
      isEmpty: {
        negated: true,
        errorMessage: "Firstname required",
        bail: true,
      },
    },
    lastname: {
      isEmpty: {
        negated: true,
        errorMessage: "Lastname required",
        bail: true,
      },
    },
    email: {
      isEmpty: {
        negated: true,
        errorMessage: "Email required",
        bail: true,
      },
      isEmail: {
        errorMessage: "Invalid email format",
      },
    },
  }),
];
