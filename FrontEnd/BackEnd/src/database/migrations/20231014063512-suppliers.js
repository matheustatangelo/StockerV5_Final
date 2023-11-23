/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('suppliers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },

      password_hash: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      endereco: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      telefone: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },

      cnpj: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
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
    await queryInterface.dropTable('suppliers');
  },
};
