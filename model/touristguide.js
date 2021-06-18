
const mongoose = require('mongoose');

const TouristGuideSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    contact:{
        type:String,
        require:true 
    },
    description:{
        type:String,
        require:true
    },
    language:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }
},{timestamps:true});

module.exports = mongoose.model('TouristGuide',TouristGuideSchema);