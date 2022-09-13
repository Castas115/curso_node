// Esta es la "index" de mi aplicación defoinido en package.json > main
const {faker} = require("@faker-js/faker");
const http = require("http");
const url = require("url");
faker.setLocale('es');

const servidor = http.createServer(controladorServidor);

function controladorServidor(peticion, respuestas){
    let peticionLegible = url.parse(peticion.url, true);
    respuestas.statusCode = 200; 
    respuestas.setHeader("Content-Type", "text/html; charset=utf-8");
    nombre = faker.name.fullName();
    gatito = faker.image.avatar();
    empresa = faker.company.name();
    let mensaje =`
        <h2>${nombre}</h2>
        <hr>
        <img scr="${gatito}"><br/>
        ${empresa}
    `;
    respuestas.end(mensaje); 
}
servidor.listen(3000, "localhost", function(){
    console.log("Servidor a la escucha");
});
