// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB Instance
mongoose.connect(process.env.MONGODB_URI);

// Express + middleware
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.use('/api', auth.authenticate(), require('./routes/api'));

// Start
app.listen(process.env.PORT);
