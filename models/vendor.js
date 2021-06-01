// Vendor Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var VendorSchema = new Schema({
    name:{
        type: String,
        required: true,
        default: "name"
    },
    location: {
        type: {
            type: String,
            enum: ['point']
        },
        coordinates: {
            type: [Number]
        }
    },
    password: {
        type: String,
        required: true
    },
    textAddress: {
        type: String
    },
    parked: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = mongoose.model("Vendor", VendorSchema);