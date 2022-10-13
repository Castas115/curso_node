//////////////////////////////////////////////////////////////
// CARGA DE LOS MÓDULOS
const express = require("express")
const hbars = require("express-handlebars")
const mysql = require("mysql2/promise")
//////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
// INICIALIZACIÓN MIDDLEWARE
let app = express()
app.engine("handlebars", hbars.engine() )
app.set("view engine", "handlebars")
app.set("views", "./vistas")
app.use("/css", express.static("./css") )
//////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
// RUTAS DE LA APLICACIÓN
app.get("/", async function(peticion, respuesta) {
    let sql = "SELECT * FROM geo_provincias"
    let [filas, campos] = await global.conexion.query(sql)
    respuesta.render("inicio", {data: {datos: filas} })
})
app.get("/provincia/:id", async function(peticion, respuesta) {
    let sql = "SELECT * FROM geo_municipios WHERE provincia_id=" + peticion.params.id
    let [filas, campos] = await global.conexion.query(sql)
    respuesta.render("municipios", {data: {datos: filas} })
})
//////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////
// INICIALIZACIÓN SERVIDOR
app.listen(3000, async function(){
    global.conexion = await mysql.createConnection({
        host: "localhost",
        user: "osboxes",
        password: "ABCabc123.",
        database: "cosas"
    })
    console.log("Servidor a la escucha")
})
//////////////////////////////////////////////////////////////
