const express =require('express')
const router =express.Router()

const lookupController = require('../controller/LookupController')

router.get('/showCity',lookupController.showCity)
router.get('/showCountry',lookupController.showCountry)
router.get('/showSector',lookupController.showSector)
router.post('/storeCity',lookupController.storeCity)
router.post('/storeCountry',lookupController.storeCountry)
router.post('/storeSector',lookupController.storeSector)
module.exports=router;