const http = require("http");
const url = require("url");

// Vamos a crear un SERVIDOR
const servidor = http.createServer( controla );
function controla(peticion, respuesta) {
    let peticionLegible = url.parse(peticion.url, true);
    console.log(peticionLegible.query.nombre);
    console.log(peticionLegible.query.apellido);

    let mensaje = `<hr>Esta es una respuesta de Node.js, qué pasa?<hr>`;
    respuesta.statusCode = 200; // no obligatorio, pero conveniente
    respuesta.setHeader("Content-Type", "text/html; charset=utf-8");
    respuesta.setHeader("Secretito", "Eres gilipollas, jajajaja");
    respuesta.end(mensaje); // Esto es lo que se manda al cliente
}


// Ponemos en marcha el servidor...
servidor.listen(3000, "localhost", function(){
    console.log("Servidor a la escucha");
} );


