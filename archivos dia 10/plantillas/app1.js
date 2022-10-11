const express = require("express")
const hbars = require("express-handlebars")

// Creamos la app de express
let app = express()
// Ponemos en marcha el motor de handlebars
app.engine("handlebars", hbars.engine() )
// Le decimos a express que use el engine de handlebars para las vistas
app.set("view engine", "handlebars")
// Y le indicamos a express dónde está la carpeta de las vistas
app.set("views", "./vistas")

// Esto es para la carga de recursos estáticos (como los css de las páginas):
app.use("/css", express.static("./vistas/layouts") )

app.get("/", function(peticion, respuesta) {
    respuesta.render("inicio", {data: {titulo: "Inicio"}})
})
// Esta ruta carga la vista "ahora.handlebars"
// Lo del :color? significa que es OPCIONAL. Si no le pasamos un color
// (su nombre en inglés) el color será negro.
app.get("/ahora/:color?", function(peticion, respuesta) {
    // Vamos a añadir unos datos a la plantilla. De momento los creo aquí
    // Este objeto contiene opciones de formato para las fechas localizadas
    let opciones = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    }
    // Creo una fecha localizada en español con las opciones de formato anteriores
    let fe = new Date().toLocaleString("es", opciones)
    // Por comodidad, creo un objeto con toda la info que le quiero pasar a la plantilla
    let datos = {
        color: peticion.params.color,
        fecha: fe,
        titulo: "Prueba de color",
    }
    respuesta.render("ahora", {data: datos})
})

app.listen(3000, function(){
    console.log("Servidor a la escucha")
})





