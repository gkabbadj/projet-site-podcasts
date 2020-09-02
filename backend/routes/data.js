const express = require('express');
const dataCtrl = require('../controllers/data');

const router = express.Router();


router.get('/matieres', dataCtrl.getAllMatieres);

router.get('/matieres/:id', dataCtrl.getSingleMatiere);

router.put('/ajout/:code', dataCtrl.updateMatiere);


module.exports = router;

