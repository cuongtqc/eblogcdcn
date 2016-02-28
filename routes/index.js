var express = require('express');
var jade = require('jade');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { 
		title: 'Eblog'
	});
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

module.exports = router;