'use strict'

var express = require("express");

var phoneController = require("../../controller/portal/phone.controller");

var api = express.Router();


/* CRUD */
api.post("/phone",phoneController.savePhone);
api.delete("/phone/:user/:phone",phoneController.removePhone);


module.exports = api;