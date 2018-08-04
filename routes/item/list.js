module.exports = (router, Items)=>{
  router.post('/', async (req,res)=>{
    var result = await Items.find(req.body)
    if(!result) return res.status(404).json({message : "Item not found!"})
    result.sort((a,b)=>{
      return a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0;
    })
    return res.status(200).json(result)
  })
  return router;
}
