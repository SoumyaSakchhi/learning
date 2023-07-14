const mongoose= require("mongoose");

const dbSchema= new mongoose.Schema({
    username: String,
    password: String
});

const credentials= mongoose.model("credentials", dbSchema);

module.exports= {dbSchema, credentials};