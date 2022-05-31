//VARs
//La definición de variables mayormente está en inglés, excepto aquellas que hacen referencia a las actividades de la empresa, con el fin de que el desarrollador encuentre fácilmente posibles valores a modificar

let precioSifon = 45;
let precioBidon = 195;

let flag = 1;
let flag2 = 1;

// OBJECTs

class Cliente {
    constructor (nombre, apellido, direccion, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.saldo = saldo;
    }
    calcularSaldo(ventas) {
        this.saldo = ventas;
    }
}

//FUNCTIONS

function cantVentasUno (x) {
    x = x * precioSifon;
    return x;
}

function cantVentasDos (x) {
    x = x * precioBidon;
    return x;
}

function saldoDelCliente (saldoProdUno, saldoProdDos) {
    let saldo = saldoProdUno + saldoProdDos;
    return saldo;
}

/* const crearCliente = () => {
    let nombreCliente = prompt("Ingrese Nombre: ");
    let apellidoCliente = prompt("Ingrese Apellido: ");
    let direccionCliente = prompt("Ingrese Direccion: ");
    let saldoo = 0;
    
    const nuevoCliente = new Cliente (nombreCliente, apellidoCliente, direccionCliente, saldoo);
    return nuevoCliente;
} */

// ARRAYS

let listadoClientes = [];
let totalAdeudadoClientes = [];

//MAIN

//let clientCreated = crearCliente();
const crearCliente = () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let direccion = document.getElementById("direccion").value;

    let nuevoCliente = new Cliente (nombre, apellido, direccion)
    listadoClientes.push(nuevoCliente);
}

console.log(listadoClientes);