module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      banner: {
        type: Sequelize.STRING
      },
      experience: {
        type: Sequelize.JSON
      },
      education: {
        type: Sequelize.JSON
      },
      skills: {
        type: Sequelize.JSON
      },
      hobbies: {
        type: Sequelize.JSON
      },
      socialLinks: {
        type: Sequelize.JSON
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Profiles');
  }
};
