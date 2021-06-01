const bcrypt = require('bcryptjs');

var Vendor = require('../models/vendor');

/**
 * Vendor Register
 */
exports.vendorRegisterPost = function (req, res){
    const { name, password } = req.body;
    Vendor.findOne( {name: name} ).then((vendor) => {
        // Name Exist
        if (vendor) {
            res.status(409).json({ error: 'Name already registered!' });
        }else{
            const newVendor = new Vendor({
                name,
                password
            })
            // Encryption for password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newVendor.password, salt, (err,hash) => {
                    if (err) throw err;
                    newVendor.password = hash;
                    newVendor.save().then((vendor) => {
                        // response
                        res.status(200).json({
                            success: true,
                            vendor: {
                                _id: vendor._id,
                                name: vendor.name,
                                password: vendor.password
                            }
                        })
                    })
                })
            })
        }
    })
}

/**
 * Vendor Login
 */
exports.vendorLoginPost = function (req, res){
    const { name, password } = req.body;
    Vendor.findOne({
        name: name,
    }).then((vendor) => {
        //vendor not exist
        if (!vendor) {
            res.status(400).json({ success: false, error: 'vendor not registered'})
        }else{
            //compare password
            bcrypt.compare(password, vendor.password, (err, isMatch) => {
                if (err) throw err;
                // correct password
                if (isMatch) {
                    res.status(200).json({
                        success:true,
                        vendor: {
                            _id: vendor._id,
                            name: vendor.name,
                            password:password
                        },
                    });
                // wrong password
                }else{
                    res.status(400).json({ error: err, message: 'password incorrect' });
                }
            })
        }
    })
}

/**
 * Change park value for vendor
 */
exports.vendorParkPost = function (req, res){
    Vendor.findById( req.params.id ).then((vendor) => {
        // vendor not exist
        if (!vendor) {
            res.status(409).json({ error: 'Vendor not exist!' });
        }else{
            // update vendor
            Vendor.findByIdAndUpdate(
                req.params.id,
                { 
                    textAddress: req.body.textAddress,
                    parked: req.body.parked,
                    location: {type: "Point", coordinates: req.body.location}
                },
                { new: true },
                // response
                function(err, updatedVendor){
                    if(err) {
                        res.status(404).json({ success: false, err: err })
                    } else {
                        res.status(200).json({ success: true, updatedVendor: updatedVendor})
                    }
                }
            )
        }
    })
}

/**
 * Get five nearst vendor
 */
exports.vendorFiveGet = function(req, res){
    Vendor.find().exec((err, vendors) => {
        if (err) {
            res.status(404).json({ success: false, err: err})
        }else{
            var mapDistance = []
            // calculate distance
            for (i = 0; i< vendors.length; i++){
                var distance = Math.sqrt(Math.hypot(
                    req.query.lat - vendors[i].location.coordinates[0],
                    req.query.lng - vendors[i].location.coordinates[1]
                ))
                if (Number.isFinite(distance)) {
                    mapDistance.push({
                        "id": vendors[i].id,
                        "name": vendors[i].name,
                        "textAddress": vendors[i].textAddress,
                        "distance": parseFloat(distance).toFixed(4),
                        "location": vendors[i].location.coordinates,
                    })
                }
            }
            // sort and get top 5
            mapDistance = mapDistance.sort(({ distance: a }, { distance: b }) => a - b).slice(0,5)
            res.status(200).json({ success: true, vendors: mapDistance })
        }
    })

}