// ¿Cómo pedir datos al usuario desde la terminal?
const interfaz = require("readline");

console.clear()    // Limpiamos la terminal al iniciar el programa
let yuyu = interfaz.createInterface(process.stdin, process.stdout)
yuyu.question("Cuanto son 3 + 2? ", procesa)

function procesa(respuesta) {
    if(respuesta == "5") {
        console.log("POR EL CULO TE LA HINCO!!!!");
    } else {
        console.log("La respuesta no es correcta");
    }
    yuyu.close()    // importante para cerrar el programa
}

