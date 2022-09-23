const fs = require("fs")
// Tenemos un texto
let texto = "¿Son robos o sobornos?"
// Añadimos un SALTO DE LÍNEA al final de cada frase
texto = texto + "\r\n"
// Escribimos el texto en un archivo
fs.writeFileSync("/var/www/palindromos.txt", texto, {flag: "a+"} )



