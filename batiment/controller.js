var express = require('express')
var router = express.Router()
const {create,list,getById ,deleteB,addNiveau} = require('./batimentService')



router.get('/list', list)
router.post('/addBat', create)
router.get('/getById/:id', getById)
//router.put('/update/:id', update)
router.delete('/delete/:id', deleteB)
router.post('/addNiveau',addNiveau)

module.exports = router