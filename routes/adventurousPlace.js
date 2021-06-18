const express = require('express');
const router = express.Router();
const adventurousplaces = require('../model/adventurousplaces');

router.route('/')
.get((req,res,next)=>{
    adventurousplaces.find()
        .then((adventurousplaces)=>{
            res.json(adventurousplaces);
        }).catch(next);
})

.post((req,res,next)=>{
    adventurousplaces.create(req.body)
    .then((adventurousplaces)=>{
        res.json(adventurousplaces);
    }).catch(next);
})

.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next)=>{
    adventurousplaces.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);

});

router.route('/:id')
.get((req,res,next)=>{
    adventurousplaces.findById(req.params.id)
    .then((adventurousplaces) =>{
    res.json(adventurousplaces);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    adventurousplaces.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((adventurousplaces) =>{
    res.json(adventurousplaces);
}).catch(next);
})

.delete((req,res,next)=>{
    adventurousplaces.findByIdAndDelete(req.params.id)
    .then((adventurousplaces) => {
        res.json(adventurousplaces);
}).catch(next);
});


module.exports = router;