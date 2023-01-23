// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

 // get the calculate button
const calculatePricesBtn = document.getElementById('calculate');

// add a click event listener to the button
calculatePricesBtn.addEventListener('click', calculateAll);

function calculateAll() {
  // get the product element
  const singleProduct = document.querySelector('.product');

  // call the updateSubtotal function and pass the product element as an argument
  updateSubtotal(singleProduct);
}

function updateSubtotal(product) {
  // get the price and quantity elements
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  // extract the values from the elements
  const priceValue = parseFloat(price.innerHTML);
  const quantityValue = parseFloat(quantity.value);

  // calculate the subtotal
  const subtotal = priceValue * quantityValue;

  // get the subtotal element
  const subtotalElement = product.querySelector('.subtotal span');

  // update the subtotal element with the calculated subtotal
  subtotalElement.innerHTML = "$"+subtotal.toFixed(2);

  // return the subtotal value
  return subtotal;
}

}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
