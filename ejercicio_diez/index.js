var lista = [7,8,9];

function contiene(a,n){
    return a.some(numero => numero === n);
    
}

console.log(contiene(lista,8));
