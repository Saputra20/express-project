require("express-group-routes");
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const app = express();

// import & init bodyParser
app.disable("x-powered-by");
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

// import controller
const UserController = require("./controllers/userController");

// basic route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// route group
app.group("/api/v1", (router) => {
  router.use("/users", UserController);
});

// Start Server
if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () =>
    console.log(`Server Running at http://localhost:${PORT}`)
  );
}

module.exports = app;
