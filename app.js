var express = require('express')
var app = express();
var bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const rndstring = require('randomstring')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

require('./func');
require('./mongo')

var authR = require('./routes/authR')(express, Users, rndstring);
var itemR = require('./routes/itemR')(express, Users, rndstring, Items, multer, fs, path)
app.use('/auth', authR);
app.use('/item', itemR);

app.listen(3030, ()=>{
  console.log('Server On!')
})
