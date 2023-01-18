// String methods 1
// Dada la string que tenéis a continuación, haced los console.log() correspondientes para conseguir los siguientes outputs:
let stringToLog = '    JavaScript is fun! ';
 console.log(str.length) // 23
 console.log(str); // 'JavaScript is fun!' 
 console.log(str.trim()) /* ['java', 'cript i', ' fun!'] */ 
 console.log(str.toUpperCase()) /* 'JAVASCRIPT IS FUN!' */ 
// 'f'
// 5
// 15
console.log(str.replace("Javascript", "CSS")) /* 'CSS is fun!' */ 

// String methods 2
Dada la string stringToChange, modificadla de tal manera que los console.log() devuelvan los outputs comentados.
/* 1 */  
const original = 'Hello world!';
let stringToChange = 'Hello world!';
stringToChange = stringToChange.split(0,5);
console.log(stringToChange.endsWith('o')); // true

/* 2 */ 
const original = 'Hello world!';
let stringToChange = 'Hello world!';
console.log(stringToChange.charAt(3)); // 'r'

/* 3 */ 
const original = 'Hello world!';
let stringToChange = 'Hello world!';
console.log(stringToChange.includes('hello')); // true

/* 4 */ 
const original = 'Hello world!';
let stringToChange = 'Hello world!';
console.log(stringToChange.lastIndexOf('o')); // 4

/* 5 */ 
const original = 'Hello world!';
let stringToChange = 'Hello world!';
console.log(stringToChange.indexOf('w')); // -1


// Number Methods 1:
// En un banco quieren hacer una web que muestre cuánto dinero ha ganado al día un usuario. Dicho usuario ha ganado en un mes que tiene 30 días un total de 3100€. ¿Cómo mostrarías esa cifra correctamente para el usuario?
let totalGanado = 3100;
let diasDelMes = 30;
let gananciaDiaria = (totalGanado / diasDelMes).toFixed(2);
console.log(gananciaDiaria);


// Number Methods 2:
// En una página de diseño quieren crear una paleta de colores, para ello quieren coger un elemento representado de forma hexadecimal y sumarle 33 66 55. Si se pasa del valor 255 (en decimal) de la paleta de colores empezará desde 00. Haz un ejemplo con el color #0000FF sabiendo que cada canal R-G-B corresponde, en orden, a las cifras de dos en dos. R = 00, G=00, B=ff.

letColorR = 0;
letColorG = 0;
letColorB = 255;

colorR += 33;
colorG += 66;
colorB += 55;

colorB -= 255; // restar 

console.log(colorR, colorG, colorB);

colorR.toString(16); // (16) es el número que me permitirá convertir el resultado en hexadecimal, (2) en binario, el argumento máximo puede ser (36) para el código del color.
colorG.toString(16);
colorB.toString(16);

console.log(colorR, colorG, colorB);

let newColor = "#" + colorR + colorG + colorB;

console.log(newColor);