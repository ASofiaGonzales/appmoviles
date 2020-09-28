const notas = ([8,6,2,4]);

function aprobo(nota){
    return nota >= 4;
}

console.log(notas.every(aprobo));