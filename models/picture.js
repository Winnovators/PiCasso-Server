// deps
var mongoose = require('mongoose');
var random = require('mongoose-simple-random');

var pictureSchema = new mongoose.Schema({
	url: {type: String, required: true, unique: true},
	tags: {type: [String]}
});
pictureSchema.plugin(random);

module.exports = mongoose.model('Picture', pictureSchema);
