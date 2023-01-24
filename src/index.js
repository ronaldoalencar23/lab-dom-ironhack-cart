// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");
  const priceNumber = parseFloat(price.innerHTML);
  const quantityNumber = quantity.valueAsNumber;
  const subtotalPrice = priceNumber * quantityNumber;
  subtotal.innerHTML = subtotalPrice;
  console.log(quantity);
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  const products = document.getElementsByClassName("product");
  let totalProducts = 0;
  for (let i = 0; i < products.length; i++) {
    totalProducts += updateSubtotal(products[i]);
  }

  // ITERATION 3
  const totalPrice = document.querySelector("#total-value span");
  totalPrice.innerHTML = totalProducts;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
