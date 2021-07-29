// TRAVELLERS ROUTES
const router = require('express').Router();
const Traveller = require('../../models/Traveller');

// GET /api/travellers 
router.get('/travellers', async (req, res) => {
    try {
        const travellersData = await Traveller.findAll();
        res.status(200).json(travellersData);
    } catch (err) {
        res.status(401).json(err);
    }
});

// POST /api/travellers
router.post('/travellers', async (req, res) => {
    try {
        const newTraveller = await Traveller.create(req.body);
        res.status(200).json(newTraveller);

    } catch (err) {
        res.status(401).json(err);
    }
})

// GET /api/travellers/:id
router.get('/travellers/:id', async (req, res) => {
    try {
        const travellerById = await Traveller.findOne({ where: {id: req.body.id} });
        res.status(200).json(travellerById);
    } catch (err) {
        res.status(404).json(err);
    }
})

// DELETE /api/travellers/:id
router.delete('/travellers/:id', async (req, res) => {
    try {
        const delTraveller = await Traveller.destroy({ where: {id: req.body.id} });
        res.status(200).json(delTraveller);
    } catch (err) {
        res.status(404).json(err);
    }
})