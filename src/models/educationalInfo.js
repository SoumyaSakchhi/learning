const mongoose= require("mongoose");

const dbSchema= {
    uniqueID: Object,
    eduInfo: Object
}

const educationalInfo= mongoose.model("educationalInfo", dbSchema);

module.exports= {dbSchema, educationalInfo};

// uniqueID:{ type: mongoose.Schema.ObjectId, required: true}