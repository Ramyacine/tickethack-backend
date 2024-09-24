require("dotenv").config() 
require("./models/connection") 
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const tripsRouter =require('./routes/trips')
const cartsRouter = require('./routes/carts');
const bookingRouter = require('./routes/booking');

var app = express();
const cors = require("cors");

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/trips', tripsRouter);
app.use('/carts', cartsRouter);
app.use('/booking', bookingRouter);

module.exports = app;
