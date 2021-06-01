const express = require("express");
const router = express.Router();

var snackController = require('../controllers/snackController');

/**
 *  GET http://localhost:5000/snack/
 *  Get all snacks
 */
router.get('/', snackController.snackListGet);

/**
 *  GET http://localhost:5000/snack/:id
 *  Get a snack by id
 */
router.get('/:id', snackController.snackDetailGet);

module.exports = router;