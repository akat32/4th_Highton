module.exports = (router, Users, rndstring)=>{
  router.get('/', (req,res)=>{
    res.send('asd');
  })
  .post('/signin', async (req,res)=>{
    var result = await Users.findOne(req.body);
    if(!result) return res.status(404).json({message : "User not found!"})
    else return res.status(200).json({token : result.token})
  })
  .post('/signup', async (req,res)=>{
    var new_user = new Users(req.body);
    new_user.token = rndstring.generate(23);
    try{
      var result = await new_user.save();
    }catch(e){
      if(e instanceof user_duplicate) return res.status(409).json({message:"already exist"});
      if(e instanceof ValidationError) return res.status(400).json({message: e.message});
      if(e instanceof paramsError) return res.status(400).json({message: e.message});
    }
    return res.status(200).json({message : "success!"});
  })
  .post('/aa', async(req,res)=>{
    var result = await Users.find()
    res.send(result)
  })
  return router;
}
