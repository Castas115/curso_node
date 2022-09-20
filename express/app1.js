const express = require("express")

//toda la funcionalidad de express está en un objeto con propiedades y métodos. Lo mejor es asignarlo a una variable

let app = express()

app.listen(3000, function(){
    console.log("Listening on port 3000")
})

app.get("/", function(req, res){
    res.send("Punto de inicio de la app")
})

app.get("/prueba", function(req, res){
    res.send("Endpoint de prueba")
})

app.post("/contacto ", function(req, res){
    res.send("Endpoint de prueba")
})

app.all(/\/(super)+tontos$/, function(req, res){
    respuesta.send("ejemplo de ruta dinámica.")
})