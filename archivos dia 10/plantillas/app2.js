const express = require("express")
const hbars = require("express-handlebars")
const mysql = require("mysql2/promise")

let app = express()
app.engine("handlebars", hbars.engine() )
app.set("view engine", "handlebars")
app.set("views", "./vistas")
let conexion       // Esto es para almacenar la conexión a MySQL

app.use("/css", express.static("./vistas/layouts") )

///////////////////////////////////////////////////////////
app.get("/", function(peticion, respuesta) {
    respuesta.render("inicio", {data: {titulo: "Inicio"}})
})
app.get("/ahora/:color?", function(peticion, respuesta) {
    let opciones = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    }
    let fe = new Date().toLocaleString("es", opciones)
    let datos = {
        color: peticion.params.color,
        fecha: fe,
        titulo: "Prueba de color",
    }
    respuesta.render("ahora", {data: datos})
})
app.get("/municipios/:idprov", async function(peticion, respuesta) {
    let sql = "SELECT * FROM geo_municipios WHERE provincia_id = " + peticion.params.idprov
    let [filas, campos] = await conexion.query(sql)
    respuesta.render("municipios", {data: {datos: filas} })
})
app.get("/nosotros", function(peticion, respuesta) {
    // Con {layout: false}, le decimos que no queremos que use la plantilla por defecto
    respuesta.render("nosotros", {layout: false})
})
///////////////////////////////////////////////////////////

app.listen(3000, async function(){
    conexion = await mysql.createConnection({
        host: "localhost",
        user: "osboxes",
        password: "ABCabc123.",
        database: "cosas"
    })
    console.log("Servidor a la escucha")
})





