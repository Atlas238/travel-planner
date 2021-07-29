// SERVER FILE
const express = require('express');
const sequelize = require('./config/connection');
require('dotenv').config();
const userRoutes = require('./userRoutes');
router.use('/users', userRoutes);

const app = express();
const PORT = process.env.PORT|| 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});

module.exports = router;