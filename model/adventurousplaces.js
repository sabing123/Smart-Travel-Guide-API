const mongoose = require ('mongoose');

const adventurousplaceSchema = new mongoose.Schema({
    name:{type: String,required: true},
    location:{type:String,require:true},
    description:{type:String,require:true},
    price:{type:String,require:true},
    BestTimeToVisit:{type:String},
    image:{type:String,require:true}

});

module.exports = mongoose.model('adventurousgplace', adventurousplaceSchema);