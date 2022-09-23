// Cargamos el módulo del sistema de archivos:
const fs = require("fs");
// ¿Cómo accedo a los contenidos de ese archivo?
fs.readFile("cosas.txt", "utf8", archivoLeido )

// Cuando se haya terminado de leer los contenidos del archivo...
function archivoLeido(error, datos){
    if(error) throw error;
    console.log("----->", datos);
}

console.log(Math.PI / 4);
console.log(new Date() );