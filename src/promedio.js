// promedio de notas
const notas = [85, 90, 78, 92];
let suma = 0;

for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
}

const promedio = suma / notas.length;
console.log("Promedio Total: ",promedio); 