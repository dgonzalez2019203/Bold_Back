'use strict'

var express = require("express");

var functionController = require("../../controller/portal/function.controller");

var api = express.Router();


/* CRUD */
api.get("/burbuja",functionController.burbuja);
api.post("/sortString",functionController.sortString);
api.post("/numberValidation",functionController.numberValidation);
api.post("/matchArray",functionController.matchArray);


module.exports = api;