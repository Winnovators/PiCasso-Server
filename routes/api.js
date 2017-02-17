// Dependencies
var express = require('express');
var router = express.Router();

// Controllers
var picturesController = require('../controllers/picture');

// Routes
router.route('/pictures')
	.get(picturesController.getPictures)
	.post(picturesController.postPictures);

router.route('/pictures/:picture_id')
	.put(picturesController.putPicture)
	.delete(picturesController.deletePicture);
<<<<<<< HEAD

router.route('/picture')
  .post(picturesController.getRandomPictureByTags);

=======
  
>>>>>>> 1c1673aa7dc2774e80f8dfdee239dcfa03f2d7b0
module.exports = router;
