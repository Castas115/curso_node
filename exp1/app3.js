const express = require("express")

// Toda la funcionalidad de express está en un objeto con propiedades y métodos. Lo mejor es asignarlo a una variable
let app = express()

// MIDDLEWARE

// ------------------------------------------------
// INICIO DEFINICIONES DE RUTAS
app.get("/", function(peticion, respuesta){
    respuesta.send("Punto de inicio de la app")
} )
app.get("/producto/:idProducto/cantidad/:cantidad", function(peticion, respuesta) {
    // Los parámetros :idProducto y :cantidad de la ruta los tenemos disponibles
    // en peticion.params.idProducto y peticion.params.cantidad
    let cadena = "Producto: " + peticion.params.idProducto
    cadena += "<hr>Cantidad: " + peticion.params.cantidad
    respuesta.send(cadena)
    // EJERCICIO:
    // Crea aquí un array de productos. Cada producto es un objeto con las propiedades id, nombre y precio. Con 5 o 6 productos vale
    // Al recibir la petición, buscamos en este array el producto que corresponda al :idProducto de la ruta
    // Si no está en el array, mandamos un mensaje al navegador
    // Si está, mandamos un mensaje como este: "Producto: xxxx. Precio total: zzzz"
    // xxxx = el nombre del producto
    // zzzz = el precio del producto multiplicado por la cantidad
})

// FIN DEFINICIONES DE RUTAS
// ------------------------------------------------

// Ponemos en marcha el servidor
app.listen(3000, function(){
    console.log("Servidor a la escucha");
} )

