const http = require('http');
const url = require("url");

const servidor = http.createServer((peticion, respuesta) => {
    var parsedUrl = url.parse(peticion.url, true);
    respuesta.statusCode = 200;
    respuesta.setHeader('Content-Type', 'text/json; charset=utf-8');
    respuesta.end(JSON.stringify(parsedUrl.query));
});

servidor.listen(3000, 'localhost', () => {
    console.log(`Servidor a la escucha en http://localhost:3000/`);
});