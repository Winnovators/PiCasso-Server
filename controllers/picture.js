var Picture = require('../models/picture');

exports.getPictures = function(req, res) {
	Picture.find()
		.exec(function(err, pictures) {
			if (err) res.send(err);
			else {
				res.json(pictures);
			}
		});
};

exports.postPictures = function(req, res) {
	var pic = new Picture();
	pic.url = req.body.url;
	pic.tags = [];

	Picture.findOne({value: req.body.url}, function(err, picture) {
		if (err) res.send(err);
		else if (picture === null) {
			pic.save(function(err) {
				if (err) res.send(err);
				else res.json(newTag);
			});
		} else {
			res.status(400).json({message: 'Picture already exists'});
		}
	});
};
