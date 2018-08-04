module.exports = (router, Users, Items)=>{
  router.post('/add', async (req,res)=>{
    var itemResult = await Items.findOne({token : req.body.itemToken})
    if(!itemResult) return res.status(404).json({message : "Item not found"})
    var new_item = {
      img : itemResult.img,
      name : itemResult.name,
      price : itemResult.price,
      size : itemResult.size,
      company : itemResult.company
    }
    var result = await Users.update(
      {"token" : req.body.userToken},
      {$push : {basket : new_item}}
    )
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    res.status(200).json({message : "success!"})
  })
  .post('/del', async (req,res)=>{
    var result = await Users.update({token : req.body.userToken}, {$pop : {basket : req.body.name}})
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    else return res.status(200).json({message : "success!"})
  })
  .post('/list', async (req,res)=>{
    var result = await Users.findOne({token : req.body.token})
    if(!result) return res.status(404).json({message : "User not found!"})
    else return res.status(200).json({list : result.basket});
  })
  return router;
}
