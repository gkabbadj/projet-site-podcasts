const express = require('express');
const dataCtrl = require('../controllers/data');

const router = express.Router();


router.get('/matieres', dataCtrl.getAllMatieres);

router.get('/matieres/teacher/:id', dataCtrl.getSingleMatiere);
router.get('/matieres/student/:id', dataCtrl.getSingleMatiere);

router.put('/ajout/:id', dataCtrl.updateMatiere);


module.exports = router;

