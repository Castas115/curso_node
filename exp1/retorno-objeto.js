// Esta función devuelve un OBJETO. Ese objeto puede tener propiedades
// de tipo cadena, número, booleano, array, otro objeto, función...
function persona(paramNombre, paramEdad){
    let objeto = {
        nombre: paramNombre,
        edad: paramEdad,
        hijos: parseInt(Math.random() * 4),
        saluda: function() {console.log("Hola, soy " + this.nombre)}
    }
    return objeto
}

let p1 = persona("Ana", 28)
let p2 = persona("Pepe", 46)

p1.saluda()