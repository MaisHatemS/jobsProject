const Job = require('../models/job');
const sector = require('../models/sector');


const index =(req,res,next)=>{
    let filter={};
    if(req.query.page && req.query.limit){
        if(req.query.query){
            if(req.query.sector|| req.query.country|| req.query.city){
                filter={};
                filter={
                    'sector': req.query.sector?req.query.sector.split(','):null  ,
                    'city':req.query.city?req.query.city.split(','):null,
                    'country':req.query.country?req.query.country.split(','):null,
                    "$or":[
                        {title:{$regex:req.query.query}}
                   ]
                }
               Job.paginate(filter,{page:req.query.page,limit:req.query.limit})
               .then(response=>{
                res.json({
                    response
                })
               }).catch(error=>{
                res.json({
                    message:"An error Occured :"+error
                })
              
               })
            }
             else  {
                filter={};
                filter={
                    "$or":[{title:{$regex:req.query.query}}]
                }
                Job.paginate(filter,{page:req.query.page,limit:req.query.limit})
                .then(response=>{
                 res.json({
                     response
                 })
                }).catch(error=>{
                 res.json({
                     message:"An error Occured :"+error
                 })
               
                })
            }
            }
        else {
            filter={}
           
          
            if(req.query.sector)
           filter= Object.assign(filter,{'sector._id': req.query.sector.split(',')} )
            if(req.query.country)
            filter= Object.assign(filter,{'country._id': req.query.country.split(',')} )
            if(req.query.city)
            filter= Object.assign(filter,{'city._id': req.query.city.split(',')} )
            console.log(filter);
            Job.paginate(filter,{page:req.query.page,limit:req.query.limit})
        .then(response=>{
         res.json({
             response
         })
        }).catch(error=>{
         res.json({
             message:"An error Occured :"+error
         })
       
        })
        }
    }
    else{
        Job.find()
        .then(response=>{
         res.status(200).json({
             response
         })
        }).catch(error=>{
         res.status(400).json({
             message:"An error Occured :"+error
         })
       
        })
    }
   
}


const show =(req,res,next)=>{
    let jobID = req.body.jobID
    Job.findById(jobID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(err=>{
        res.json({
            message:'An error Occured !'
        })
    })
}
const store =(req,res,next)=>{
    // console.log(req.jobimg);
    // const { name } = req.body;
    // const imagePath = 'http://localhost:3000/upload/' + req.file.filename; 
    let job =new Job({
        title: req.body.title,
        description:req.body.description,
        city:req.body.city,
        country:req.body.country,
        sector:req.body.sector,
        // jobImg:req.file.path
    });
    job.save()
    .then(response=>{
        res.status(200).json({
          response
        })
    })
        .catch(err=>{
            res.json({
                message:'An error Occured !'+err
            })
          
       
    })

}

const destroy=(req,res,next)=>{
    let jobID=req.body._id
    console.log(jobID);
    Job.findByIdAndDelete(jobID)
    .then(response=>{
        res.json({
            message:'Job Deleted Successfully'
        })
    })
        .catch(err=>
            { console.log(err); next(err) }
        )
   
}

module.exports={
    index,show,store,destroy
}