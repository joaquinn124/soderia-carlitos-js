// DOM

const productsContainer = document.querySelector('.main-content .container .row');
const shoppingCartItems = document.getElementsByClassName("shoppingCartContainer");
const emptyCart = document.getElementById("emptyShoppingCart");
const cartCounter = document.getElementById("cartItemCounter");
const totalCartAmount = document.getElementsByClassName("totalAmount");
const addToCart = document.getElementsByClassName("add-to-cart");
const goToCheckOut = document.querySelector(".button-checkout");

// ARRAYS
let orderList = JSON.parse(localStorage.getItem("orderSaved")) || [];

// MAIN

stockProductos.forEach((producto) => {
    const article = document.createElement('article');
    article.classList.add('card', 'col-3', 'm-2');

    article.innerHTML = `<img src=${producto.img} class="card-img-top" alt="...">
    <div class="card-body" id="${producto.id}">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Precio $${producto.precio}</p>
        <a href="#" class="button btv-hover add-to-cart">Agregar al carrito</a>
    </div>`

    //agregador de elementos al DOM utilizando article
    productsContainer.appendChild(article);

    //asignación ID único a cada botón "Agregar al carrito"
    const button = document.getElementById(`${producto.id}`);
    button.addEventListener("click", shoppingCartAdder);
})

//asignación a variables, de valores provenientes del DOM
function shoppingCartAdder (e) {
    let button = e.target;
    let cartItem = button.parentElement;
    let productId = cartItem.getAttribute("id");
    let productName = cartItem.querySelector("h5").innerText;
    let productPrice = cartItem.querySelector(".card-text").innerText;

    itemAdder (productId, productName, productPrice);
}

function itemAdder (productId, productName, productPrice) {
    let shoppingCartContainer = document.createElement("div");
    let shoppingCartItems = document.querySelector("#shoppingCartItems");
    let productArray = document.getElementsByClassName("shoppingCartContainer");

    //verificación existencia producto en carrito
    for (let i=0; i < productArray.length; i++) {
        if (productArray[i].getAttribute("id") === productId) {
            Toastify({
                text: "Este producto ya fue agregado al carrito",
                duration: 3000,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                offset: {
                    x: -20,
                    y: 170
                  },
                style: {
                  background: "linear-gradient(to right, #EF5350, #FFC107)",
                },
              }).showToast();
            return;
        }
    }

    //agregado de ítems al carrito en DOM
    let cartItem = `
        <div class="shoppingCartContainer" id="${productId}">
            <span class="productName">${productName}</span>
            <span class="cart-price">${productPrice}</span>
            <input class="product-quantity" type="number" value="1">
            <button class="remove-btn">Borrar</button>
        </div>
    `;
    shoppingCartContainer.innerHTML = cartItem;
    shoppingCartItems.append(shoppingCartContainer);
    shoppingCartContainer.querySelector(".remove-btn").addEventListener("click", deleteShoppingCartItem);
    shoppingCartContainer.querySelector(".product-quantity").addEventListener("change", updateQuantity);
    //se refresca el total del carrito
    updatePrice();
}

//eliminar ítems de carrito
function deleteShoppingCartItem (e) {
    let btnClicked = e.target;
    btnClicked.parentElement.parentElement.remove();
    updatePrice();
}

//cambiar cantidades de un producto en carrito
function updateQuantity (e) {
    let quantity = e.target.value;
    if (isNaN(quantity) || quantity <= 0) {
        quantity = 1;
    }
    updatePrice();
}

//actualizar total carrito
function updatePrice () {
    let total = 0;
    for (const product of shoppingCartItems) {
        let price = parseFloat(product.querySelector(".cart-price").innerText.replace("Precio $",""));
        let quantity = product.querySelector(".product-quantity").value;
        total += price * quantity;
    }
    document.querySelector(".totalAmount").innerText = "$" + total;
    document.querySelector(".cart-quantity").textContent = shoppingCartItems.length;
}

//vaciar carrito
emptyCart.addEventListener("click", () => {
    document.getElementById("emptyShoppingCart").previousSibling.previousSibling.parentElement.previousSibling.previousSibling.remove();
    updatePrice();
})

//proceder a checkout
goToCheckOut.addEventListener("click", () => {
    orderSaver();
})

//función para guardar el pedido realizado por el cliente
function orderSaver () {
    for (const product of shoppingCartItems) {
        let productInOrder = `${product.getAttribute("id")}`;
        let nameProductInOrder = `${product.querySelector(".productName").innerText}`;
        let quantityInOrder = `${product.querySelector(".product-quantity").value}`;
        orderList.push({id: productInOrder, name: nameProductInOrder, quantity: quantityInOrder});
        localStorage.setItem("orderSaved", JSON.stringify(orderList));
    }
}