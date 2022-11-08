const router = require('express').Router();
const { Traveler, Trip, Location } = require('../../models');

// GET all travellers
router.get('/', async (req, res) => {
  try {
    const travelerData = await Traveler.findAll();
    res.status(200).json(travelerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single traveller
router.get('/:id', async (req, res) => {
  try {
    const travelerData = await Traveler.findByPk(req.params.id, {
      // JOIN with locations, using the Trip through table
      include: [{ model: Location, through: Trip, as: 'planned_trips' }]
    });

    if (!travelerData) {
      res.status(404).json({ message: 'No traveller found with this id!' });
      return;
    }

    res.status(200).json(travelerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a traveller
router.post('/', async (req, res) => {
  try {
    const travelerData = await Traveler.create(req.body);
    res.status(200).json(travelerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a traveller
router.delete('/:id', async (req, res) => {
  try {
    const travelerData = await Traveler.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!travelerData) {
      res.status(404).json({ message: 'No traveller found with this id!' });
      return;
    }

    res.status(200).json(travelerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;