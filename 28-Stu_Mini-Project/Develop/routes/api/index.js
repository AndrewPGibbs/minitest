const router = require('express').Router();
const travelerRoutes = require('./travelerRoutes');
const locationRoutes = require('./locationRoutes');
const tripRoutes = require('./tripRoutes');

router.use('/travelers', travelerRoutes);
router.use('/locations', locationRoutes);
router.use('/trips', tripRoutes);


module.exports = router;