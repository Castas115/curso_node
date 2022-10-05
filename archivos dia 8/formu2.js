const fs = require("fs")
const express = require("express")
const formidable = require("formidable")

const app = express()
const form = formidable({uploadDir: "./uploads"})

app.post("/formu2", function(peticion, respuesta) {
    form.parse(peticion, function(error, campos, archivos){
        
        respuesta.json({campos})
    })
})

app.listen(3000, function() {
    console.log("Servidor a la escucha")
})
