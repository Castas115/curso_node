const fs = require("fs")
const express = require("express")
const formidable = require("formidable")

const app = express()
const form = formidable()   // para manejo de los datos de formularios

app.post("/formu1", function(peticion, respuesta) {
    // Tenemos un problema: peticion.params solo recoge los datos enviados por GET, en la url. 
    //respuesta.send(peticion.params) // Esto no funciona
    form.parse(peticion, function(error, campos, archivos){
        // campos es un objeto con las propiedades correspondientes a los campos del formulario, y sus valores
        console.log("MENSAJE: ", campos.mensaje);

        // Devolvemos al cliente los campos con sus valores en json
        respuesta.json({campos})
    })
})

app.listen(3000, function() {
    console.log("Servidor a la escucha")
})
