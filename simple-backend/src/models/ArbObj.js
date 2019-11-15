var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ArbObj = new schema({
		field: {
			type: String
		}
});

module.exports = mongoose.model('ArbObj', ArbObj);