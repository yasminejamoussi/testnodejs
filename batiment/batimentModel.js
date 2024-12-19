var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Batiment = new Schema({
    nom : String,
    nbr : Number,
    desc : String,
    adresse : String,
    niveaux: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Niveau' }],
})
module.exports = mongoose.model('batiment', Batiment)