const mongoose = require ('mongoose');

const HotelShema = new mongoose.Schema({
name:{type:String,require:true},
location:{type:String,require:true},
price:{type:String,require:true},
description:{type:String,require:true},
image:{type:String,require:true},
contactnumber:{type:String,require:true},
},{timestamps:true});

module.exports = mongoose.model('Hotel', HotelShema);
