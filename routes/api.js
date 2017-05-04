var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

// GET route to find all
router.get('/:resource', function (req, res, next) {
    var resource = req.params.resource;
    var controller = controllers[resource];

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