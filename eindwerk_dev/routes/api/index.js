const express = require ('express');
const router = express.Router();
const todoRoute = require('./activities');

router.use('/activities', todoRoute);

module.exports = router;