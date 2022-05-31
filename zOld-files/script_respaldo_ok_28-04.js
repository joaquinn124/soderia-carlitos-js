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
        this.saldo = this.saldo + ventas;
    }
}

//FUNCTIONS

function montoVentaSifones (x) {
    return x * precioSifon;
}

function montoVentaBidones (x) {
    return x * precioBidon;
}

function montoDeVenta (saldoProdUno, saldoProdDos) {
    let saldo = saldoProdUno + saldoProdDos;
    return saldo;
}

const crearCliente = () => {
    let nombreCliente = prompt("Ingrese Nombre: ");
    let apellidoCliente = prompt("Ingrese Apellido: ");
    let direccionCliente = prompt("Ingrese Direccion: ");
    let saldoo = 0;
    
    const nuevoCliente = new Cliente (nombreCliente, apellidoCliente, direccionCliente, saldoo);
    return nuevoCliente;
}

// ARRAYS

let listadoClientes = [];
let totalAdeudadoClientes = [];

// DOM

/* let parrafoBienvenida = document.createElement("p");
parrafo.innerHTML = "<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>";
document.body.appendChild (parrafo); */

//MAIN

while (flag != 0) {
    let selectOpt = parseInt(prompt('Bienvenido a CARLITOS -Sodería-\nPor favor elige una opción:\n1 - Para ingresar ventas\n2 - Para consultar saldos adeudados\n3 - Para cargar nuevos clientes\n4 - Para salir'));
    switch(selectOpt) {
        case 1:
            const myJSON = JSON.stringify(listadoClientes);
            let selectClient = parseInt(prompt(`Seleccionar cliente:\n1 -${myJSON}\n2 - ${listadoClientes[1]}\n3 - ${listadoClientes[2]}`));
            switch(selectClient) {

                case 1:
                    let sifones = parseInt(prompt('Ingresa la cantidad de sifones vendidos:'));
                    let bidones = parseInt(prompt('Ingresa la cantidad de bidones vendidos:'));
                    
                    let ventasClienteUno = montoDeVenta(montoVentaSifones(sifones), montoVentaBidones(bidones));
                    
                    let saldoVentasClienteUno = listadoClientes[0];
                    saldoVentasClienteUno.calcularSaldo (ventasClienteUno);
                    console.log(saldoVentasClienteUno);
                    break;

                case 2:
                    let sifones2 = parseInt(prompt('Ingresa la cantidad de sifones vendidos:'));
                    let bidones2 = parseInt(prompt('Ingresa la cantidad de bidones vendidos:'));
                    
                    let ventasClienteDos = montoDeVenta(montoVentaSifones(sifones2), montoVentaBidones(bidones2));
                    
                    let saldoVentasClienteDos = listadoClientes[1];
                    saldoVentasClienteDos.calcularSaldo (ventasClienteDos);
                    console.log(saldoVentasClienteDos);
                    break;
                
                case 3:
                    let sifones3 = parseInt(prompt('Ingresa la cantidad de sifones vendidos:'));
                    let bidones3 = parseInt(prompt('Ingresa la cantidad de bidones vendidos:'));
                    
                    let ventasClienteTres = montoDeVenta(montoVentaSifones(sifones3), montoVentaBidones(bidones3));
                    
                    crearCliente.nuevoCliente.calcularSaldo (ventasClienteTres);
                
                
                default:
                    alert('El número ingresado debe ser entre 1 y 3')
                    break;
            }
            break;

        case 2:
            alert ('Reporte momentáneamente no disponible');
            flag = 0;
            break;

        case 3:
            let clientCreated = crearCliente();
            listadoClientes.push(clientCreated);
            console.log(listadoClientes);
            break;
            
        case 4:
            alert ('Gracias por visitarnos!');
            flag = 0;
            break;
        
        default:
            alert ('Opc. Incorrecta');
            break;
    }
    console.log(listadoClientes);
}