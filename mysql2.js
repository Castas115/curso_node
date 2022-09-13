// 1- Crear una conexión a MySql
// 2- Crear un servidor
// 3- Función para atender la petición al servidor 
// 4- Al percibir una petición, ejecutar una query (lista prov)
// 5- Pasamos los datos de la respuesta mysql a json y los mandamos al cliente
// 6- Poner en marcha el server

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