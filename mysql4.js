// EJERCICIO: 
// Pon comentarios en el código explicando qué hace cada cosa.

const http = require('http');
const url = require("url");
const mysql = require("mysql2");

const conexion = mysql.createConnection({
    host: "localhost",
    user: "osboxes",
    password: "ABCabc123.",
    database: "cosas"
});

const servidor = http.createServer((peticion, respuesta) => {
    respuesta.statusCode = 200;
    respuesta.setHeader('Content-Type', 'text/json; charset=utf-8');

    let objetoUrl = url.parse(peticion.url, true);
	let parametros = objetoUrl.query;

	if(parametros.provincia != undefined) {
		let sql = "SELECT * FROM geo_municipios WHERE provincia_id = " + parametros.provincia;
		conexion.query(sql, function(error, resultados, campos){
			if(error) throw error;
			respuesta.end(JSON.stringify(resultados));
		});
	} else {
		//respuesta.end(JSON.stringify(objetoUrl));
		respuesta.end("No has indicádo el parámetro 'provincia'");
	}
});

servidor.listen(3000, 'localhost', () => {
	conexion.connect();
    console.log(`Servidor a la escucha en http://localhost:3000/`);
});