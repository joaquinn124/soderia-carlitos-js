//VARs

const todaySales = x => x*25;
const fixCosts = x => x*7.5;
const stock = x => 7500-x;

let flag = 1;
let option

//ARRAYS
const stockProd = [siphon1, water1, water2]
let selectedProd = []

//FUNCTIONS

function buyAction (option) {
    option = parseInt(prompt('Iniciar compra.\nElige un método de pago entre las siguientes opciones:\n1 - Efectivo\n2 - Cuenta corriente\n3 - Salir del menú actual'))
    switch (option) {
        case 1:
            siphon1.cash()
            alert(`El precio del producto es: $${siphon1.price}`)
            break;

        case 2:
            siphon1.cAccount()
            alert(`El precio del producto es: $${siphon1.price}`)
            break;

        case 3:
            alert('Gracias por visitarnos!')
            flag = 0
            break;

        default:
            alert('El número ingresado debe ser entre 1 y 3')
            break;
    }
}

function selectedItem (option){
    for (const product of stockProd) {
        switch(option) {
            case 1:
                if (product.type == 'soda') {
                    selectedProd.push (product)
                }
                break;
            case 2:
                if (product.type == 'agua') {
                    selectedProd.push (product)
                }
                break;
            default:
                break;
        }
    }
    return selectedProd;
}

//MAIN

while (flag != 0) {
    selectedProd=[];
    selectOpt = parseInt(prompt('Bienvenido a CARLITOS -Sodería-\nPor favor elige una opción:\n1 - Si sos Cliente\n2 - Si sos Vendedor\n3 - Para salir'));
    switch(selectOpt) {
        case 1:
            option = parseInt(prompt ('Elige el producto que quieras comprar: \nOpc. 1: Sifón de 0.5L\nOpc. 2: Bidón de agua (5L)\nOpc. 3: Bidón de agua (15L)\nOpc. 4: Cancelar compra'))
            switch (option) {
                case 1:
                    alert(`El precio del producto es de: $${siphon1.price}`)
                    buyAction(selectedProd)
                    break;

                case 2:
                    alert(`El precio del producto es de: $${siphon1.price}`)
                    buyAction(selectedProd)
                    break;

                case 3:
                    alert(`El precio del producto es de: $${siphon1.price}`)
                    buyAction(selectedProd)
                    break;

                case 4:
                    alert('Gracias por visitarnos!');
                    flag = 0;
                    break;

                default:
                    alert('El número ingresado debe ser entre 1 y 4')
                    break;
            }
        case 2:
            let reportDay = parseInt(prompt('Consultar reportes. Elige un n° de opción:\n1 - Reporte de hoy\n2 - Reporte de ayer\n3 - Reporte de anteayer\n4 - Últimos 7 días\n5 - Para salir'));
                switch (reportDay) {
                    case 1:
                        let qtySales = parseInt(prompt('Ingresá cantidad de sifones vendidos:'));
                            if (qtySales == 0) {
                                alert ('No hay reporte para mostrar');
                                flag = 0;
                                break;
                            } else {
                                let totalTodaySales = todaySales(qtySales);
                                let fixCostsToday = fixCosts(qtySales);
                                let availStock = stock(qtySales);
                                alert (`Tu reporte de Hoy:
                                \nTotal Ventas $${totalTodaySales}
                                \nTotal Gastos $${fixCostsToday}
                                \nSaldo neto: $${totalTodaySales - fixCostsToday}
                                \nStock restante para repartir ${availStock} un.`);
                            }
                            break;

                    case 2:
                        alert ('Reporte momentáneamente no disponible');
                        flag = 0;
                        break;
            
                    case 3:
                        alert ('Reporte momentáneamente no disponible');
                        flag = 0;
                        break;
            
                    case 4:
                        alert ('Reporte momentáneamente no disponible');
                        flag = 0;
                        break;
            
                    case 5:
                        alert ('Consulta finalizada!');
                        flag = 0;
                        break;
                    
                    default:
                        alert ('El número ingresado debe ser entre 1 y 5');
                        break;
                }
        case 3:
            alert ('Gracias por visitarnos!');
            flag = 0;                        break;
        
        default:
            alert ('El número ingresado debe ser entre 1 y 3');
            break;
    }
}