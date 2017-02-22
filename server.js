// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var multer = require('multer');
var upload = multer({dest: './uploads'});

// MongoDB Instance
mongoose.connect('localhost:27017');

// Express + middleware
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

app.post('/upload', upload.single('photo'), function(req, res) {
  console.log(req.body) // form fields
  console.log(req.file) // form files
  res.status(204).end()
});

// Start
app.listen(8080);
