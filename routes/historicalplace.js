const express = require('express');
const router = express.Router();
const historicalplace = require('../model/historicalplaces');

router.route('/')
.get((req,res,next)=>{
    historicalplace.find()
        .then((historicalplaces)=>{
            res.json(historicalplaces);
        }).catch(next);
})

.post((req,res,next)=>{
    historicalplace.create(req.body)
    .then((historicalplaces)=>{
        res.json(historicalplaces);
    }).catch(next);
})

.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next)=>{
    historicalplace.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);

});

router.route('/:id')
.get((req,res,next)=>{
    historicalplace.findById(req.params.id)
    .then((historicalplaces) =>{
    res.json(historicalplaces);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    historicalplace.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((historicalplaces) =>{
    res.json(historicalplaces);
}).catch(next);
})

.delete((req,res,next)=>{
    historicalplace.findByIdAndDelete(req.params.id)
    .then((historicalplaces) => {
        res.json(historicalplaces);
}).catch(next);
});


module.exports = router;