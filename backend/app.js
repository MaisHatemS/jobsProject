var express = require('express');
var path = require('path');
const mongoos =require('mongoose');
var logger = require('morgan');
const cors = require('cors');
var indexRouter = require('./routes/index');
var postsRouter = require('./routes/posts');
const lookupRouter = require('./routes/lookup');
const jobRouter=require('./routes/job');
const dbUri="mongodb+srv://user:123321@cluster0.uo29gsv.mongodb.net/JobsApp?retryWrites=true&w=majority"

mongoos.connect(dbUri,{useNewUrlParser:true,useUnifiedTopology:true})
const db =mongoos.connection

db.on('error',(err)=>{
    console.log(err)
})

db.once('open',()=>{

    console.log('DataBase Connection Established!')
})


var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/posts', postsRouter);
app.use('/api/job',jobRouter);
app.use('/api/job',lookupRouter);
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message || "Something went wrong. Please try again",
      status: err.status || 500
    });
  });
const PORT =process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
module.exports = app;
