const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let houseSchema = new Schema({
    title : { 
        type : String,
        required : true,
        unique : true
    },
    description : [{ 
        type : String,
        required : true
    }],
    location : {
        street : {
            type : String,
            required : true
        },
        number : {
            type : Number,
            required : true
        },
        postalCode : {
            type : String,
            required : true
        },
        country : {
            type : String,
            required : true
        },
        coordinates : {
            latitude : {
                type : Number
            },
            longitude : {
                type : Number
            }
        }
    },
    price : {
        type : Number,
        required : true
    },
    seller : {
        type : Object,
        required : true
    },
    contact : {
        type : Number,
        required : true
    },
    approved: {
        type : Boolean,
        default : false
    },
    publishingDate: {
        type : Date,
        default : new Date
    }
});

module.exports = mongoose.model('House', houseSchema);