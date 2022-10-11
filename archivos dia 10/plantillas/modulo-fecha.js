// Desde 2015, los parámetros de las funciones en JS admiten valores por defecto
// En este caso, si no le pasamos ningún parámetro, idioma será "es"
let ahora = function(idioma="es") {
    let fecha = new Date().toLocaleString(idioma)
    return fecha
}
let inutil = true

// Este código "marca" la función ahora() para exportar
// Eso quiere decir que, cuando cargue este módulo desde otro sitio, podré usar ahora()
// Todo lo que no exportemos no lo podremos usar
module.exports = ahora