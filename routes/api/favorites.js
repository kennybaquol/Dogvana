const express = require('express');
const router = express.Router();
const favoritesCtrl = require('../../controllers/api/favorites');



// CREATE (POST) /api/favorites/create 
router.post('/create', favoritesCtrl.create)

// POST /api/favorites/:id
router.post('/:id', favoritesCtrl.show)

// POST /api/favorites
router.get('/', favoritesCtrl.index);

module.exports = router;
