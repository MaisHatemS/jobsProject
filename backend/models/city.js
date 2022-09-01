const mongoose = require('mongoose');

const schema =mongoose.Schema;

const citySchema= new schema({
    name:{
    type: String
}

},{timestamps:true});

const city= mongoose.model('City',citySchema);
module.exports=city;