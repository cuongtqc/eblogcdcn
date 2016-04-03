var express = require('express');
var jade = require('jade');
var router = express.Router();

var num = 0;
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { 
		title: 'Eblog',
		number: num
	});
	num = 0;
});

router.get('/about', function(req, res, next) {
	res.render('about');
});

router.get('/work', function(req, res, next) {
	res.render('work');
});

router.get('/contact', function(req, res, next) {
	res.render('contact');
});

router.get('/bt/:number', function(req, res, next) {
	num = req.params.number;
	res.redirect('/');
});

module.exports = router;
