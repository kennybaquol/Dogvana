const express = require('express');
const router = express.Router();
const animalCardsCtrl = require('../../controllers/api/animalCardsCtrl');

// GET /api/items
router.get('/', animalCardsCtrl.index);

module.exports = router;
