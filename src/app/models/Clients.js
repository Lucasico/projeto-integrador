const Sequelize = require("sequelize");
const Orders = require("./Orders");
class Client extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        phone: Sequelize.STRING,
        street: Sequelize.STRING,
        district: Sequelize.STRING,
        number: Sequelize.STRING,
        city: Sequelize.STRING,
        uf: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

Client.associations = () => {
  Client.hasOne(Orders);
};

module.exports = Client;
