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
// Esta ruta tiene una EXPRESIÓN REGULAR
app.all(/\/(super)+tonto$/, function(peticion, respuesta){
    respuesta.send("ejemplo ruta dinámica");
} )
// Otra expresión regular:
// Pilla: /pipo, /Pipo, /PIPO, /pIpO... (por el "i" al fina)
// No pilla: cualquier otra cosa
app.get(/\/pipo/i, function(peticion, respuesta){
    respuesta.send("Esto es un pipo");
} )
// Pilla: /equipo/1, /equipo/58, /equipo/0000...
// No pilla: /equipo/, /equipo/aaa, /equipo/123hvg121...
app.get(/\/equipo\/[0-9]+/, function(peticion, respuesta){
    respuesta.send("Esto es un equipo");
} )
// FIN DEFINICIONES DE RUTAS
// ------------------------------------------------

// Ponemos en marcha el servidor
app.listen(3000, function(){
    console.log("Servidor a la escucha");
} )

