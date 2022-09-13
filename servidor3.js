
//vamos a cargar un par de mçofilos q vienen inculidos en Node...
const http = require("http");
const url = require("url");

//Crear servidor
const servidor = http.createServer((peticion, respuestas) => {
    let peticionLegible = url.parse(peticion.url, true);
    let mensaje = `Reaspuesta del servidor ñ`;
    respuestas.statusCode = 200; //no es obligatorio pero conveniente
    respuestas.setHeader("Content-Type", "text/html; charset=utf-8");
    respuestas.setHeader("saludo", "holaaa");
    respuestas.end(mensaje); // Eso es lo que se manda al cliente

    console.log(peticionLegible.query.nombre);
    console.log(peticionLegible.query.apellido);
});

// Arrancar sevidor
servidor.listen(3000, "localhost", function(){
    console.log("Servidor a la escucha");

});

