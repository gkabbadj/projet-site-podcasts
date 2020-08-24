const mongoose = require('mongoose');

const matiereSchema = mongoose.Schema({
    code: { type: String, required: true },
    annee: { type: [String], required: true },
    semestre: { type: [String], required: true },
    nom: { type: [String], required: true },
    podcasts: {type :[{
        nom: String,
        description: String,
        path: String}], required: false}
});

module.exports = mongoose.model('Matiere', matiereSchema);
