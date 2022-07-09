const express = require('express');
const router = express.Router();
const favoritesCtrl = require('../../controllers/api/favorites');

// POST /api/favorites
router.post('/', favoritesCtrl.index);

// POST /api/favorites/:id
router.post('/:id', favoritesCtrl.show)

// CREATE (POST) /api/favorites/create 
router.post('/create', favoritesCtrl.create)

module.exports = router;
