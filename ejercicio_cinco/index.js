const isBelowThreshold = (currentValue) => currentValue <= 4;

const notas = ([8,6,2,4]);

console.log(notas.every(isBelowThreshold));