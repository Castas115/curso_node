const fs = require("fs")
// Tenemos un texto
let texto = "¿Son robos o sobornos?"
// Añadimos un SALTO DE LÍNEA al final de cada frase
texto = texto + "\r\n"

// Vamos a guardarnos las espaldas contra posibles errores:
try {
    fs.writeFileSync("palindromos.txt", texto, {flag: "a+"} )
} catch(error) {
    console.log("Error al escribir el archivo");
}

// El código que ponga aquí se ejecutará aunque lo anterior falle


