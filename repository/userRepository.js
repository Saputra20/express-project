"use strict";
const BaseRepository = require("./baseRepository");
const User = require("../models").User;

class UserRepo extends BaseRepository {
  constructor(model) {
    super(model);
  }
}

module.exports = {
  userRepo: new UserRepo(User),
};
