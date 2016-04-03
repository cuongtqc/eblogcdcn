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

router.get('/images/w2/*', function(req, res, next) {
	var imagePath = req.url,
	    url = 'https://eblogcdcn.herokuapp.com' + imagePath;

	request(url, function(error, response, img) {
		if(!error && response.statusCode === 200) {
			res.header('Access-Control-Allow-Origin', '*');
			res.writeHead(200, {'Content-Type': 'image/png' });
			res.end(img, 'binary');
	    } else if(response.statusCode === 404) {
			res.status(404);
			res.type('txt').send('oops');
	    }
	});
});

module.exports = router;
