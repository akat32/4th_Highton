module.exports = (express, Users, rndstring, Items, multer, fs, path)=>{
  var router = express.Router();
  var input = require('./item/input')(express.Router(), Items, multer, fs, path, rndstring)
  var list = require('./item/list')(express.Router(), Items)
  router.use('/input', input)
  router.use('/list', list)
  return router;
}
