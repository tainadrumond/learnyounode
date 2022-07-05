const { Console } = require('console');
const fs = require('fs');

let path = process.argv[2]
let extensao = '.' + process.argv[3]

fs.readdir(path, function(err, list) {
    let arquivos = list

    for(let arquivo of arquivos) {
        if(arquivo.endsWith(extensao))
            console.log(arquivo)
    }


})