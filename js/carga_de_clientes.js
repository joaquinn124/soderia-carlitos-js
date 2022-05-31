// MAIN

// Código para creación de nuevos clientes

    // bloque de funciones que permite crear nuevos clientes a pushear luego, en 'listadoClientes[]' cuando el usuario hace click en el botón 'Cargar nuevo' en la página 'admin_clientes.html'
    let listadoClientes = JSON.parse(localStorage.getItem("clientes")) || [];

    class Cliente {
        constructor (nombre, apellido, direccion, saldo) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.direccion = direccion;
            this.saldo = saldo;
        }
    }

    const crearCliente = () => {
        let nombreCliente = document.getElementById("nombre").value;
        let apellidoCliente = document.getElementById("apellido").value;
        let direccionCliente = document.getElementById("direccion").value;
        
        let nuevoCliente = new Cliente (nombreCliente, apellidoCliente, direccionCliente);
        
        listadoClientes.push(nuevoCliente);
        localStorage.setItem("clientes", JSON.stringify(listadoClientes));
    }

    const confirmDatos = document.querySelector("#btnIngresoCliente"); 

    confirmDatos.addEventListener ("click", () =>{
        if (document.getElementById("nombre").value != "" && document.getElementById("apellido").value != "" && document.getElementById("direccion").value != "") {
        crearCliente();
        Toastify({
            text: "Cliente creado exitosamente!",
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
        } else {
            Toastify({
                text: "Campos vacíos. Por favor verificar datos ingresados",
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
        }
    })
