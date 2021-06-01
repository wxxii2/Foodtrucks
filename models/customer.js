// Customer Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var CustomerSchema = new Schema({
    givenName:{
        type: String,
        required: true,
        default: "givenName"
    },
    familyName:{
        type: String,
        required: true,
        default: "familyName"
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
    email: {
        type: String,
        required: true,
        default: "newEmail"
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Customer", CustomerSchema);