const fs = require('fs')

module.exports = function (directory, extension, callback) {
    fs.readdir(directory, function(err, list) {
        if(err)
            return callback(err)

        let arquivos = new Array()

        for(let arquivo of list) {
            if(arquivo.endsWith('.' + extension))
                arquivos.push(arquivo)
        }

        callback(null, arquivos)
    })
}
