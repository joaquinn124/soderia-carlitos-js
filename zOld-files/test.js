
const contenedorProductos = document.querySelector('.container .row');
  
stockProductos.forEach((producto) => {
    const article = document.createElement('article');
    article.classList.add('card', 'col-3', 'm-2');

    article.innerHTML = `<img src=${producto.img} class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.desc}</p>
        <p class="card-text">Precio $${producto.precio}</p>
        <a href="#" class="btn btn-primary">Agregar al carrito</a>
    </div>`

contenedorProductos.appendChild(article);
})