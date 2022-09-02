const express =require('express')
const router =express.Router()
const multer  = require('multer')

const filterFile=(req,file,cb)=>{

    if(file.mimitype==='image/jpeg'|| file.mimitype === 'image/jpg' || __filename.mimitype ==='image/png')
    cb(null,true);
    else
    cb(null,false);
};
const storage =multer.diskStorage({

    destination:function(req,file,cb){
        cb(null,'/upload');
    }
},{
    __filename:function(req,file,cb){
        cb(null,new Date().toISOString()+ file.orginalname);

    }

});
const upload = multer({storage:storage,
    limits:{
    fileSize:1024*1024*5
    },
    fileFilter:filterFile

});
const JobController = require('../controller/JobController')

router.get('/',JobController.index)
router.post('/show',JobController.show)
router.post('/store',JobController.store)
router.post('/destroy',JobController.destroy)
// router.post('/uploads',upload.single('jobImg'),
//  (req,res,next)=>{
//     console.log(req.file)
//     if(req.file){
//         const pathname =req.file.path;
//         res.send(req.file,pathname);
//     }

//     });



module.exports=router;