module.exports = (router, Items, multer, fs, path, rndstring)=>{
  const upload = multer({
    storage: multer.diskStorage({
      destination: (req,file,cb)=>{
        cb(null, '/root/meouk/4th_Highton/public/img/'); ///root/meouk/MeoukTalk/public/profile/
      },
      filename: (req,file,cb)=>{
        var newStr = rndstring.generate(33);
        newStr = newStr + ".PNG"
        cb(null, newStr);
      }
    }),
    limits: {
      fileSize: 5 * 1024 * 1024
    }
  });
  router.post('/', upload.single('img'), async (req,res)=>{
    var fName = req.file.filename;
    fName = "http://" + "iwin247.kr:3030/img/" + fName;
    var new_item = new Items({
      img : fName,
      name : req.body.name.replace(/"/gi,''),
      price : req.body.price.replace(/"/gi,''),
      size : req.body.size.replace(/"/gi,''),
      company : req.body.company.replace(/"/gi,''),
      rating : 0,
      token : rndstring.generate(25),
      season : req.body.season.replace(/"/gi,''),
    })
    var result = await new_item.save();
    if(!result.ok) return res.status(200).json({message : "success!"});
    else return res.status(500).json({message : "ERR!"});
  })
  .post('/aa', async (req,res)=>{
    var result = await Items.find();
    res.send(result);
  })
  return router;
}
