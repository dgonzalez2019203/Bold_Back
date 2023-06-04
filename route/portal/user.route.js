'use strict'

var express = require("express");

var userController = require("../../controller/portal/user.controller");

var api = express.Router();


/* CRUD */
api.get("/users",userController.getUser);
api.post("/users",userController.saveUser);
api.delete("/users/:id",userController.removeUser);


module.exports = api;