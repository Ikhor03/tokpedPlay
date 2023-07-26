import express from "express";
import mongoose from "mongoose";
import { config } from './app/config.js';
import bodyParser from "body-parser";
import errorHandler from "./app/middleware/errorHandler.js";
import videoRoute from "./app/routes/videos.js";
import productRoute from "./app/routes/products.js";
import commentRoute from "./app/routes/commentList.js";

// connect to database
mongoose.connect(config.mongoString);
const database = mongoose.connection;
// check connection
database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log("mongoDB connected...");
});


const app = express();

// use middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routing app
app.use(videoRoute);
app.use(productRoute);
app.use(commentRoute);

// Error handling middleware

// home api
app.use('/', function (req, res) {
    res.json({
        welcome: 'WELCOME TOKOPEDIA PLAY CLONE'
    })
})

// handlingError
app.use(errorHandler);

// running server
app.listen(config.port, () => {
    console.log(`server up and running at ${config.port}`);
})