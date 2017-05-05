var express = require('express');
var router = express.Router();
var controllers = require('../controllers');
var request = require('request');
var slack = require('slack');
// for dev only, comment out when deploying
//require('dotenv').config()
var SLACK_TOKEN = process.env.SLACK_TOKEN;
var GCAL_TOKEN = process.env.GCAL_TOKEN;
var GCAL_ID = process.env.GCAL_ID;

// SLACK API GET ROUTE
router.get('/slack', function (req, res, next) {
    slack.users.list({token: SLACK_TOKEN}, function (err, data) {
        if (err) {
            res.json({
                token: SLACK_TOKEN,
                confirmation: 'Failed',
                message: err
            })
            return
        }
        res.json(data)
    })
})

// GOOGLE CALENDAR GET ROUTE
router.get('/calendar', function (req, res, next) {
    console.log('gcal token: ' + GCAL_ID)
    var queryUrl = `https://www.googleapis.com/calendar/v3/calendars/${GCAL_ID}/events?key=${GCAL_TOKEN}`
    request({
        url: queryUrl,
        json: true
    }, function (error, response, body) {
        if (error) {
            res.json({
                token: SLACK_TOKEN,
                confirmation: 'Failed',
                message: error
            })
            return
        }
        res.json(body)
    });
})

// GET route to find all
router.get('/:resource', function (req, res, next) {
    var resource = req.params.resource
    var controller = controllers[resource]

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource Request: ' + resource
        })
        return
    }

    controller.find(req.query, function (err, results) {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: err
            })
            return
        }
        res.json({
            confirmation: 'success',
            results: results
        })
    })
})

// GET route to find by id
router.get('/:resource/:id', function (req, res, next) {
    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource];

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource Request: ' + resource
        })
        return
    }

    controller.findById(id, function (err, results) {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: 'Not Found'
            })
            return
        }
        res.json({
            confirmation: 'success',
            results: results
        })
    })
})

// DELETE route to delete by id
router.delete('/:resource/:id', function (req, res, next) {
    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource];

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource Request: ' + resource
        })
        return
    }

    controller.delete(id, function (err, results) {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: 'id not found: ' + id
            })
            return
        }
        res.json({
            confirmation: 'success',
            results: results
        })
    })
})

// PUT route to update by id
router.put('/:resource/:id', function (req, res, next) {

    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource];

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource Request: ' + resource
        })
        return
    }

    controller.update(id, req.body, function (err, results) {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: 'Not Found'
            })
            return
        }
        res.json({
            confirmation: 'success',
            results: results
        })
    })
})


// POST route to create a new employee
router.post('/:resource', function (req, res, next) {

    var resource = req.params.resource;
    var controller = controllers[resource];

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource Request: ' + resource
        })
        return
    }

    controller.create(req.body, function (err, results) {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: err
            })
            return
        }
        res.json({
            confirmation: 'success',
            results: results
        })
    })
})

// POST route to create new vacation then associate vacation data to corresponding employee
router.post('/:resource/:id', function (req, res, next) {
    var id = req.params.id;
    console.log('create vacation with emp id: ' + id);

    var resource = req.params.resource;
    var controller = controllers[resource];

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource Request: ' + resource
        })
        return
    }
    // create the new vacation
    controller.create(req.body, function (err, results) {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: err
            })
            return
        } else {
            // switch to employee controller
            var controller = controllers['employee'];
            // grab the vacation id
            // use employee id to push the vacation information on employee data
            controller.findOneAndUpdate(id, results, function (err, employee) {
                if (err) {
                    res.json({
                        confirmation: 'fail',
                        message: err
                    })
                    return
                }
                res.json({
                    confirmation: 'success',
                    results: employee
                })
            })

        }
    })
})



module.exports = router;