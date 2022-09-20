// Cargamos el módulo del sistema de archivos
const fs = require("fs");
// lo mismo pero sincrono
let datos = fs.readFileSync("cosas.txt", "utf8");
console.log(datos);
console.log(Math.PI/4);
console.log(new Date());