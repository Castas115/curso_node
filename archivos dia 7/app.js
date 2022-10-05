const express = require("express")
const app = express()

// Acceso a recursos estáticos
app.use("/css", express.static("css"))
app.use("/img", express.static("img"))
app.use(express.static("html")) // OJO!!

// No hay enrutador. Hale

// Poner en marcha el servidor
app.listen(3000, function() {
    console.log("Servidor en marcha")
})

