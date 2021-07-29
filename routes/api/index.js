// Combine API Routes
const router = require('express').Router();
const locationRoutes = require('./locationsRoutes');
const travellerRoutes = require('./travellersRoutes');
const tripRoutes = require('./tripsRoutes');

router.use('/locations', locationRoutes);
router.use('/travellers',travellerRoutes);
router.use('/trips',tripRoutes);

module.exports = router;