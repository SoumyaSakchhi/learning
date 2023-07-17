const mongoose = require("mongoose");

const dbSchema = {
	username: String,
	password: String,
	salt: String
}

const creds = mongoose.model("studentcreds", dbSchema);

module.exports = { dbSchema, creds };