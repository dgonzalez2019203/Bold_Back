'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var phoneSchema = Schema({    
    name : {type : String},
    phone : {type : Number}
});


module.exports = mongoose.model("phone",phoneSchema);