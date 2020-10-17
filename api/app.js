const obtenerPersonaje = require("./library"); //llamando a library.js

//utilizacion de promise para traer la informacion del personaje

obtenerPersonaje(5).then(personaje => {
    console.log("Nombre del personaje: " + personaje.name);
    console.log("Su genero es: " + personaje.gender);
    console.log("Tiene una altura de: " + personaje.height + " cm");
    console.log("Pesa: " + personaje.mass + " kg");
    console.log("Su cumpleaños es el: " + personaje.birth_year);   
});