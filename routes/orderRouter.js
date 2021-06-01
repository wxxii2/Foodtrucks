const express = require("express");
const router = express.Router();

var orderController = require('../controllers/orderController');

/**
 *  POST http://localhost:5000/order/create
 *  { customer: customer, vendor: vendor, snacks: snacks, total: total } 
 *  Create a new order
 */
router.post('/create', orderController.orderCreatePost);

/**
 *  GET http://localhost:5000/order?:vendorId&status=outstanding
 *  Get all orders for specific status
 */
router.get('/', orderController.orderListGet);

/**
 *  POST http://localhost:5000/order/:id/update
 *  { snacks: req.body.snacks, status: req.body.status },
 *  Update order by id
 */
router.post('/:id/update', orderController.orderUpdatePost);


module.exports = router;