const fs = require("fs")
let texto = "Satán sala las natas pt 2"
fs.writeFileSync("palindromos.txt", texto, {flag: "a+"})

