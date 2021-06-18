const mongoose = require ('mongoose');
cabdetailsSchema = new mongoose.Schema({
    
    driverimage:{type:String,require:true},
    name:{type: String,required: true},
    contactnumber:{type:String,require:true},
    price:{type:String,require:true},
    description:{type:String,require:true},
    
    cabname:{type:String,require:true},
    cabmodel:{type:String,require:true},
    cabImage:{type:String,require:true},
    cabdescription:{type:String,require:true}
   
});

module.exports = mongoose.model('cabdetails', cabdetailsSchema);
