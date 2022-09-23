const mysql = require("mysql2"); // cargamos el módulo de mysql
// Vamos a conectar este js con MySql. Esta es la conexión
const conexion = mysql.createConnection( {
    host: "localhost",
    user: "osboxes",
    password: "ABCabc123.",
    database: "cosas",
} );

// Pero está sin abrir. Vamos a abrirla:
conexion.connect(conectada);
function conectada(error) {
    // Si hay un error de conexión, paramos el programa:
    if(error) throw error;
    // Si no ha habido error de conexión, hacemos una consulta
    conexion.query("SELECT provincia FROM geo_provincias ORDER BY RAND()", respuesta);
}

function respuesta(error, resultados, campos) {
    if(error) throw error;
    console.log(resultados);
}





