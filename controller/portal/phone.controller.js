'user strict'

var User = require("../../model/portal/user.model");
var Phone = require("../../model/portal/phone.model");
var config = require("../../controller/config/config.controller");
var message = config.LanguageSelection("es");


function savePhone(req,res){
    var params = req.body;

    if(params.name && params.phone){
        Phone.findOne({phone : params.phone},(err,find)=>{
            if(err){
                return res.status(500).send({message: message.global.error, err});
            }else if(find){
                return res.send({message: message.phone.phone_in_use});
            }else{
                
                var phone = new Phone();

                phone.name = params.name;
                phone.phone = params.phone;

                phone.save((err,saved)=>{
                    if(err){
                        return res.status(500).send({message: message.global.error, err});
                    }else if(saved){
                        
                        User.findByIdAndUpdate(params._id, {$push:{phone: phone._id}}, {new: true}, (err, push)=>{
                            if(err){
                                return res.status(500).send({message: message.global.error, err});
                            }else if(push){
                                return res.send({message: message.global.success, push});
                            }else{
                                return res.send({message: message.global.warning});
                            }
                        })
                    }else{
                        return res.send({message: message.global.warning});
                    }
                })
            }
        })
    }
}

function removePhone(req,res){
    let userId = req.params.user;
    let phoneId = req.params.phone;

    Phone.findById(phoneId,(err,find)=>{
        if(err){
            return res.status(500).send({message: message.global.error, err});
        }else if(find){
            User.findOne({phone : phoneId}, (err, userFind)=>{
                if(err){
                    return res.status(500).send({message: message.global.error, err});
                }else if(userFind){
                    User.findByIdAndUpdate(userId, {$pull:{phone: phoneId}}, (err, pull)=>{
                        if(err){
                            return res.status(500).send({message: message.global.error, err});
                        }else if(pull){
                            Phone.findByIdAndRemove(phoneId, (err,removed)=>{
                                if(err){
                                    return res.status(500).send({message: message.global.error, err});
                                }else if(removed){
                                    return res.send({message: message.global.success, removed});
                                }else{
                                    return res.send({message: message.global.warning});
                                }
                            })                            
                        }else{
                            return res.send({message: message.global.warning});
                        }
                    });
                }else{
                    Phone.findByIdAndRemove(phoneId, (err,removed)=>{
                        if(err){
                            return res.status(500).send({message: message.global.error, err});
                        }else if(removed){
                            return res.send({message: message.global.success, removed});
                        }else{
                            return res.send({message: message.global.warning});
                        }
                    }) 
                }
            })

        }else{
            return res.send({message: message.global.warning});
        }
    })
}

module.exports = {   
    savePhone,
    removePhone
}


