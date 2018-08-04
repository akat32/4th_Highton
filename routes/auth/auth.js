module.exports = (router, Users, rndstring)=>{
  router.get('/', (req,res)=>{
    res.send('asd');
  })
  .post('/signin', async (req,res)=>{
    var result = await Users.findOne(req.body);
    if(!result) return res.status(404).json({message : "User not found!"})
    else return res.status(200).json(result)
  })
  .post('/signup', async (req,res)=>{
    var new_user = new Users(req.body);
    new_user.token = rndstring.generate(23);
    var result = await new_user.save();
    if(!result.ok) return res.status(200).json({message : "success!"});
    else return res.status(500).json({message : "ERR!"});
  })
  return router;
}
