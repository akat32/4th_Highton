var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/TimeStoneTest3');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () { console.log("Mongo On"); });

var UsersSchema = mongoose.Schema({
  id : {type : String},
  passwd : {type : String},
  name : {type : String},
  phone : {type : String},
  token  : {type : String},
  account : {type : String},
  jjim : [{
    img : {type : String},
    name : {type : String},
    price : {type : String},
    size : {type : String},
    company : {type : String}
  }],
  basket : [{
    img : {type : String},
    name : {type : String},
    price : {type : String},
    size : {type : String},
    company : {type : String}
  }]
})
var ItemsSchema = mongoose.Schema({
  img : {type : String},
  name : {type : String},
  price : {type : String},
  size : {type : String},
  company : {type : String},
  rating : {type : Number}
})
// 이미지, 옷이름, 가격, 사이즈, 회사, 구매 횟수
Users = mongoose.model('users', UsersSchema);
Items = mongoose.model('items', ItemsSchema);

//require('./err')(UsersSchema);

exports.Users = Users;
exports.Items = Items;
exports.db = db;
