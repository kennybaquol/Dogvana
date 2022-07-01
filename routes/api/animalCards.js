const express = require('express');
const router = express.Router();
const animalCardsCtrl = require('../../controllers/api/animalCardsCtrl');

// GET /api/items
router.get('/', animalCardsCtrl.index);
// GET /api/items/:id
// router.get('/:id', itemsCtrl.show);

module.exports = router;
