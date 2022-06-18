const Sequelize = require("sequelize");

class Order extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        client_id: Sequelize.INTEGER,
        services_id: Sequelize.INTEGER,
        printer_id: Sequelize.INTEGER,
        amount: Sequelize.FLOAT(11),
        price: Sequelize.FLOAT(11),
        status: Sequelize.STRING,
        delivery_date: Sequelize.DATE,
        delivery_forecast: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

Order.associate = (models) => {
  Order.belongsTo(models.Client, {
    foreignKey: "client_id",
    as: "client",
    targetKey: "id",
  });
  Order.belongsTo(models.Service, {
    foreignKey: "services_id",
    as: "service",
    targetKey: "id",
  });
  Order.belongsTo(models.Printer, {
    foreignKey: "printer_id",
    as: "printer",
    targetKey: "id",
  });
};

module.exports = Order;
