"use strict";

module.exports = {
  config: (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? (page - 1) * limit : 0;

    return {
      limit,
      offset,
    };
  },
  data: (response, page, limit = 10) => {
    const { count: totalData, rows: data } = response;

    const currentPage = page ? parseInt(page) : 1;
    const totalPage = Math.ceil(totalData / limit);
    const perPage = data ? data.length : 0;

    return {
      totalData,
      perPage,
      data,
      totalPage,
      currentPage,
    };
  },
};
