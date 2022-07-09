const express = require('express');
const router = express.Router();
const favoritesCtrl = require('../../controllers/api/favorites');

// GET /api/favorites
router.get('/', favoritesCtrl.index);

// CREATE (POST) /api/favorites/create 
router.post('/create', favoritesCtrl.create)

// POST /api/favorites/:id
router.post('/:id', favoritesCtrl.show)

module.exports = router;
