// DOM

const ordersContainer = document.querySelector(".orderList");

// Visualización de pedidos online realizados por clientes

orderList.forEach ((itemOrder) => {
    const listContainer = document.createElement('tr');
    listContainer.classList.add('tr-box');
    listContainer.innerHTML = `
        
            <td">${itemOrder.id}</td>
            <td>${itemOrder.name}</td>
            <td>${itemOrder.quantity}</td>
        
    `;
    ordersContainer.appendChild(listContainer);
});