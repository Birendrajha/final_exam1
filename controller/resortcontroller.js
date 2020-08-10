const express=require('express')
const router=express.Router()
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const Restaurant=require ('../model/resort')

router.post("/find", (req, res) => {
    const { errors, isValid } = validateInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { lat, long, distance } = req.body;

  Restaurant.find({
    "address": {
      $nearSphere: {
        $geometry: { coordinates: [lat, long] },
        $maxDistance: distance * 3963,
      },
      },
      "grade.score": { $gt: 15 },
      "grade":{ $elemMatch: { "grade": "xyz", } }
      
  }).then((result) => {
    res.status(200).json({data:result});
  });
});

module.exports=router