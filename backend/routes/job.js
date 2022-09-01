const express =require('express')
const router =express.Router()

const JobController = require('../controller/JobController')

router.get('/',JobController.index)
router.post('/show',JobController.show)
router.post('/store',JobController.store)
router.post('/destroy',JobController.destroy)

module.exports=router;