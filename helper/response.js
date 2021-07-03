"use strict";

module.exports = {
  success: (res, msg, data, status = 200) => {
    return res.status(status).json({
      success: true,
      message: msg,
      data: data,
    });
  },
  error: (res, mgs, status = 500 , data = []) => {
    return res.status(status).json({
      success: true,
      message: mgs,
      data: data,
      error_code: status,
    });
  },
};
