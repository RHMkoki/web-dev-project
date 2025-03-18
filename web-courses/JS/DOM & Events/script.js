let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";
    cart.forEach((product, index) => {
        cartList.innerHTML += `<li>${product.item} - $${product.price} <button onclick="removeItem(${index})">Remove</button></li>`;
    });
    document.getElementById("total").innerText = total;
}

function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}
