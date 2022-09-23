console.log("Empezando...");
// Vamos a cargar un par de módulos que vienen incluidos en Node...
const http = require("http");
const url = require("url");

// Vamos a crear un SERVIDOR
const servidor = http.createServer(
    function(peticion, respuesta) {
        console.log("Fistro pecaodr de la pradera");
    }
);

// Ponemos en marcha el servidor...
servidor.listen(3000, "localhost", function(){
    console.log("Servidor a la escucha");
} );


