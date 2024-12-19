var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Niveau = new Schema({
    nomch : String,
    nbrch : Number,
    etat_construction : Boolean,
    batiment: { type: mongoose.Schema.Types.ObjectId, ref: 'Batiment' },
})
module.exports = mongoose.model('niveau', Niveau)