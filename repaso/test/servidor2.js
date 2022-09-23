const http = require("http");
const url = require("url");

// Vamos a crear un SERVIDOR
const servidor = http.createServer( controla );
function controla(peticion, respuesta) {
    console.log("Fistro pecador de la pradera, por la gloria de su madre");
}


// Ponemos en marcha el servidor...
servidor.listen(3000, "localhost", function(){
    console.log("Servidor a la escucha");
} );


