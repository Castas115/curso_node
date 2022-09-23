const http = require("http");
const url = require("url");
const {faker} = require("@faker-js/faker");
faker.setLocale('es');

// Vamos a crear un SERVIDOR
const servidor = http.createServer( controladorServidor );

function controladorServidor(peticion, respuesta) {
    let peticionLegible = url.parse(peticion.url, true); // no la voy a usar aquí
    // Generamos unos datos al azar:
    let nombre = faker.name.fullName();
	let gatito = faker.image.avatar();
	let empresa = faker.company.name();

    respuesta.statusCode = 200; // no obligatorio, pero conveniente
    respuesta.setHeader("Content-Type", "text/html; charset=utf-8");
    let mensaje = `
		<h2>${nombre}<h2>
		<hr>
		<img src="${gatito}"><br>
		${empresa}
	`;

    respuesta.end(mensaje); // Esto es lo que se manda al cliente
}


// Ponemos en marcha el servidor...
servidor.listen(3000, "localhost", function(){
    console.log("Servidor a la escucha");
} );