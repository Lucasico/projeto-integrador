"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      client_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "clients",
          },
          key: "id",
        },
      },
      services_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "services",
          },
          key: "id",
        },
      },
      printer_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "printers",
          },
          key: "id",
        },
      },
      amount: {
        allowNull: false,
        type: Sequelize.FLOAT(11),
      },
      price: {
        allowNull: false,
        type: Sequelize.FLOAT(11),
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      delivery_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      delivery_forecast: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("orders");
  },
};
