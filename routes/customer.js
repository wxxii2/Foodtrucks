const express = require("express");
const router = express.Router();

var customerController = require('../controllers/customerController');

// POST request to register a customer
router.post('/register', customerController.customerRegisterPost);

// POST request to login a customer
router.post('/login', customerController.customerLoginPost);

// POST request to update a customer infomation
router.post('/update', customerController.customerUpdatePost);

module.exports = router;