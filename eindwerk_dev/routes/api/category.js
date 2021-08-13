const express = require('express');
const router = express.Router();
const db = require('../../database');

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', "origin, X-Requested-With,content-type,accept");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,Server,Date,access-control-allow-methods,access-control-allow-origin");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
    next();
})


//geordend volgens id
router.get('/', function (req, res) {
    db.select().from('category').orderBy('uuid_').then(function (data) {
        res.send(data);
    });
});


//insert en return in activities
router.post('/', function (req, res) {
    db.insert(req.body).returning('*').into('category').then(function (data) {
        res.send(data);
    })
});


//select id en veranderen, patch
router.patch('/:uuid_', function (req, res) {
    db('category').where({
        uuid_: req.params.uuid_
    }).update(req.body).returning('*').then(function (data) {
        res.send(data);
    });
});


//Editen van een property in table, als niks ingegeven --> value null
router.put('/:uuid_', function (req, res) { //select id en veranderen
    db('category').where({
        uuid_: req.params.uuid_
    }).update({
        activitycategory: req.body.activity || null,
        totalduration: req.body.duration || null,
    }).returning('*').then(function (data) {
        res.send(data);
    });
});
//Verschil put en patch is dat put een null gaat geven als je geen value geeft
// patch gaat gewoon negeren en de oude value houden


//deleten volgens uuid
router.delete('/:uuid_', function (req, res) {
    db('category').where({
        uuid_: req.params.uuid_
    }).del().then(function () {
        res.json({
            success: true
        });
    });
});


//get uuid
router.get('/:uuid_', function (req, res) {
    db('category').where({
        uuid_: req.params.uuid_
    }).select().then(function (data) {
        res.send(data);
    });
});

module.exports = router;