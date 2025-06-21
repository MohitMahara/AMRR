import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },

    type : {
        type : String,
        required : true,
    },

    description : {
        type : String
    },

    coverImg : {
        type : String, 
        required : true,
    },

    additionalImgs : [
       {type : String}
    ]

}, {timestamps: true});

export default mongoose.model("items", itemSchema);