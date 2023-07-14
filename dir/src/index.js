const mongoose = require("mongoose");
const express = require("express");
const app = express();

const mongoConfig = require("./configs/mongoConfig.js");
const route= require("./routes/userRoutes.js");

mongoose.connect(mongoConfig, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log(`Connected to the Database.`);
	})
	.catch((error) => {
		console.log("Error connecting to the Database.");
	})

app.use(express.json());
// app.use(validate);
app.use(route);

const port = 7000;
app.listen(port, (err) => {
	if (err)
		throw err;
	console.log("Server is running successfully on port " + port);
})