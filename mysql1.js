const mysql = require("mysql2");
// Conexión con MySql:
const conexion = mysql.createConnection({
    host:       "localhost",
    user:       "osboxes",
    password:   "ABCabc123.",
    database:   "cosas"
});

// Abrir la conexión
conexion.connect(conectada);
function conectada(error) {
    // Comprobar error
    if(error) throw error;

    //consulta
    conexion.query("SELECT * FROM geo_provincias", respuesta);
}

function respuesta(error, resultados, campos){
    if(error) throw error;
    console.log(resultados);

}