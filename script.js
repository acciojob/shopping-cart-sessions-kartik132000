// This is the boilerplate code given for you
// You can modify this code

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = ${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>;
    productList.appendChild(li);
  });
}

function renderCart() {
  cartList.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = ${item.name} - $${item.price} <button class="remove-from-cart-btn" data-id="${item.id}">Remove</button>;
    cartList.appendChild(li);
  });

  sessionStorage.setItem("cart", JSON.stringify(cart));
}

// Add item to cart
function addToCart(productId) {
  const product = products.find((p) => p.id == productId);
  if (product) {
    cart.push(product);
    renderCart();
  }
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id != productId);
  renderCart();
}

function clearCart() {
  cart = [];
  renderCart();
}

renderProducts();
renderCart();

productList.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart-btn")) {
    addToCart(event.target.dataset.id);
  }
});

cartList.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-from-cart-btn")) {
    removeFromCart(event.target.dataset.id);
  }
});

clearCartBtn.addEventListener("click", clearCart);