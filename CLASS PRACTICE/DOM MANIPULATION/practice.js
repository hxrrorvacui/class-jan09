// Exercise 001 /
let newElement = document.createElement("p");
let newVar = document
.querySelector("#insert-p")
.appendChild(newElement);
newElement.id="p1"
console.log(newElement);


// EXERCISE 002 //
let div1 = document.createElement("div");
div1.id = "nested";
let div1Var= document 
.querySelector("#section")
.appendChild(div1);
console.log(div1);

// EXERCISE 003 //

newElement.innerText = "de aura rosa y alma negra"
// referencia el nombre de la variable donde cree la "p". 

// EXERCISE 004 //

function changeText(text) {
    let p = document.getElementById("p1");
    p.innerText = text;
}
changeText("pa' que hagas magic")

  // BlOQUE 002 ///

  /// EXERCISE 005 //
const buttonElement = document.getElementById("buttonelement");
const toggleFunction = () => {
    document.querySelector(".red").classList.toggle("green");
};
buttonElement.addEventListener("click", toggleFunction);

// const addFunction = () =>  {
//     const greenElement= document.getElementById("default");
//     const redElement= document.getElementById("new");
//     if (greenElement.style.display === "none") {
//         greenElement.style.display = "block";
//         redElement.style.display = "none";
//     } else { 
//         greenElement.style.display = "none";
//         redElement.style.display = "block";
//     }
// };

// EXERCISE 006 //
let newElement = document.createElement("div");
let newVar = document
.querySelector("#insert-p")
.appendChild(newElement);
newElement.id="p1"
console.log(newElement);


// EXERCISE 007 // 

// 3º - Crea una <div class="remove-class"></div> y elimínale la clase mediante js. La clase remove-class debe hacer que el elemento mida 100vw de ancho y 100px de alto y tener un background azul.

let removeClass =document.createElement("div");
let newRemoveClass= document.querySelector("#block2Q3").appendChild(removeClass);
removeClass.className = "removeClass";
//uncomment one of the following and see it change:
removeClass.classList.remove("removeClass");
// removeClass.classList.add("green-box")

removeClass.innerHTML = "removeClass Block 2 Q 3"
console.log(removeClass);

// EXERCISE 008 // 

// 4º 1 - Crea un botón que, al ser pulsado, introduzca en el dom un <p>Texto insertado</p>

function addText() {
    let newParagraph = document.createElement("p");
    let text = document.createTextNode("Texto insertado");
    newParagraph.appendChild(text);
    document.querySelector("#block2Q4").appendChild(newParagraph);
  }

// EXERCISE 009 // 

// 5º - Crea un botón que, al ser pulsado, introduzca una tabla de tres columnas y tres filas.

function addTable() {
    let table = document.createElement("table");
    for (let i = 0; i < 3; i++) {
      let row = document.createElement("tr");
      for (let j = 0; j < 3; j++) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode("Cell " + (i+1) + "," + (j+1));
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
    document.querySelector("#block2Q5").appendChild(table);
  }