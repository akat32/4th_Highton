module.exports = (router, Users)=>{
  router.get('/:token', async (req,res)=>{ // D5qS3kxBAavQiaNrdZav1au
    var result = await Users.findOne({token : req.params.token})
    if(!result) return res.status(404).json({message : "User not found!"})
    else return res.status(200).json(result)
  })
  return router;
}
