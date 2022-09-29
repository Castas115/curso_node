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
    // EJERCICIO:
    // Crea aquí un array de productos. Cada producto es un objeto con las propiedades id, nombre y precio. Con 5 o 6 productos vale
    // Al recibir la petición, buscamos en este array el producto que corresponda al :idProducto de la ruta
    // Si no está en el array, mandamos un mensaje al navegador
    // Si está, mandamos un mensaje como este: "Producto: xxxx. Precio total: zzzz"
    // xxxx = el nombre del producto
    // zzzz = el precio del producto multiplicado por la cantidad
    let catalogo = [
        {id: 22, nombre: "Pistachos sabor jamón", precio: 1.5}, 
        {id: 35, nombre: "Hostias en vinagre", precio: 4.65}, 
        {id: 12, nombre: "Almendras amargas", precio: 5.99}, 
        {id: 666, nombre: "Tiara papal usada", precio: 1233.00}, 
        {id: 40, nombre: "Tablero Ouija con Python", precio: 68.37},
    ];
    let yuyu = catalogo.find((item) => item.id == peticion.params.idProducto)
    if(yuyu == undefined) {
        respuesta.send("No se ha encontrado nada");
    } else {
        respuesta.send(`Producto: ${yuyu.nombre}. 
                Precio total: ${yuyu.precio * peticion.params.cantidad}`);
    }

})

// FIN DEFINICIONES DE RUTAS
// ------------------------------------------------

// Ponemos en marcha el servidor
app.listen(3000, function(){
    console.log("Servidor a la escucha");
} )

