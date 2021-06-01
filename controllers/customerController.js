const bcrypt = require('bcryptjs');

var Customer = require('../models/customer');

/**
 * Register a new customer if email is not used.
 * Hash password before instore it in mongoDB.
 */
exports.customerRegisterPost = function (req, res){

    const { email, password } = req.body;

    Customer.findOne( {email: email} ).then((customer) => {
        // Email bean used
        if (customer) {
            res.status(409).json({ error: 'Email already registered!' });
        // Register new customer
        }else{
            const newCustomer = new Customer({
                givenName: "default",
                familyName: "default",
                email,
                password
            })
            // Encryption for password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newCustomer.password, salt, (err,hash) => {
                    if (err) throw err;
                    newCustomer.password = hash;
                    newCustomer.save().then((customer) => {
                        res.status(200).json({
                            success: true,
                            customer: {
                                givenName: customer.givenName,
                                familyName: customer.familyName,
                                email: customer.email,
                                password: customer.password
                            }
                        })
                    })
                })
            })
        }
    })
};

/**
 * Login if customer enter the correct email and password
 */
exports.customerLoginPost = function (req, res){
    const { email, password } = req.body;
    Customer.findOne({ email: email, }).then((customer) => {
        // Customer not in DB.
        if (!customer) {
            res.status(400).json({ success: false, error: 'Customer not registered'})
        // Customer in DB.
        }else{
            bcrypt.compare(password, customer.password, (err, isMatch) => {
                if (err) throw err;
                // Password correct.
                if (isMatch) {
                    res.status(200).json({
                        success:true,
                        customer: {
                            id: customer.id,
                            givenName: customer.givenName,
                            familyName: customer.familyName,
                            email: customer.email,
                        },
                    });
                // Password Wrong.
                }else{
                    res.status(400).json({ error: err, message: 'password incorrect' });
                }
            })
        }
    })
}

/**
 * Update profile for customer
 */
exports.customerUpdatePost = function(req,res) {
    // Encryption for password
    bcrypt.genSalt(10, (err,salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash)=>{
            if (err) throw err;
            //update customer
            Customer.findOneAndUpdate(
                { email: req.body.email },
                { 
                    givenName:req.body.givenName,
                    familyName:req.body.familyName,
                    email:req.body.email,
                    password:hash
                },
                { new : true },
                function (err, updateCustomer) {
                    // response
                    if (err) {
                        res.status(404).json({success:false, message:"customer email not exists"});
                    } else {
                        res.status(200).json({success:true, updateCustomer:updateCustomer});
                    }
                }
            )
        });
    });
};