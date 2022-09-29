const express = require("express")
const app =  express()

 //Acceso a recursos estáticos.
 app.use("/css", express.static("css"))
 app.use("/img", express.static("img"))
 app.use(express.static("html")) //NO ES NECESARIO PONER "html"

 //no hay enrutador

 app.listen(3000, function(){
    console.log("Servhidor en marcha oleee")
 })


 
