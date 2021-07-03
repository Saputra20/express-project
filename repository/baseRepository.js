"use strict";

const pagination = require("../helper/pagination");

class BaseRepository {
  constructor(model) {
    if (this.constructor === BaseRepository) {
      throw new Error("Can't instantiate abstract class!");
    }
    this.model = model;
  }

  all(options = {}) {
    return this.model.findAll({ ...options });
  }

  async paginate(page = 1, limit = 10, options = {}) {
    let result = await this.model.findAndCountAll({
      subQuery: false,
      distinct: true,
      ...options,
      ...pagination.config(page, limit),
    });
    result.currentPage = page;
    return pagination.data(result, page, limit);
  }

  find(id, options = {}) {
    return this.model.findOne({ where: { id }, ...options, subQuery: false });
  }

  create(data) {
    return this.model.create(data);
  }

  async update(id, data) {
    let status = await this.model.update(data, { where: { id } });
    let result = await this.model.findOne({ where: { id } });

    return [status[0], result];
  }

  async delete(id) {
    let result = await this.model.findOne({ where: { id } });
    let status = await this.model.destroy({ where: { id } });

    return [status, result];
  }
}

module.exports = BaseRepository;
