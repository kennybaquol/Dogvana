const express = require('express');
const router = express.Router();
const favoritesCtrl = require('../../controllers/api/favorites');

// GET /api/favorites
router.get('/', favoritesCtrl.index);

// GET /api/favorites/:id
router.get('/:id', favoritesCtrl.show)

// CREATE (POST) /api/favorites/create 
router.post('/create', favoritesCtrl.create)

module.exports = router;
