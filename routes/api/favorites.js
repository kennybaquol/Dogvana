const express = require('express');
const router = express.Router();
const favoritesCtrl = require('../../controllers/api/favoritesCtrl');

// GET /api/favorites
router.get('/', favoritesCtrl.index);

// GET /api/favorites/:id
router.get('/:id', favoritesCtrl.show)

module.exports = router;
