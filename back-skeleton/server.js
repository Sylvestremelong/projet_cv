const express = require('express');
const { Sequelize } = require('sequelize');
const config = require('./config/config').development;  // Ensure this path is correct
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

require('./src/api/routes')(app); // Importing routes

// Setup Sequelize
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

