'user strict'

var config = require("../../controller/config/config.controller");
var message = config.LanguageSelection("es");


function burbuja(req,res) {

    //Función sort
    var sortList = [389, 703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131];
    sortList.sort();

    //Algoritmo Burbuja
    var lista = [389, 703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131];


    len = lista.length;    
    let aux;    

    for (let k = 1; k < len; k++) {        
        for (let i = 0; i < (len - k); i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }


    //Resultado
    let result = {
        "burbuja" : lista,
        "sort" : sortList
    }

    return res.send({message: message.global.success, result});
}

function sortString(req,res){
    var params = req.body;

    //Función split, reverse y join.
    string = params.palabra;
    reverse = string.split(" ").reverse().join(" ");

    return res.send({message: message.global.success, reverse});

}

function numberValidation(req,res){
    var params = req.body;
  
    for (var i = 2; i < params.numero; i++) {
  
      //console.log("Modulo entre " + numero + " y " + i + " = " + (numero % i));
  
      if (params.numero % i === 0) {
        return res.send({message: message.global.success, va:false});
      }else{
        return res.send({message: message.global.success, va:true});
      }
  
    }
}

function matchArray(req,res){
    var params = req.body;

    var arr1 = params.arr1;
    var arr2 = params.arr2;
    var match = [];

    for(let find of arr1){        
        for(let find2 of arr2){
            if(find == find2){
                match.push(find)
            }
        }
    }

    return res.send({message: message.global.success, match});
}

module.exports = {   
    burbuja,
    sortString,
    numberValidation,
    matchArray
}