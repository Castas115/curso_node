const express = require("express")

const app = express();

// Esto es para pode acceder a recursos estáticos de nuestra app
//por ejemplo http://localhost:3000/textos/texto1.txt buscara el archivo
app.use("/textos", express.static("textos") );

app.listen(3000, function(){
    console.log("Servidor a la escucha...");
});