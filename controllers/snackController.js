var Snack = require('../models/snack');

/**
 * Get snack list
 */
exports.snackListGet = function (req, res){
    Snack.find().exec((err, snacks) => {
        if (err) {
            res.status(400).json({ success: false, err: err })
        }else{
            res.status(200).json({ success: true, snacks: snacks})
        }
    })

};

/**
 * Get snack by id
 */
exports.snackDetailGet = function (req, res){
    Snack.findById(req.params.id, function(err, snack) {
        if (snack) {
            res.status(200).json({ success: true, snack: snack })
        }else{
            res.status(400).json({ success: false, err: err})
        }
    })

};


                    