// Iteration 1: Names and Input
let hacker1 = "Darth Maul";
console.log (`The driver's name is Darth Maul`);
let hacker2 = "Poison Ivy"
console.log(`The navigator's name is Poison Ivy`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The ${hacker1} has the longest name, it has ${hacker1.length} characters.`) 
}
else if (hacker2.length > hacker1.length) { 
    console.log(`It seems that the navigatorhas the longest namem it has ${hacker2} characters.`)
}
else {
    console.log(`Wow, you have both equally long names, ${hacker1.length+hacker2.length} characters!`)
}
// Iteration 3: Loops
let hacker1= "Darth Maul";
let reservedName: 
for (let i = 0; i <= hacker1.length; i++) {
    reservedName = hacker1[i].toUpperCase() + "";
}
console.log(reservedName);


// Diego version: 
let hacker1 = "Darth Maul";
console.log (hacker1.length);
let hacker2 = "Poison Ivy"
console.log(hacker2.length);

if (hacker1.length > hacker2.length) {
    console.log(`The ${hacker1} has the longest name, it has ${hacker1.length} characters.`) 
}
    else if (hacker1.length < hacker2.length) {
        console.log(`Wow, you have both equally long names, ${hacker1.length+hacker2.length} characters!`);
    }
console.log("Iteration 002 - Variation 001");

//operador ternario // 
hacker1.length > hacker2.length 
? console.log(`The ${hacker1} has the longest name, it has ${hacker1.length} characters.`)
: console.log(`Wow, you have both equally long names, ${hacker1.length+hacker2.length} characters!`); 

// Loop
let dirverName = "";
for (const hackerName of newName) {
    driverName += hackerName
}