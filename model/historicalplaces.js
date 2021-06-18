
const mongoose = require ('mongoose');

const historicalplaceSchema = new mongoose.Schema({
        name:{type: String,required: true},
        location:{type:String,require:true},
        description:{type:String,require:true},
        timing:{type:String,require:true},
        EntryFree:{type:String,require:true},
        image:{type:String,require:true},
    
});

module.exports = mongoose.model('historicalplace', historicalplaceSchema);