// MAIN 

// Código para cargar órdenes de venta por parte de los repartidores

// DOM
const botonVenta = document.querySelector("#btnVenta");
const contenedorClientes = document.querySelector('#clientesDisponibles');
const contenedorOrdenes = document.querySelector('#cargarCantidades');

//Display de clientes creados
botonVenta.addEventListener ("click", () => {

    contenedorClientes.innerHTML = "";

    listadoClientes.forEach((cliente) => {
        const ul = document.createElement('ul');
        
        //id="${cliente.direccion} permite asignar dinámicamente a cada cliente un ID único para luego utilizarlo en la carga de ventas
        ul.innerHTML = `<li class="listaClientesDisp">
            <a href="./pedidos_repartidor.html" class="btn btn-seconday" id="${cliente.direccion}">${cliente.nombre} ${cliente.apellido}</a>            
        </li>`
        contenedorClientes.appendChild(ul);
    });
})