const Sequelize = require('sequelize');

// Set up the database connection
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

// Import models
const Profile = require('../models/profile')(sequelize, Sequelize.DataTypes);

// Sync all models with the database
sequelize.sync()
  .then(() => console.log('Database & tables created!'))
  .catch(err => console.error('Error during database sync:', err));

module.exports = { sequelize, Profile };
