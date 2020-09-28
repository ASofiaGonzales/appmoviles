var numeros = [2,-3,9];

function hayAlgunNegativo (numero) {
    return numero < 0;
} 

console.log(numeros.some(hayAlgunNegativo));