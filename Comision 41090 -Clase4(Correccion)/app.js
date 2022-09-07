

let bienvenido = "Bienvenido"

let nombre = prompt("Ingrese su nombre y apellido para continuar o escriba SALIR para cancelar")

let salir = "SALIR"
let juego1 = 24.99
let juego2 = 29.99
let juego3 = 9.99
let juego4 = 9.99
let juego5 = 14.99
let montoActual = 100.00


function precioJuego1(montoActual, juego1){

    montoActual = montoActual - juego1
    console.log(`${montoActual}`)
    
        
    }
    function precioJuego2(montoActual, juego2){

        montoActual = montoActual - juego2;
        console.log(`${montoActual}`)
        
       }
        function precioJuego3(montoActual, juego3){

            montoActual = montoActual - juego3
            console.log(`${montoActual}`)
            
       }
            function precioJuego4(montoActual, juego4){

                montoActual = montoActual - juego4
                console.log(`${montoActual}`)
       }
       function precioJuego5(montoActual, juego5){

        montoActual = montoActual - juego5
        console.log(`${montoActual}`)
        
            
        }
let arrayGames = [juego1 = 24.99, juego2 = 29.99, juego3 = 9.99,  juego4 = 9.99, juego5 = 14.99]

let arrayS =["Cyberpunk 2077", "Assasins Creed Valhala", "God Of War 4", "Bloodborne", "Metro Exodus"  ]

while(nombre !== salir){
    let bienvenida = bienvenido + " " + nombre



let tarjeta = prompt("Ingrese una tarjeta de 8 digitos.")

while (tarjeta <= 9999999 || tarjeta >= 99999999) {

    tarjeta = prompt("Por favor, ingrese una tarjeta valida.")

}

console.log(bienvenida)
alert(`${bienvenida}, su tarjeta fue tomada con exito.`)


let game = prompt(`Elija una de las ofertas disponibles:

1.Cyberpunk 2077(24,99 USD$)
2.Assasins Creed Valhala(29,99 USD$)
3.God Of War 4(9,99 USD$)
4.Bloodborne(9,99 USD$)
5.Metro Exodus(14,99 USD$)

MONTO DISPONIBLE(100,00 USD$)`)

while (game <= 0 || game >= 6 ) {

    alert("Por favor asegurese de seleccionar uno de los productos que hay dentro del catalogo.")

    game = prompt(`Elija una de las ofertas disponibles:

1.Cyberpunk 2077(24,99 USD$)
2.Assasins Creed Valhala(29,99 USD$)
3.God Of War 4(9,99 USD$)
4.Bloodborne(9,99 USD$)
5.Metro Exodus(14,99 USD$
    
MONTO DISPONIBLE(100,00 USD$)`)

}

switch (game) {
    case "1":
        console.log("Gracias por su compra(Cyberpunk 2077)")
            precioJuego1(montoActual, juego1)
        alert(`Gracias por comprar ${arrayS[0]}(${arrayGames[0]} $USD)
        Monto actual en el monedero ${montoActual} USD$`)
        break;
    case "2":
        console.log("Gracias por su compra(Assasins Creed Valhala)")
            precioJuego2(montoActual, juego2)
        alert(`Gracias por comprar ${arrayS[1]}(${arrayGames[1]} $USD) 
        Monto actual en el monedero ${montoActual} USD$`)
        break
    case "3":
        console.log("Gracias por su compra(God Of War)")
        
            precioJuego3(montoActual, juego3)
        alert(`Gracias por comprar ${arrayS[2]}(${arrayGames[2]} $USD)
        Monto actual en el monedero ${montoActual} USD$`)
        break
    case "4":
        console.log("Gracias por su compra(Bloodborne)")
            precioJuego4(montoActual, juego4)
        alert(`Gracias por comprar ${arrayS[3]}(${arrayGames[3]} $USD)
        Monto actual en el monedero ${montoActual} USD$`)
        break
    case "5":
        console.log("Gracias por su compra(Metro Exodus)")
            precioJuego5(montoActual, juego5)
        alert(`Gracias por comprar ${arrayS[4]}(${arrayGames[4]} $USD)
        Monto actual en el monedero ${montoActual} USD$`)
        break
    default:
        console.log("No se selecciono ninguna opcion valida, por favor recargue la pagina e intente nuevamente")
        alert("No se selecciono ninguna opcion valida, por favor recargue la pagina e intente nuevamente")
        break;

        
}
break
}
if(nombre === salir){
    
}

    








