// Conditionals 1 –
const age = parseInt(prompt('Welcome to Movie Paradise! How old are you?'));
if (age <= 5) {
    console.log("Free Entrance");
} else if (age > 5 && age < 15) {
    console.log("20% Discount");
} else if (age >= 15 && age <= 60) {
    console.log("Regular Price");
} else if (age > 60) {
    console.log("40% Discount");
}


// // Conditionals 2 –
const userName = prompt("Your name here");
const action = prompt ("What type of action would you like to choose from:")

switch(action) {
    case "greet":
        console.log(`Hello, ${userName}`);
        break;
    case "say bye":
            console.log(`Sayonara, ${userName}`);
            break;
    case "ask":
            console.log(`How are you? ${userName}`);
            break;
    case "scream":
            console.log(`AHHHHH HOLY CRAP`);
            break;
    case "rest":
            console.log(`We out!`);
            break;
    default:
    console.log(
        "I don-t know how to do that yet, I'm just a lil program :("
    );
    break;
}