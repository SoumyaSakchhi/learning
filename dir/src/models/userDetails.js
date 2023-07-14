const mongoose= require("mongoose");

const dbSchema= {
    uniqueID: Object,
    personalInfo: Object
}

const userDetails= mongoose.model("userDetails", dbSchema);

module.exports= {dbSchema, userDetails};