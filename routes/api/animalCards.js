const express = require('express');
const router = express.Router();
const animalCardsCtrl = require('../../controllers/api/animalCardsCtrl');

// GET /api/animalCards
router.get('/', animalCardsCtrl.index);

// GET /api/animalCards/:id
router.get('/:id', animalCardsCtrl.show)

module.exports = router;
