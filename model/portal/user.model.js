'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = Schema({    
    username : {type : String},
    firstName : {type : String},
    lastName: {type : String},
    address : {type : String},
    phone  : [{type: Schema.ObjectId, ref: 'phone'}]
});


module.exports = mongoose.model("user",userSchema);