const mymodule = require('./mymodule.js')
const directory = process.argv[2]
const extension = process.argv[3]

mymodule(directory, extension, (err, data) => {
    if(err)
        return console.error('There was an error:', err)
    
    for(arquivo of data)
        console.log(arquivo)
})

