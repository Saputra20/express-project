"use strict";
const { validationResult } = require("express-validator");

module.exports = {
    check: req => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let err = new Error(errors);
            err.message = errors
            err.status = 422

            throw err
        }
    }
};
