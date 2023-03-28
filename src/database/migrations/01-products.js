'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      author: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      editorial: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL(7, 2),
        allowNull: false
      },
      collection: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      numberPages: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      language: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      format: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      isbn: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      weight: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      edition: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      bestSellers: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
