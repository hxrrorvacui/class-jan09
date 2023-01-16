// Exercise 1:
let sum = 0;
const atomic = 100;
for (let i = 1; i <= atomic; i++) {
    sum += i;
}
console.log(`sum`, sum);

// Exercise 2:
// Crea un array de números llamado "numbers" con valores aleatorios. Utiliza un for loop para recorrer el array y encontrar el número mayor y el número menor. Imprime ambos números en la consola.
let numbers0 = [2, 99, 71, 33, 15, 999, 5];
let max = numbers0[0];
let min = numbers0[0];
for (let value of numbers0) {
    if (value > max) {
        max = value;
    }
    if (value < min) {
        min = value;
    }
}
console.log(`Maximum Value: ${max}`);
console.log(`Minimum Value: ${min}`);

// Exercise 3: 
// Utiliza un bucle while para imprimir los números pares del 2 al 20.