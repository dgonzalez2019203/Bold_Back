'user strict'

var message = "";

function LanguageSelection(language){

    if(language == "en"){
        message = require('../../assets/message.en.json'); 
    }else if(language == "es"){
        message = require('../../assets/messages.es.json'); 
    }else{
        message = require('../../assets/messages.es.json'); 
    }
        
    return message;
}


module.exports = {    
    LanguageSelection    
}