const Partenaire = require('../models/partenaire');
const cloudinary = require('cloudinary');

// CREATE Partenaire
exports.createPartenaire = async (req, res, next) => {
  // handling the image 
  var imageUrl = "http://res.cloudinary.com/dqwg8dwph/image/upload/v1626548988/samples/cloudinary-logo-vector.svg"//a logo default
  try {
      const fileStr = req.body.imageUrl
       await cloudinary.uploader.upload(fileStr,{
          upload_preset : 'photos'
      }).then((res)=>{
          imageUrl = res.url;
          proprieteLogo= res.height+" * "+ res.width ;
          console.log("proprieteLogo : ", proprieteLogo)
          console.log("imageUrl : ", imageUrl)
      })
  } catch (error) {
      console.log(error)
  }
  ////////////////
 const partenaire = new Partenaire({
       userName: req.body.userName,
       imageUrl,
       proprieteLogo,
       nomP: req.body.nomP,
      
 });

 partenaire.save().then(result =>{
   console.log(result);
 }).catch(err => console.log(err));
 res.status(201).json({
   message : "post image work",
   createdPartenaire: partenaire
 });
};

// GET ALL Partenaires
exports.getAllPartenaire = (req, res, next) => {
  Partenaire.find()
      .then((ev) => res.status(200).json(ev))
      .catch(err => res.status(400).json({ error: err }))
}

//GET Single Partenaire
exports.getOnePartenaire = (req, res, next) => {
  Partenaire.findById(req.params.id) // or Partenaire.findOne({_id : req.params.id})
      .then((ev) => res.status(200).json(ev))
      .catch(err => res.status(400).json({ error: err }))
}

//Delete Partenaire
exports.deletePartenaire = (req, res, next) => {
    Partenaire.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ msg: `Partenaire with id : ${req.params.id} has been removed` }))
      .catch(err => res.status(400).json({ error: err }))
}

//Update Partenaire
exports.modifyPartenaire = async (req, res, next) => {
  // handling the image 
  if(req.body.imageUrl.startsWith("http")){
      imageUrl = req.body.imageUrl
  }else{
  var imageUrl = "http://res.cloudinary.com/esprit456/image/upload/v1617904764/e-learning/id9xkfigxaozuwuimiox.png"//a logo default
  
  try {
      const fileStr = req.body.imageUrl
      const uploadedResponse = await cloudinary.uploader.upload(fileStr,{
          upload_preset : 'photos'
      })
      imageUrl = uploadedResponse.url
      proprieteLogo = uploadedResponse.height+" * "+uploadedResponse.width
  } catch (error) {
      console.log(error)
  }

  }
  ////////////////

  Partenaire.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id,imageUrl:imageUrl,proprieteLogo:proprieteLogo })
      .then(() => res.status(200).json({ msg: 'Partenaire modified' }))
      .catch(err => res.status(400).json({ error: err }))
}