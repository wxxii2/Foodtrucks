const express = require("express");
const router = express.Router();

var customerController = require('../controllers/customerController');

/**
 *  POST http://localhost:3000/customer/register
 *  { email: email, password: password }
 *  Register a customer
 */
router.post('/register', customerController.customerRegisterPost);

/**
 *  POST http://localhost:3000/customer/login
 *  { email: email, password: password }
 *  Login a customer
 */
router.post('/login', customerController.customerLoginPost);

/**
 *  POST http://localhost:3000/customer/update
 *  { email: email,
 *    givenName: givenName,
 *    familyName:familyName,
 *    email: email,
 *    password: password } 
 *  Update a customer
 */
router.post('/update', customerController.customerUpdatePost);

module.exports = router;