function rechazar (array){
    impares = array.filter (numero => numero % 2 !== 0);
    return impares;
    }

console.log(rechazar([7,9,87,42]));