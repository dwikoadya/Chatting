var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')

var chatRouter = require('./routes/chats');
mongoose.connect('mongodb://localhost:27017/chattingdb', {useNewUrlParser: true, useUnifiedTopology: true}) 

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/chats', chatRouter);

module.exports = app;
