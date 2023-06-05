'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 49151;
mongoose.Promise = global.Promise;

var uri = 'CONEXIÓN MONGO DB';
mongoose.Promise = global.Promise;
mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log("DB connection successful");
        app.listen(port, ()=>{            
           console.log('Servidor de experss corriendo')
        })

})
.catch((err)=>{
    console.log("error al conectarse", err);
})