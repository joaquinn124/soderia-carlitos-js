// ARRAYS

let listadoSuscriptores = JSON.parse(localStorage.getItem("suscriptorsList")) || [];

// DOM

const botonSuscripcion = document.querySelector("#btnSuscripcion");
const parrafo = document.querySelector("#parrafo");

// MAIN

//funcion para guardar lista de correos suscriptos
botonSuscripcion.addEventListener ("click", () => {
  guardarEmail();
})

const guardarEmail = () => {
    if (document.getElementById("emailSuscrip").value != "") {
        let nuevoEmail = document.getElementById("emailSuscrip").value;
        listadoSuscriptores.push(nuevoEmail);
        localStorage.setItem("suscriptorsList", JSON.stringify(listadoSuscriptores));
        Toastify({
            text: "Gracias por suscribirte a nuestro newsletter!",
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
            text: "Campo vacío. Ingresa un email",
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
}