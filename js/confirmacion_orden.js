//MAIN

// Código para creación de nuevo pedido online

    //Nueva orden de venta a registrar en la base luego de que cliente armó su carrito
    let confirmedOrdersList = JSON.parse(localStorage.getItem("")) || [];

    class confirmedOrder {
        constructor (name, lastName, address, phone) {
            this.nombre = name;
            this.apellido = lastName;
            this.direccion = address;
            this.telefono = phone;
        }
    }

    const createOrder = () => {
        let clientName = document.getElementById("nombre").value;
        let clientLastName = document.getElementById("apellido").value;
        let clientAddress = document.getElementById("direccion").value;
        let clientPhone = document.getElementById("telefonoContacto").value;
        
        let newOrder = new confirmedOrder (clientName, clientLastName, clientAddress, clientPhone);
        
        confirmedOrdersList.push(newOrder);
        localStorage.setItem("ordersConfirmed", JSON.stringify(confirmedOrdersList));
    }

    const confirmData = document.querySelector("#btnConfirmOrder"); 

    confirmData.addEventListener ("click", () =>{
        if (document.getElementById("nombre").value != "" && document.getElementById("apellido").value != "" && document.getElementById("direccion").value != "" && document.getElementById("telefonoContacto").value != "") {
          createOrder();
          Toastify({
          text: "Su compra ha sido cargada correctamente!",
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
