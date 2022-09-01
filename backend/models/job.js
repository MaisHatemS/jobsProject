const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const city = require('./city');
const country = require('./country');
const sector = require('./sector');
const mongoosePagination=require('mongoose-paginate-v2');
const schema =mongoose.Schema;

const jobSchema= new schema({
    title:{
    type: String
},
city:{
    _id:{
        type:ObjectId
    },
    name:{
       type:String
    }
   },
   country:{
    _id:{
        type:ObjectId
    },
       name:{
           type:String
        }
   },
   sector:{
    _id:{
        type:ObjectId
    },
       name:{
           type:String
        }
   },
description:
{
    type:String
}


},{timestamps:true});


jobSchema.plugin(mongoosePagination);
const Job= mongoose.model('Jobs',jobSchema);
module.exports=Job;