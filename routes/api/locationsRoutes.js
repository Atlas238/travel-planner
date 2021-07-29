// LOCATION ROUTES
const router = require('express').Router();
const Location = require('../../models/Location');

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
