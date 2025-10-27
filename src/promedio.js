// promedio de notas
const notasEntrada = [85, 90, 78, 92];
let sumaNotas = 0;

for (let i = 0; i < notasEntrada.length; i++) {
  sumaNotas += notasEntrada[i];
}

const promedio = sumaNotas / notasEntrada.length;
console.log("Promedio Total: ", promedio);
