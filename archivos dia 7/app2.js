const express = require("express")
// Esto es para trabajar con MySQL de un modo más amigable
const mysql = require("mysql2/promise")
const app = express()
// Este objeto contiene info de la conexión a la bbdd
const infoConexion = {
    host: "localhost",
    user: "osboxes",
    password: "ABCabc123.",
    database: "cosas"
}
// Esta variable se usa cada vez que queramos hacer algo con mySQL
let conexion


// Creamos una ruta para buscar municipios por el nombre
app.get("/busca/:nombre", async function(peticion, respuesta){
    let sql = `SELECT * FROM geo_municipios WHERE municipio LIKE '%${peticion.params.nombre}%' `
    try{
        [filas, campos] = await conexion.query(sql) 
        respuesta.send(filas)
    } catch(error) {
        console.log(error);
    }
} )


// Poner en marcha el servidor
app.listen(3000, async function() {
    // Nos conectamos a MySQL
    conexion = await mysql.createConnection(infoConexion)
    console.log("Servidor en marcha")
})

