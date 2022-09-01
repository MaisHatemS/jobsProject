const mongoose = require('mongoose');

const schema =mongoose.Schema;

const countrySchema= new schema({
    name:{
    type: String
}

},{timestamps:true});

const country= mongoose.model('Country',countrySchema);
module.exports=country;