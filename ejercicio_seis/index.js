const isBelowThreshold = (currentValue) => currentValue <= 4;

const notas = ([[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]]);

const result = notas.filter(isBelowThreshold => isBelowThreshold = false);

console.log(result);

//incompleto