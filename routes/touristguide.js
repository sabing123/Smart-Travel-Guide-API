const express = require('express');
const router = express.Router();
const touristguide = require('../model/touristguide');

router.route('/')

.get((req,res,next)=>{
    touristguide.find()
.then((Touristguides)=>{
    res.json(Touristguides);
}).catch((err) =>{console.log(err)});
})
.post((req,res,next)=>{

    touristguide.create(req.body)
    .then((Touristguides)=>{
        res.json(Touristguides);
    }).catch(next);
})
.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next)=>{
    touristguide.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);

});

router.route('/:id')
.get((req,res,next)=>{
    touristguide.findById(req.params.id)
    .then((Touristguides) =>{
    res.json(Touristguides);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    touristguide.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((Touristguides) =>{
    res.json(Touristguides);
}).catch(next);
})

.delete((req,res,next)=>{
    touristguide.findByIdAndDelete(req.params.id)
    .then((Touristguides) => {
        res.json(Touristguides);
}).catch(next);
});


module.exports = router;