const express = require("express");
const router = express.Router();

var vendorController = require('../controllers/vendorController');

/**
 *  POST http://localhost:5000/vendor/register
 *  { name: name, password: password } 
 *  Register for vendor
 */
router.post('/register', vendorController.vendorRegisterPost);

/**
 *  POST http://localhost:5000/vendor/park/:id
 *  { textAddress: req.body.textAddress, parked: req.body.parked, location: } 
 *  Change park state for vendor
 */
router.post('/park/:id', vendorController.vendorParkPost);

/**
 *  GET http://localhost:5000/vendor/
 *  {lat: lat, lng: lng}
 *  Get five nearest vendor
 */
router.get('/',vendorController.vendorFiveGet);

/**
 *  POST http://localhost:5000/vendor/login
 *  { name: name, password: password } 
 *  Login for vendor
 */
router.post('/login',vendorController.vendorLoginPost);

module.exports = router;