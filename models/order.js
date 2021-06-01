// Order Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var OrderSchema = new Schema({
    customer:{
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    vendor: {
        type: Schema.Types.ObjectId,
        ref: 'Vendor'
    },
    snacks:{
        type: Array,
        default: []
    },
    status:{
        type: String,
        default: 'outstanding',
    },
    description: {
        type: String
    },
    ratings: {
        type: Number
    },
    comment: {
        type: String
    },
    total: {
        type: Number
    },
    discount: {
        type: Boolean
    }
}, { timestamps: true});

module.exports = mongoose.model("Order", OrderSchema);