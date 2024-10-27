const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to PostgreSQL
const sequelize = new Sequelize('example_db', 'your_username', 'your_password', {
    host: 'localhost',
    dialect: 'postgres',
});

// Test the database connection
sequelize.authenticate()
    .then(() => console.log('Connected to the database.'))
    .catch(err => console.error('Unable to connect to the database:', err));

app.listen(PORT, () => {
    console.log(`Server is running `);
});
