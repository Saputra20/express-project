const express = require("express");
const router = express.Router();

// import repo
const { userRepo } = require("../repository/userRepository");

// import request
const userRequest = require("../request/userRequest");

// import helper
const apiResponse = require("../helper/response");
const validation = require("../helper/validation");
const mail = require("../helper/mail");

// import middleware

router.get("/", (req, res) => {
  return userRepo
    .paginate()
    .then((response) => {
      apiResponse.success(res, "show list users", response);
    })
    .catch((error) => {
      apiResponse.error(res, error.message);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  return userRepo
    .find(id)
    .then((response) => {
      apiResponse.success(res, "show user", response);
    })
    .catch((error) => {
      apiResponse.error(res, error.message);
    });
});

router.post("/", userRequest, (req, res) => {
  try {
    validation.check(req);
    const { body } = req;
    return userRepo
      .create(body)
      .then((response) => {
        apiResponse.success(res, "User has been created", response, 201);
      })
      .catch((error) => {
        apiResponse.error(res, error.message);
      });
  } catch (error) {
    apiResponse.error(res, error.message, error.status);
  }
});

router.post("/mail-send", async (req, res) => {
  try {
    const { body } = req;
    await mail.test(body);
    apiResponse.success(res, "berhasil");
  } catch (error) {
    apiResponse.error(res, error.message, error.status);
  }
});

router.put("/:id", userRequest, (req, res) => {
  try {
    validation.check(req);
    const id = req.params.id;
    const { body } = req;

    return userRepo
      .update(id, body)
      .then((response) => {
        apiResponse.success(res, "User has been updated", response);
      })
      .catch((error) => {
        apiResponse.error(res, error.message);
      });
  } catch (error) {
    apiResponse.error(res, error.message, error.status);
  }
});

router.delete("/:id", (req, res) => {
  try {
    const id = req.params.id;

    return userRepo
      .delete(id)
      .then((response) => {
        apiResponse.success(res, "User has been deleted", response);
      })
      .catch((error) => {
        apiResponse.error(res, error.message);
      });
  } catch (error) {
    apiResponse.error(res, error.message, error.status);
  }
});

module.exports = router;
