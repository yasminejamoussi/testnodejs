var Batiment = require('./batimentModel')
const Niveau = require('../niveau/niveauModel');
const create =async (req,res,next)=>{
    const { nom,desc,adresse } = req.body 
    
    await new Batiment({
        nom: nom,
        nbr: 0,
        desc: desc,
        adresse,adresse
    }).save()
      .then((data, err)=>{
          if(err){
              res.status(500).json(err)
            }
            console.log(data);
      })
   
res.json('bat added ! nom ')
}

async function list(req,res,next){
    await Batiment.find()
              .then((data,err)=>{
                if(err){
                    res.status(500).json(err)
                }
                    res.status(200).json(data)
              })
    //res.end('User List')
}

const getById = async (req, res) => {
    try {
      const batiment = await Batiment.findById(req.params.id);
      if (!batiment) return res.status(404).json({ message: 'Bâtiment introuvable' });
      res.status(200).json(batiment);
    } catch (err) {
      res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
  };
  
  async function deleteB(req, res, next) {
      await Batiment.findByIdAndDelete(req.params.id)
                .then((data, err)=>{
                  if(err){
                      res.status(500).json(err)
                  }
                      res.status(200).json(data)
                })
  }


  const addNiveau = async (req, res) => {
    try {
      const { batimentId, nomch, nbrch } = req.body;
  
      if (!batimentId || !nomch || !nbrch) {
        return res.status(400).json({ message: 'Données manquantes : batimentId, nomch, ou nbrch' });
      }
  
      // Trouver le bâtiment par ID
      const batiment = await Batiment.findById(batimentId);
      if (!batiment) {
        return res.status(404).json({ message: 'Bâtiment introuvable' });
      }
  
      // Créer le niveau et l'associer au bâtiment
      const niveau = new Niveau({
        nomch,
        nbrch,
        etat_construction: false,
        batiment: batimentId,
      });
  
      // Sauvegarder le niveau
      await niveau.save();
  
      // Ajouter le niveau à la liste des niveaux du bâtiment
      batiment.niveaux.push(niveau._id);
      await batiment.save();
  
      res.status(201).json({
        message: 'Niveau ajouté avec succès',
        niveau,
      });
    } catch (err) {
      res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
  };
module.exports = { create , list ,getById,deleteB,addNiveau}