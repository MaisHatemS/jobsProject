const Job = require('../models/job');


const index =(req,res,next)=>{
    if(req.query._page && req.query._limit){
        Job.paginate({},{page:req.query._page,limit:req.query._limit})
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
    
    let job =new Job({
        title: req.body.title,
        description:req.body.description,
        city:req.body.city,
        country:req.body.country,
        sector:req.body.sector
    });
    job.save()
    .then(response=>{
        res.json({
            message:'Job Added Successfully'
        })
    })
        .catch(err=>{
            res.json({
                message:'An error Occured !'
            })
          
       
    })

}

const destroy=(req,res,next)=>{
    let jobID=req.body.jobID
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