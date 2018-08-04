module.exports = (express, Users, rndstring)=>{
  var router = express.Router();
  var auth = require('./auth/auth')(express.Router(), Users, rndstring);
  var auto = require('./auth/auto')(express.Router(), Users);
  router.use('/', auth);
  router.use('/auto', auto);
  return router;
}
