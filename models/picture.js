// deps
var mongoose = require('mongoose');

var pictureSchema = new mongoose.Schema({
	url: {type: String, required: true, unique: true},
	tags: {type: [String]}
});

module.exports = mongoose.model('Picture', pictureSchema);
