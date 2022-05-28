const Sequelize = require('sequelize');
const User = require('../models/User');
const Client = require('../models/Clients');
const Service = require('../models/Service');
const Printer = require('../models/Printers')
const databaseConfig = require('../../config/database');

const models = [User, Client, Service, Printer];

class Database {
  constructor() {
    this.init();
  }

  init(){

    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))

  }
}

module.exports = new Database();