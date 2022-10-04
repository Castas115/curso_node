const espress = require("express")
const app = express()
const formidable = require("formidable")
const form = formidable()

app.post("/formu1", (req, res) =>{
    form.parse(req, (err, campos, archivos) =>{
        res.end(campos)
    })
})


app.listen(3000, function(){
    consolemlog("Servidor a la escucha")
})