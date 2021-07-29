// TRIPS ROUTES
const router = require('express').Router();
const Trips = require('../../models/Trips');

router.post('/trips', async (req, res) => {
    try {
        const newTrip = await Trips.create(req.body)
        res.status(200).json(newTrip);
    } catch (err) {
        res.status(401).json(err);
    }
});

router.delete('/trips/:id', async (req, res) => {
    try {
        const delTrip = await Trips.destroy({ where: {id: req.body.id} });
        res.status(200).json(delTrip);
    } catch (err) {
        res.status(404).json(err);
    }
});