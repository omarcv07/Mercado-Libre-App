const express = require('express');
const router = express.Router();

const { getAll, get } = require('../controllers/items');

// Items
router.get('/items', getAll);
router.get('/items/:id', get);

module.exports = router;
