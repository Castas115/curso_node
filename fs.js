// Cargamos el módulo del sistema de archivos
const fs = require("fs");
// Vamos a usar FS para abrir un archivo
fs.open("cosas.txt", "r", function(){});
// Acceso a los contenidos del archivo
fs.readFile("cosaas.txt", "utf8", function(error, datos){
    if(error) throw error;
    console.log(datos);r
});