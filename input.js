// Pedir datos al usuario mediante la terminal:
const interfaz = require("readLine")

let yuyu = interfaz.createInterface(process.stdin, process.stdout)
yuyu.question("Cuanto es 3 + 2?", procesa)

function procesa(respuesta){
    console.log("has respondido: ", respuesta)
    yuyu.close
}