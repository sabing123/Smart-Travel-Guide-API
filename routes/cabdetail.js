const express = require('express');
const router = express.Router();
const cabdetails = require('../model/cabDetails');

router.route('/')
.get((req,res,next)=>{
    cabdetails.find()
        .then((cabdetails)=>{
            res.json(cabdetails);
        }).catch(next);
})

.post((req,res,next)=>{
    cabdetails.create(req.body)
    .then((cabdetails)=>{
        res.json(cabdetails);
    }).catch(next);
})

.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next)=>{
    cabdetails.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);

});

router.route('/:id')
.get((req,res,next)=>{
    cabdetails.findById(req.params.id)
    .then((cabdetails) =>{
    res.json(cabdetails);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    cabdetails.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((cabdetails) =>{
    res.json(cabdetails);
}).catch(next);
})

.delete((req,res,next)=>{
    cabdetails.findByIdAndDelete(req.params.id)
    .then((cabdetails) => {
        res.json(cabdetails);
}).catch(next);
});


module.exports = router;