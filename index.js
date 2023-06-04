'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 49159;
mongoose.Promise = global.Promise;

var uri = 'mongodb+srv://workcodeincHydrosellos:workcodeincHydrosellos@hydrosellos.avwlu.mongodb.net/bold_dev?retryWrites=true&w=majority&authSource=admin';
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