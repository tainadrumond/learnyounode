const fs = require('fs');
const fa = require('fa');

let texto = process.argv[2]
let extensao = '.' + process.argv[3]

fs.readdir(texto, extensao, function(err, list) {
    let arquivos = list

    arquivos.array.forEach(element => {
        if(element[1] = extensao) {
            console.log(element)
        }
    });


})