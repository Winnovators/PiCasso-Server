// Dependencies
var express = require('express');
var router = express.Router();

// Controllers
var picturesController = require('../controllers/pictures');

// Routes
router.route('/pictures')
	.get(picturesController.getPicture)
	.post(picturesController.postPicture);

router.route('/pictures/:picture_id')
	.put(picturesController.putPicture)
	.delete(picturesController.deletePicture);
  
module.exports = router;
