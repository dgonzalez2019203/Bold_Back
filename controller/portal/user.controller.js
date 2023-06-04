'user strict'

var User = require("../../model/portal/user.model");
var Phone = require("../../model/portal/phone.model");
var config = require("../../controller/config/config.controller");
var message = config.LanguageSelection("es");


//============= User endpoints ========= 
function saveUser(req,res){
    var params = req.body;

    console.log(params.username)
    if(params.username && params.firstName && params.lastName){
        User.findOne({username : params.username}, (err, find)=>{
            if(err){
                return res.status(500).send({message: message.global.error, err});
            }else if(find){
                return res.send({message: message.user.name_in_use});
            }else{
                
                var user = new User();

                user.username = params.username;
                user.firstName = params.firstName;
                user.lastName = params.lastName;
                user.address = params.address;

                user.save((err, saved)=>{
                    if(err){
                        return res.status(500).send({message: message.global.error, err});
                    }else if(saved){
                        return res.send({message: message.global.success, saved});
                    }else{
                        return res.send({message: message.global.warning});
                    }
                })
            }
        })
    }else{
        return res.send({message: message.global.missing_data});
    }
}

function getUser(req,res){

    User.find({},(err, find)=>{
        if(err){
            return res.status(500).send({message: message.global.error, err});
        }else if(find){
            return res.send({message: message.global.success, find});
        }else{
            return res.send({message: message.global.warning});
        }
    }).populate('phone');
}

function removeUser(req, res){
    let id = req.params.id;
   console.log(id)
    User.findByIdAndRemove(id, (err, removed)=>{
        if(err){
            return res.status(500).send({message: message.global.error, err});
        }else if(removed){
            return res.send({message: message.global.success, removed});
        }else{
            return res.send({message: message.global.warning});
        }
    })
}


module.exports = {   
    saveUser,
    getUser,
    removeUser
}


