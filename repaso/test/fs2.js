// Cargamos el módulo del sistema de archivos:
const fs = require("fs");
// Vamos a hacer lo mismo que en la versión anterior, pero de forma SÍNCRONA!!!
let datos = fs.readFileSync("cosas.txt", "utf8");
console.log("----->", datos);
console.log(Math.PI / 4);
console.log(new Date() );