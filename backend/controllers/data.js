const Matiere = require('../models/Matiere');

exports.getSingleMatiere = (req, res, next) => {
  Matiere.findOne({code: req.params.id})
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllMatieres = (req, res, next) => {
  Matiere.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
};

exports.updateMatiere = (req, res, next) => {
  console.log(req.params);
  console.log(req.body);
  Matiere.updateOne({ code : req.params.code}, { ...req.body, code: req.params.code})
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
};



/*exports.getOneThing = (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
};*/


