const express = require("express")

// Toda la funcionalidad de express está en un objeto con propiedades y métodos. Lo mejor es asignarlo a una variable
let app = express()

// MIDDLEWARE

// ------------------------------------------------
// INICIO DEFINICIONES DE RUTAS
app.get("/", function(peticion, respuesta){
    respuesta.send("Punto de inicio de la app")
} )
app.get("/prueba", function(peticion, respuesta){
    respuesta.send("Endpoint de prueba");
} )
app.all("/contacto", function(peticion, respuesta){
    respuesta.send("formulario enviado");
} )
app.all(/\/(super)+tonto$/, function(peticion, respuesta){
    respuesta.send("ejemplo ruta dinámica");
} )
// FIN DEFINICIONES DE RUTAS
// ------------------------------------------------

// Ponemos en marcha el servidor
app.listen(3000, function(){
    console.log("Servidor a la escucha");
} )

