const express = require("express")
const mysql = require("mysql2/promise")
const app =  express()
const infoConexion ={
    host:"localhost", 
    user:"jon",
    password:"",
    database: "curso_node"
}

let conexion 
app.listen(3000, async function(){
    conexion = await mysql.createConnection(infoConexion )
    console.log("Servhidor en marcha oleee")
})

app.get("/busca/:nombre", async (req, res) =>{
    let sql = `SELECT *FROM geo_municipios WHERE municipio LIKE '%${req.params.nombre}%'`
    [filas, campos] = await conexion.query(sql)
    res.send(filas)
})


