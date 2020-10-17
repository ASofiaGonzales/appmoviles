const request = require('request-promise'); //Utilizar request promise
//Funcion para llamar a la api
function obtenerPersonaje(id) {

    //configuracion de la llamada a la api
    var options = {
        method: 'GET',
        uri: 'https://swapi.py4e.com/api/people/' + id,
        json:true

    };

    //respuesta
    return request(options); 
};
//exportar para utilizarlo en app
module.exports = obtenerPersonaje;