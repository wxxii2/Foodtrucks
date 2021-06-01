const express = require("express");
const router = express.Router();

var snackController = require('../controllers/snackController');

// GET request to view menu list of snacks
router.get('/', snackController.snackListGet);

// GET request to view details of snacks
router.get('/:id', snackController.snackDetailGet);

module.exports = router;