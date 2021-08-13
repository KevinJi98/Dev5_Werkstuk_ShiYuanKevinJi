const express = require ('express');
const router = express.Router();
const activitiesRoute = require('./activities');
const categoryRoute = require('./category');


router.use('/activities', activitiesRoute);
router.use('/category', categoryRoute);

module.exports = router;