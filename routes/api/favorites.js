const express = require('express');
const router = express.Router();
const favoritesCtrl = require('../../controllers/api/favorites');

// GET /api/favorites
router.get('/', favoritesCtrl.index);

// POST /api/favorites/create 
router.post('/create', favoritesCtrl.create)

// GET /api/favorites/:id
router.get('/:id', favoritesCtrl.show)

module.exports = router;
