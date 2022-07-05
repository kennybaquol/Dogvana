const express = require('express');
const router = express.Router();
const animalCardsCtrl = require('../../controllers/api/animalCardsCtrl');

router.get('/', animalCardsCtrl.index);

module.exports = router;
