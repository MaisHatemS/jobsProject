const mongoose = require('mongoose');

const schema =mongoose.Schema;

const sectorSchema= new schema({
    name:{
    type: String
}

},{timestamps:true});

const sector= mongoose.model('Sector',sectorSchema);
module.exports=sector;