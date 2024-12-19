var express = require('express')
var router = express.Router()
const { list, create, update, deleteU ,recherche,rechercheParCategorie} = require('./ordinateurService')



router.get('/list', list)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/delete/:id', deleteU)
router.get('/recherche',recherche)
router.get('/search-category', (req, res) => {
    res.render('ordi'); 
});
module.exports = router