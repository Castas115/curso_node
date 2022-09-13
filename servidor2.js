console.log("Empezando...");
//vamos a cargar un par de mçofilos q vienen inculidos en Node...
const http = require("http");
const url = require("url");

//Crear servidor
const servidor = http.createServer((peticion, respuestas) => {
    console.log("Llamada.");
});

// Arrancar sevidor
servidor.listen(3000, "localhost", function(){
    console.log("Servidor a la escucha");

});

