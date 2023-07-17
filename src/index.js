//Task 7

const express = require("express");
const mongoose = require("mongoose");
const mongoConfig = require("./configs/mongoURL.js");
const app = express();

// const validate= require("./middlewares/validate.js");
// const updateValidate= require("./middlewares/validateUpdateCreds.js");
const validateUsername= require("./middlewares/validateUsername.js");
const route= require("./routes/userRoutes.js");

mongoose.connect(mongoConfig, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`Connected to the Database.`);
    })
    .catch((error) => {
        console.log("Error connecting to the Database.");
    })

app.use(express.json());
app.use(validateUsername);
app.use(route);

port = 5000;
app.listen(port, (err) => {
    if (err)
        throw err;
    console.log("The server is running successfully on port " + port);
})