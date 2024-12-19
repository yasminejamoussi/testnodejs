var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Ordinateur = new Schema({
    model : String,
    categorie : String,
    dateFabrication : Date,
    prix : Number,
   
})
module.exports = mongoose.model('ordinateurs', Ordinateur)