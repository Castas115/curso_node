// Cargamos el módulo de la fecha. Como ves, podría estar en cualquier carpeta
// Lo que hemos exportado en ese módulo (la función ahora()) lo asignamos a la 
// variable yuyu. Por tanto, yuyu es un alias de ahora
let yuyu = require("./modulo-fecha")

// Así que para activar esa función, puedo invocar a yuyu() en vez de ahora()
console.log( "AHORA:", yuyu() )
