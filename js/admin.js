// MAIN

// Código para futuros reportes donde se pueda mostrar el stock de lo producido

    const botonConsulta = document.querySelector("#btn");
    const container = document.querySelector(".containerStock");

    botonConsulta.addEventListener ("click", () => {
        Toastify({
            text: "Reporte momentáneamente no disponible!",
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
    })
