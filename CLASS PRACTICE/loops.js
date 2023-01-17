// Loop 1:
let sum = 0;
const atomic = 100;
for (let i = 0; i <= atomic; i++) {
    sum += i;
}
console.log(`sum`, sum);

// Diego version: Loop 1
let result = 0;
for (let index = 0; index <= 100; index++) {
    result += index
}
console.log(`Ttoal de suma de los numeros del 1 al 100: ${result}`)

// Loop 2:
const numbersX = [0.02, 99, 71, 33, 15, 999, 5];
let max = numbersX[0];
let min = numbersX[0];
for (let value of numbersX) {
    if (value > max) {
        max = value;
    }
    if (value < min) {
        min = value;
    }
}
console.log(`Maximum Value: ${max}`);
console.log(`Minimum Value: ${min}`);

// Diego version: Loop 2
const numbers = [100, -9, 72, 489, 0.5, 2545];
console.table(numbers);
let mayorNumber = 0;
let minorNumber = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > mayorNumber) {
        mayorNumber = numbers[i]
    }
    if (numbers[i] < minorNumber) {
        minorNumber = numbers[i]
    }
}
console.log(`The biggest number on this array would be ${mayorNumber}`)
console.log(`The smallest number on this array would be ${minorNumber}`)


// Loop 3: 
for (let i=2; i<=20; i+=2) {
    console.log(i);
}

// Diego version: Loop 3
let evenNumber =2;
while (evenNumber <= 20) {
    console.log(evenNumber);
    evenNumber += 2;
}
    // version 2: Loop 3
let evenNumberTwo = 2;
while (evenNumberTwo <= 20) { // podría ser < 21
    if (evenNumberTwo % 2 == 0) console.log(evenNumberTwo);
}

// Loop 4:
//Crea una variable llamada "numeroAdivinar" con un número entero entre 1 y 10 (puedes asignarle un valor manualmente).
// Crea una variable llamada "numeroIngresado" y asignale el valor 0.
// Utiliza un bucle do...while para asignar a la variable "numeroIngresado" un número entero obtenido de un array de números [1,2,3,4,5,6,7,8,9,10]. El bucle debe continuar hasta que "numeroIngresado" sea igual a "numeroAdivinar".
// Una vez que el bucle finaliza, imprime en la consola el número de iteraciones realizadas.

let numeroAdivinar = 5;
let numeroIngresado = 0;
let intentos = 0;

while (numeroIngresado !== numeroAdivinar) {
    numeroAdivinar = [1,2,3,4,5,6,7,8,9,10] 
}
console.log();

// Diego Version: Loop 4
let numeroAdivinar = 7;
let numeroIngresado = 0;
let arrayDeNumeros = [1,2,3,4,5,6,7,8,9,10];
let intentos = 0;
    do {
        numeroIngresado = arrayDeNumeros[intentos];
    intentos++ 
}   while (numeroIngresado != numeroAdivinar);
    
 console.log(`El numero a adivinar era ${numeroAdivinar} y se adivinó en ${intentos} intentos`);