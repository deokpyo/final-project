var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Employee Tracker' });
});

router.get('/calendar', function(req, res, next) {
  res.render('index', { title: 'Employee Tracker' });
});

router.get('/employees', function(req, res, next) {
  res.render('index', { title: 'Employee Tracker' });
});

router.get('/vacations', function(req, res, next) {
  res.render('index', { title: 'Employee Tracker' });
});

module.exports = router;
