const fs = require('fs');
const { stdout } = require('process');

fs.readFile(process.argv[2], 'utf-8', function (err, data) {
    const texto = data.toString()

    const espacos = texto.split('\n')

    console.log(espacos.length - 1)
    
})