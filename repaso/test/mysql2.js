const http = require("http");
const url = require("url");
const mysql = require("mysql2");
let respuestaGlobal;    // Variable ÑAPACODE

// 1- Crear una conexión a MySQL
const conexion = mysql.createConnection( {
    host: "localhost",
    user: "osboxes",
    password: "ABCabc123.",
    database: "cosas",
} );
conexion.connect(); // Ojo, no estamos llamando a un callback...

// 2- Crear un servidor
const servidor = http.createServer(controla);

// 3- Función para atender la petición al servidor
function controla(peticion, respuesta) {
    respuesta.statusCode = 200; // opcional
    respuesta.setHeader("Content-Type", "text/json; charset=utf-8"); // OJO!!
    respuestaGlobal = respuesta;    // OJOOOOOOO!!
    consulta();
}

// 4- Al recibir una petición, ejecutar una consulta a MySQL (lista provincias)
function consulta() {
    conexion.query("SELECT provincia FROM geo_provincias ORDER BY RAND()", respuestaMySQL);
}

// 5- Pasamos los datos de la respuesta de MySQL a formato JSON y los mandamos al cliente
function respuestaMySQL(error, resultados, campos) {
    let cadena = JSON.stringify(resultados);
    respuestaGlobal.end(cadena);
}

// 6- Poner en marcha el servidor
servidor.listen(3000, "localhost", function(){
    console.log("Servidor a la escucha");
} );