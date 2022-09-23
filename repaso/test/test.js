// Esta es la "index" de mi aplicación
// Vamos a cargar el módulo faker para poder usarlo
const {faker} = require("@faker-js/faker");

faker.setLocale('es');

// Una vez cargado, voy a generar nombres al azar...
let crono = setInterval(genera, 1000);
function genera() {
    let nombre = faker.name.fullName();
    console.log(nombre);
}