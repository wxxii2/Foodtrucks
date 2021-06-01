// Snack Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var SnackSchema = new Schema({
    name:{
        type: String
    },
    picture:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Snack", SnackSchema);