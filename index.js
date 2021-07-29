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

router.get('/api/locations', async (req, res) => {
    const locationData = await User.findAll().catch((err) => {
      res.json(err);
    });
    res.json(locationData);
  });

  router.post('/api/locations', async (req, res) => {
    try {
      const locationData = await Location.create(req.body);
      res.status(200).json(locationData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/api/locations/:id', async (req, res) => {
    const locationData = await Location.destroy({
      where: {
        id: req.params.id,
      },
    }).catch((err) => res.json(err));
    res.json(locationData);
  });

  router.get('/api/locations/:id', async (req, res) => {
    const locationData = await Location.findByPk(req.params.id).catch((err) =>
      res.json(err)
    );
    res.json(locationData);
  });






module.exports = router;