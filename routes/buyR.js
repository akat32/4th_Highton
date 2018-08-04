module.exports = (express, Users, Items)=>{
  var router = express.Router();
  var bucket = require('./buy/bucket')(express.Router(), Users, Items);
  var buy = require('./buy/buy')(express.Router(), Users, Items)
  router.use('/bucket', bucket)
  router.use('/buy', buy)
  return router;
}
