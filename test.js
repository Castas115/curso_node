// Esta es la "index" de mi aplicación defoinido en package.json > main
const {faker} = require("@faker-js/faker");
const http = require("http");
const url = require("url");

const servidor = http.createServer((peticion, respuestas) => {
    let peticionLegible = url.parse(peticion.url, true);
    respuestas.statusCode = 200; 
    respuestas.setHeader("Content-Type", "text/html; charset=utf-8");
    respuestas.end(faker.name.fullName()); 
});

servidor.listen(3000, "localhost", function(){
    console.log("Servidor a la escucha");
});
