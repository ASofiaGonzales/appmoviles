const notas = [[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]];

function aprobo(nota){
    return nota >= 4;
}

var quienesAprobaron = notas.filter(a => a.every(aprobo));

console.log(quienesAprobaron);