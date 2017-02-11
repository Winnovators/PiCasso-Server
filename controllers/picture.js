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

	Picture.findOne({url: req.body.url}, function(err, picture) {
		if (err) res.send(err);
		else if (picture === null) {
			pic.save(function(err) {
				if (err) res.send(err);
				else res.json(pic);
			});
		} else {
			res.status(400).json({message: 'Picture already exists'});
		}
	});
};

exports.putPicture = function(req, res) {
  Picture.findOne({_id: req.params.picture_id}, function(err, picture) {
    if (err) res.send(err);
    else if (picture !== null) {
      pic = Object.assign({}, pic, req.body);
      pic.save(function(err) {
        if (err) res.send(err);
        else res.json(pic);
      })
    } else {
      res.status(404).json({message: 'Picture does not exist'});
    }
  })
}

exports.deletePicture = function(req, res) {
  Picture.findByIdAndDelete(req.params.picture_id, function(err, picture) {
    if (err) res.send(err);
    else {
      res.status(200).json({message: "Deleted picture"});
    }
  })
}
