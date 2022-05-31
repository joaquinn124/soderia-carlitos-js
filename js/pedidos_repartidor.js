// DOM

const productsContainer = document.querySelector('.main-content .container .row');
const shoppingCartItems = document.getElementsByClassName("shoppingCartContainer");
const emptyOrder = document.getElementById("emptyOrderList");
const cartCounter = document.getElementById("orderItemCounter");
const totalOrderAmount = document.getElementsByClassName("totalAmountOrder");
const addToOrder = document.getElementsByClassName("add-to-cart");
const goToFinishOrder = document.querySelector(".button-finish");

// ARRAYS
let salesOrderList = JSON.parse(localStorage.getItem("saleOrderSaved")) || [];

// MAIN

stockProductos.forEach((producto) => {
    const article = document.createElement('article');
    article.classList.add('card', 'col-3', 'm-2');

    article.innerHTML = `<img src=${producto.img} class="card-img-top" alt="...">
    <div class="card-body" id="${producto.id}">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Precio $${producto.precio}</p>
        <a href="#" class="button btv-hover add-to-cart">Sumar al pedido</a>
    </div>`

    //agregador de elementos al DOM utilizando article
    productsContainer.appendChild(article);

    //asignación ID único a cada botón "Sumar al pedido"
    const button = document.getElementById(`${producto.id}`);
    button.addEventListener("click", shoppingCartAdder);
})

//asignación a variables, de valores provenientes del DOM
function shoppingCartAdder (e) {
    let button = e.target;
    let orderItem = button.parentElement;
    let productIdSold = orderItem.getAttribute("id");
    let productNameSold = orderItem.querySelector("h5").innerText;
    let productPriceSold = orderItem.querySelector(".card-text").innerText;

    itemAdder (productIdSold, productNameSold, productPriceSold);
}

function itemAdder (productId, productName, productPrice) {
    let shoppingCartContainer = document.createElement("div");
    let shoppingCartItems = document.querySelector("#shoppingCartItems");
    let productArray = document.getElementsByClassName("shoppingCartContainer");

    //verificación existencia producto en orden
    for (let i=0; i < productArray.length; i++) {
        if (productArray[i].getAttribute("id") === productId) {
            Toastify({
                text: "Este producto ya fue agregado a la orden",
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

    //agregado de ítems a la orden en DOM
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
    //se refresca el total de la orden
    updatePrice();
}

//eliminar ítems de la orden
function deleteShoppingCartItem (e) {
    let btnClicked = e.target;
    btnClicked.parentElement.parentElement.remove();
    updatePrice();
}

//cambiar cantidades de un producto en la orden
function updateQuantity (e) {
    let quantity = e.target.value;
    if (isNaN(quantity) || quantity <= 0) {
        quantity = 1;
    }
    updatePrice();
}

//actualizar total de la orden
function updatePrice () {
    let total = 0;
    for (const product of shoppingCartItems) {
        let price = parseFloat(product.querySelector(".cart-price").innerHTML.replace("Precio $",""));
        let quantity = product.querySelector(".product-quantity").value;
        total += price * quantity;
    }
    document.querySelector(".totalAmountOrder").innerText = "$" + total;
    document.querySelector(".cart-quantity").textContent = shoppingCartItems.length;
}

//vaciar orden
emptyOrder.addEventListener("click", () => {
    document.getElementById("emptyOrderList").previousSibling.previousSibling.parentElement.previousSibling.previousSibling.remove();
    updatePrice();
})

//proceder a finalizar orden
goToFinishOrder.addEventListener("click", () => {
    orderSaver();
    Toastify({
        text: "Pedido generado correctamente!",
        duration: 3000,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        offset: {
            x: -20,
            y: 170
          },
        style: {
          background: "linear-gradient(to right, #C6FF00, #9E9D24)",
        },
      }).showToast();
})

//función para guardar la orden realizada por el vendedor
function orderSaver () {
    for (const product of shoppingCartItems) {
        let productSoldId = `${product.getAttribute("id")}`;
        let nameProductSold = `${product.querySelector(".productName").innerText}`;
        let quantitySold = `${product.querySelector(".product-quantity").value}`;
        salesOrderList.push({id: productSoldId, name: nameProductSold, quantity: quantitySold});
        localStorage.setItem("saleOrderSaved", JSON.stringify(salesOrderList));
    }
}