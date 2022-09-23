// EJERCICIO: 
// Pon comentarios en el código explicando qué hace cada cosa.

// =============================================================
// Carga de los módulos que vamos a usar
const http = require('http');
const url = require("url");
const mysql = require("mysql2");
// =============================================================


// =============================================================
// Conexión a MySQL
const conexion = mysql.createConnection({
    host: "localhost",
    user: "osboxes",
    password: "ABCabc123.",
    database: "cosas"
});
// =============================================================


// =============================================================
// Creamos el servidor.
// Al recibir una petición del navegador...
const servidor = http.createServer((peticion, respuesta) => {
	// Preparativos para la respuesta
    respuesta.statusCode = 200;
    respuesta.setHeader('Content-Type', 'text/json; charset=utf-8');

	// Obtenemos información sobre la petición. Es un objeto muy complejo
	// Solo me interesa la parte query, que contiene los parámetros
    let objetoUrl = url.parse(peticion.url, true);
	let parametros = objetoUrl.query;

	// Si parametros.provincia no es undefined, es porque le he pasado un parámetro llamado "provincia". Por lo tanto...
	if(parametros.provincia != undefined) {
		// Construimos una cadena sql. OJO!! Es sql inseguro
		let sql = "SELECT * FROM geo_municipios WHERE provincia_id = " + parametros.provincia;
		// Le mandamos esa cadena a MySQL, y a ver qué responde
		conexion.query(sql, function(error, resultados, campos){
			// Si ha respondido con un error, detenemos el programa aquí
			if(error) throw error;
			// Si no, pasamos los resultados a una cadena JSON y la mandamos al navegoar
			respuesta.end(JSON.stringify(resultados));
		});
	} else {
		// Pero si el parámetro "provincia" es undefined, es porque no se lo he pasado, así que
		// mandamos al navegador el objetoURL convertido a JSON
		//respuesta.end(JSON.stringify(objetoUrl));
		// En vez de eso, podría haber mandado un mensaje de error personalizado:
		respuesta.end("No has indicado el código de la provincia, gañán!");
	}
});

servidor.listen(3000, 'localhost', () => {
	conexion.connect();
    console.log(`Servidor a la escucha en http://localhost:3000/`);
});