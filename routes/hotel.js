const express = require('express');
const router = express.Router();
const Hotel = require('../model/hotel');

router.route('/')
.get((req,res,next)=>{
Hotel.find()
.then((hotels)=>{
    res.json(hotels);
}).catch((err) =>{console.log(err)});
})
.post((req,res,next)=>{
    Hotel.create(req.body)
    .then((hotels)=>{
        res.json(hotels);
    }).catch(next);
})
.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next)=>{
    Hotel.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);

});

router.route('/:id')
.get((req,res,next)=>{
    Hotel.findById(req.params.id)
    .then((hotels) =>{
    res.json(hotels);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    Hotel.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((hotels) =>{
    res.json(hotels);
}).catch(next);
})

.delete((req,res,next)=>{
    Hotel.findByIdAndDelete(req.params.id)
    .then((hotels) => {
        res.json(hotels);
}).catch(next);
});


module.exports = router;
