/**
 * This file is our server file.
 * RUN :
 * -- only Server: node app.js / nodemon app.js
 * -- Frontend: cd client => npm start
 * -- All together: npm run dev
 * Author: Chang Liu, Chenhan Li, BeiBei Wang, Qianhui Liu
 * Last Edited: 2021.5.31
 */

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')

const server = require('http').createServer(app);
const io = require('socket.io')(server);

const customerRouter = require('./routes/customerRouter');
const vendorRouter = require('./routes/vendorRouter');
const snackRouter = require('./routes/snackRouter');
const orderRouter = require('./routes/orderRouter');
// app.get('/', (req, res) => {
//     console.log(__dirname,"__dirname")    
// 	var options = {
//         root: __dirname+'/product/',    
// 		// headers: {
// 		//   "Content-Type": "text/html"
// 		// }
// 	}
// 	res.sendFile('index.html',options, function(error){
// 	});
// });
app.use(cors());

app.use(bodyParser.json());

io.of("/api/socket").on("connection", (socket) => {
    console.log("socket.io: User connected: ", socket.io);
    socket.on("disconnect", () => {
        console.log("socket.io: User disconnected: ", socket.id);
    });
});

// MongoDB connection.
const db = require('./config/keys').mongoURL;
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

// use socket.io
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("setting change streams");
    const orderChangeStream = connection.collection("orders").watch();

    orderChangeStream.on("change", (change => {
        switch (change.operationType) {
            case "insert":
                console.log("insertion detect at backend");
                const order = {
                    _id: change.fullDocument._id,
                    customer: change.fullDocument.customer,
                    vendor: change.fullDocument.vendor,
                    snacks: change.fullDocument.snacks,
                    createdAt: change.fullDocument.createdAt
                };
                io.of("/api/socket").emit("newOrder", order);
                break;

            case "update":
                console.log("update detected at backend");
                io.of("/api/socket").emit("updateOrder", change.documentKey._id);
                break;

            case "delete":
                console.log("deletion detected at backend");
                io.of("/api/socket").emit("deleteOrder", change.documentKey._id);
                break;

        }
    }))
})


// Routers.
app.use('/customer', customerRouter);
app.use('/vendor', vendorRouter);
app.use('/snack', snackRouter);
app.use('/order', orderRouter);
app.use(express.static(__dirname+"/product",{index:"index.html"}))
server.listen(process.env.PORT || 8080, () => {
    console.log("Snacks in a van app is running!")
})
