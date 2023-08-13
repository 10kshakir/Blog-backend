const express = require("express");
 const router = require("./src/routes/api");

const app = new express();
const bodyParser = require("body-parser");

//Security Middleware
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require("cors");

//Database
const mongoose = require("mongoose");
const path = require("path");

//Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());

//Body perser
app.use(bodyParser.json());

//mongodb Connection



const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
        });
        
    } catch (error) {
        console.log(`Error:${error.message}`);
       
    }
};

connectDB();



//Rate Limiter
const limiter = rateLimit({ windowMs: 15 * 60 * 100, max: 3000 });
app.use(limiter)

// app.use(express.static("./client/dist"));
// app.get("*", function (res, res) {
//   res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
// });



// Managing BackEnd API Routing

app.use("/api", router);



module.exports = app;
