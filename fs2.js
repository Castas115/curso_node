// Cargamos el módulo del sistema de archivos
const fs = require("fs");
// lo mismo pero sincrono
let datos = fs.readFileSync("cosaas.txt", "utf8");
console.log(datos);
