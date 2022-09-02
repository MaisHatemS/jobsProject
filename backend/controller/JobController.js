const Job = require('../models/job');
const sector = require('../models/sector');



// const searchFilter=(req,res,next)=>{
//     res.setHeader('Content-Type', 'application/json');
//     if(req.query.query){//title Search Filter
//         console.log(query);
//         Job.find({
//             "$or":[
//                 {title:{$regex:req.query.query}}
//             ]
//         }).then(response=>{
//             res.status(200).json({
//                 response
//             })
//            }).catch(error=>{
//             res.status(400).json({
//                 message:"An error Occured :"+error
//             })
          
//            })
//         }
//         else{
//             Job.find()
//        .then(response=>{
//         res.status(200).json({
//             response
//         })
//        }).catch(error=>{
//         res.status(400).json({
//             message:"An error Occured :"+error
//         })
      
//        })
//         }
//     }
const index =(req,res,next)=>{
   console.log(req.query);
    if(req.query.page && req.query.limit){
        // let skip = (page - 1) * pageSize;
        if(req.query.query){

            if(req.query.sector|| req.query.country|| req.query.city){
                console.log(req.query.country);
                let filter={};
                filter={city:req.query.city.split(','),country:req.query.country.split(','),sector:req.query.sector.split(','),
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
            else{
                let filter={};
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
       else if(req.query.sector|| req.query.country|| req.query.city){
            let filter={};
            // filter={
            //     "$or":[
            //       {"sector":{$regex:req.query.sector.split(',')}},
            //         {"country":{$regex:req.query.country.split(',')}},
            //         {"city":{$regex:req.query.city.split(',')}}


            //     ]
            // }
              if(req.query.sector)
            filter.sector=req.query.sector.split(',');
            if(req.query.country)
            filter.country=req.query.country.split(',');
            if(req.query.city)
            filter.city=req.query.city.split(',');
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
        else{
            Job.paginate({},{page:req.query.page,limit:req.query.limit})
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