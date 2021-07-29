// LOCATION ROUTES
const router = require('express').Router();
const Location = require('../../models/Location');

router.get('/locations', async (req, res) => {
    const locationData = await User.findAll().catch((err) => {
      res.json(err);
    });
    res.json(locationData);
  });

  router.post('/', async (req, res) => {
    try {
      const locationData = await Location.create(req.body);
      res.status(200).json(locationData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    const locationData = await Location.destroy({
      where: {
        id: req.params.id,
      },
    }).catch((err) => res.json(err));
    res.json(locationData);
  });

  router.get('/:id', async (req, res) => {
    const locationData = await Location.findByPk(req.params.id).catch((err) =>
      res.json(err)
    );
    res.json(locationData);
  });

  module.exports = router;
