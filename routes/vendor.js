const express = require("express");
const router = express.Router();

var vendorController = require('../controllers/vendorController');

// POST request to register a vendor
router.post('/register', vendorController.vendorRegisterPost);

// POST request to park a vendor
router.post('/park/:id', vendorController.vendorParkPost);

//GET request for five nearest vendors
router.get('/',vendorController.vendorFiveGet);

// POST request for a vendor to log in
router.post('/login',vendorController.vendorLoginPost);

module.exports = router;