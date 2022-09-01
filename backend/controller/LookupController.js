const City = require('../models/city');
const Sector = require('../models/sector');
const Country = require('../models/country');


const showCity =(req,res,next)=>{
    City.find()
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
const storeCity =(req,res,next)=>{
    
    let city =new City({
        name: req.body.name
    });
    city.save()
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
const storeCountry =(req,res,next)=>{
    
    let country =new Country({
        name: req.body.name
    });
    country.save()
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
const storeSector =(req,res,next)=>{
    
    let sector =new Sector({
        name: req.body.name
    });
    sector.save()
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
const showSector =(req,res,next)=>{
    Sector.find()
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

const showCountry =(req,res,next)=>{
    Country.find()
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

module.exports={
    showCity,showCountry,showSector,storeCity,storeCountry, storeSector
}