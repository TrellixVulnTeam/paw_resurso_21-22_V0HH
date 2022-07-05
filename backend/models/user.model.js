const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    birthday : {
        type : Date,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type: String,
        required: true
    },
    role : {
        type: String,
        enum : ["Admin", "User"],
        required: true
    },
    houses : []
});

module.exports = mongoose.model("User", userSchema);