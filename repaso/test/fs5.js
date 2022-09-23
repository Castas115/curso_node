const fs = require("fs")
// Quiero obtener información acerca de un archivo...
let info = fs.statSync("palindromos.txt")

console.log("Es archivo:", info.isFile() )
console.log("Tamaño:", info.size)

console.log("--------------------------------------");

// Ahora quiero obtener la lista de archivos de la carpeta actual
// carpeta actual = "./" o __dirname
// Le puedo pasar el parámetro adicional {withFileTypes: true} para info extra de cada cosa
let lista = fs.readdirSync(__dirname)
console.log(lista);
// lista es un ARRAY con los nombres de los archivos, carpetas y accesos directos que hay donde le hemos indicado


