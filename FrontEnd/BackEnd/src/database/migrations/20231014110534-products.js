/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      purchase_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      sale_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      rf_id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      supplier_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'suppliers',
          key: 'id',
        },
      },
      stock_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('products');
  },
};
