const order = require('../models/order');
var Order = require('../models/order');

/**
 * Get order list for both vendor and customer
 */
exports.orderListGet = function (req, res){
    Order.find(req.query).populate("vendor").populate("customer").then((orders) => {
        // no orders
        if(orders.length == 0) {
            res.status(200).json({ success: false, errMessage: "no orders found" })
        }else{
            res.status(200).json({ success: true, allOrders: orders})
        }
    })
};

/**
 * Create new order
 */
exports.orderCreatePost = function (req, res){
    //create order
    const order = new Order({
        customer: req.body.customer,
        vendor: req.body.vendor,
        snacks: req.body.snacks,
        total: req.body.total
    });
    //save it into DB
    order.save((err, createdOrder) => {
        if(err){
            res.status(400).json({ success: false, err: err })
        }else{
            res.status(200).json({ success: true, order: createdOrder})
        }
    })

};

/**
 * update order
 */
exports.orderUpdatePost = function (req, res){
    Order.findById(req.params.id).then((order) => {
        // Can't find order
        if (!order) {
            res.status(404).json({ err: 'order not found'})
        }else{
            //update
            Order.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true },
                //response
                function(err, updatedOrder) {
                    if (err) {
                        res.status(404).json({ success: false, err: err })
                    }else{
                        res.status(200).json({ success: true, updatedOrder: updatedOrder})
                    }
                }
            )
        }
    })

};