var express = require('express');
var app = express();
var router = express.Router();

var ArbObj = require('../models/ArbObj');

//get all
router.route('/').get(function(req, res){
	ArbObj.find(function(err, items){
		if(err){
			console.log(err);
		} else {
			res.json(items);
		}
	});
})

//add
router.route('/add').post(function(req, res){
	var item = new ArbObj(req.body);
	console.log('req.body=')
	console.log(req.body)
	item.save()
		.then(item => {
			res.json('added');
		})
		.catch( err => {
			res.status(400).send("unable to save");
		});
});


module.exports = router;