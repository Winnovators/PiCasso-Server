// Dependencies
var express = require('express');
var router = express.Router();

// Controllers
var picturesController = require('../controllers/picture');

// Routes
router.route('/pictures')
	.get(picturesController.getPictures);

router.route('/pictures/:picture_id')
	.put(picturesController.putPicture)
	.delete(picturesController.deletePicture);

router.route('/picture')
  .post(picturesController.getRandomPictureByTags);

module.exports = router;
