const Service = require("../models/Orders");
const { Op } = require("sequelize");
const Sequelize = require("sequelize");

const buildFilters = (query) => {
  let filters = {};

  if (query.client) {
    filters = { ...filters, client_id: query.client };
  }
  if (query.service) {
    filters = { ...filters, services_id: query.service };
  }
  if (query.status) {
    filters = { ...filters, status: query.status };
  }

  return filters;
};
module.exports = {
  async create(data) {
    const response = await Service.create(data);
    return response;
  },

  async delete(id) {
    const deleted = await Service.destroy({
      where: { id: id },
    });

    return deleted;
  },

  async findOne(id) {
    const service = await Service.findOne({
      include: ["client", "service", "printer"],
      where: { id: id },
    });

    return service;
  },

  async update(id, data) {
    console.log(id);
    console.log(data);
    const [updated] = await Service.update(data, {
      where: { id: id },
    });

    return updated;
  },

  async list(query) {
    let limit = 10;
    let offset = 0 + (query.page || 1 - 1) * limit;
    const filters = buildFilters(query);

    const services = await Service.findAndCountAll({
      include: ["client", "service", "printer"],
      where: {
        [Op.and]: filters,
      },
      limit: limit,
      offset: offset,
    });

    return services;
  },

  async reportSynthetic(query) {
    // const filters = buildFilters(query);
    // const orders = await Model.sequelize.query("SELECT * FROM orders", {
    //   raw: false,
    //   type: QueryTypes.SELECT,
    // });
    // return orders;
    // console.log(filters);
    // const services = await Service.findAndCountAll({
    //   // include: ["client", "service", "printer"],
    //   attributes: [
    //     "client",
    //     [fn("client_id", col("client_id")), "count_clients"],
    //   ],
    //   where: {
    //     [Op.and]: filters,
    //   },
    //   // group: filters.client_id,
    // });
    // const users = await ("SELECT * FROM `services`",
    // {
    //   type: QueryTypes.SELECT,
    // });
    // return users;
  },
};
