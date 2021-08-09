const express = require('express');
const router = express.Router();
const db = require('../../database');

router.get('/', function (req, res) {
    db.select().from('activities').then(function (data) {
        res.send(data);
    });
});
router.post('/', function (req, res) {
    db.insert(req.body).returning('*').into('activities').then(function (data) { //insert en return in activities
        res.send(data);
    })
});
router.patch('/:id', function (req, res) { //select id en veranderen
    db('activities').where({id: req.params.id}).update(req.body).returning('*').then(function (data) {
        res.send(data);
    });
});

router.put('/:id', function (req, res) { //select id en veranderen
    db('activities').where({id: req.params.id}).update({
        date: req.body.date || null,
        activity: req.body.activity || null,
        duration: req.body.duration || null,
        description: req.body.description || null
    }).returning('*').then(function (data) {
        res.send(data);
    });
});
module.exports = router;