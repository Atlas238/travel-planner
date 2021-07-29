// SERVER FILE
const express = require('express');
const sequelize = require('./config/connection');
require('dotenv').config();
const userRoutes = require('./routes');

const app = express();
const PORT = process.env.PORT|| 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', userRoutes);

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});