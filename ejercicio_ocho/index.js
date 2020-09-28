function cuantosCumplen (lista){
    parImpar = lista.filter (numero => numero % 2 === 0);
    return parImpar.length;
    }

console.log(cuantosCumplen([7,9,25,42]));