const express = require("express");
const router = express.Router();

var orderController = require('../controllers/orderController');

// POST request to create a new order
router.post('/create', orderController.orderCreatePost);

// GET request to view all orders
router.get('/', orderController.orderListGet);

// POST request to update one orders
router.post('/:id/update', orderController.orderUpdatePost);


module.exports = router;